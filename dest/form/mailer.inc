<?
	class Mailer{
		private $sender;
		private $reply_to;
		private $recipient;
		private $subject;
		private $headers=array();
		private $mimeTypes=array();
		private $html=array();
		private $attachments=array();
		public function __construct($sender,$reply_to,$recipient,$subject,$message){
			// validate incoming parameters
			if($sender&&!preg_match("/^.+@.+$/",$sender)){
				throw new Exception('Invalid value for email sender.');
			}
			if($reply_to&&!preg_match("/^.+@.+$/",$reply_to)){
				throw new Exception('Invalid value for email reply-to.');
			}
			if($recipient&&!preg_match("/^.+@.+$/",$recipient)){
				throw new Exception('Invalid value for email recipient.');
			}
			if(/*!$subject||*/@strlen($subject)>255){
				throw new Exception('Invalid length for email subject.');
			}
			//if(!$message){
				//throw new Exception('Invalid value for email message.');
			//}
			$this->sender=$sender;
			$this->reply_to=$reply_to;
			$this->recipient=$recipient;
			$this->subject='=?UTF-8?B?'.base64_encode($subject).'?=';
			$this->message=$message;
			// define some default MIME headers
			$this->headers['MIME-Version']='1.0';
			$this->headers['Content-Type']='multipart/mixed;charset=UTF-8;boundary="MIME_BOUNDRY"';
			$this->headers['To']=$this->recipient;//'<'.$this->sender.'>';
			if($this->sender)$this->headers['From']=$this->sender;//'<'.$this->sender.'>';
			if($this->sender)$this->headers['Return-Path']=$this->sender;//'<'.$this->sender.'>';
			if($this->reply_to)$this->headers['Reply-To']=$this->reply_to;
			$this->headers['X-Mailer']='PHP5';
			if($this->sender)$this->headers['X-Sender']=$this->sender;
			$this->headers['X-Priority']='3';
		}
		// add new MIME header
		public function addHeader($name,$value){
			$this->headers[$name]=$value;
		}
		// add HTML to message
		public function addHTML($html){
			if(!$html){
				throw new Exception('Invalid HTML.');
			}
			$this->html[]=$html;
		}
		// add new attachment
		public function addAttachment($attachment){
			if(!file_exists($attachment)){
				throw new Exception('Invalid attachment.');
			}
			$this->attachments[]=$attachment;
		}
		// get MIME Type of attachment
		/*private function getMimeType($attachment){
			$attachment=explode('.',basename($attachment));
			if(!$mimeType=array_search(strtolower($attachment[count($attachment)-1]),$this->mimeTypes)){
				throw new Exception('MIME Type not found.');
			}
			return $mimeType;
		}*/
		private function getMimeType($file_path){
			$mtype = '';
			if (function_exists('mime_content_type')){
					 $mtype = mime_content_type($file_path);
			}
			else if (function_exists('finfo_file')){
					 $finfo = finfo_open(FILEINFO_MIME);
					 $mtype = finfo_file($finfo, $file_path);
					 finfo_close($finfo);  
			}
			if ($mtype == ''){
					 $mtype = "application/force-download";
			}
			return $mtype;
		}
		// create message MIME headers
		private function buildHeaders(){
			foreach($this->headers as $name=>$value){
				$headers[]=$name.': '.$value;
			}
			return implode("\r\n",$headers)."\r\n";//."\r\nThis is a multi-part message in MIME format.\r\n";
		}
		// create text part of the message
		private function buildTextPart(){
			if($this->message){
				return "--MIME_BOUNDRY\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: quoted-printable\r\n\r\n\r\n".$this->message."\r\n\r\n";
			}else{
				return '';
			}
		}
		// create HTML part of the message
		private function buildHTMLPart(){
			if(count($this->html)>0){
				$htmlPart='';
				foreach($this->html as $html){
					$htmlPart.="--MIME_BOUNDRY\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n\r\n".$html."\r\n\r\n";
				}
				return $htmlPart;
			}
		}
		// create attachments part of the message
		private function buildAttachmentPart(){
			if(count($this->attachments)>0){
				$attachmentPart='';
				foreach($this->attachments as $attachment){
					if(!$fileStr=file_get_contents($attachment)){
						throw new Exception('Error reading contents of attachment.');
					}
					$fileStr=chunk_split(base64_encode($fileStr));
					$attachmentPart.="--MIME_BOUNDRY\r\nContent-Type: ".$this->getMimeType($attachment)."; name=\"".basename($attachment)."\"\r\nContent-disposition:attachment\r\nContent-Transfer-Encoding: base64\r\n\r\n".$fileStr."\r\n\r\n";
				}
				return $attachmentPart;
			}
		}
		// send email
		public function send(){
			$to=$this->recipient;
			$subject=$this->subject;
			$headers=$this->buildHeaders();
			$message=$this->buildTextPart().$this->buildHTMLPart().$this->buildAttachmentPart()."--MIME_BOUNDRY--\r\n";
			if(!mail(/*$to*/'',$subject,$message,$headers)){
				throw new Exception('Error sending email.');
			}
			else var_dump($subject,$message,$headers);
		}
	}
?>
