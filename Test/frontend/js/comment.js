document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".comment-img__item");
  const comments = document.querySelectorAll(".comment-block__item");
  const classActiveImg = "active-img";
  const classActiveComment = "active-comment";

  
   imgs.forEach(element => {
    element.addEventListener("click", function() {
      const dataIndx = this.dataset.img;

      closeAllItems(imgs,classActiveImg);
      this.classList.add(classActiveImg);
      showComment(dataIndx);
    });
  });

  function closeAllItems(elems, classname) {
    elems.forEach(element => {
      element.classList.remove(classname);
    });
  }

  function showComment(data) {
     
    const selectElem = document.querySelector(`.comment-block__item[data-comment = "${data}"]`);
    let i = 0;

    if (selectElem.classList.contains(classActiveComment)){
      return
    }
    
    closeAllComments()
    selectElem.classList.add(classActiveComment)
    
    selectElem.style.opacity = i;
    
    let timerId = setInterval(() => {
      i = i + 0.05
      selectElem.style.opacity = i;
       if ( i > 1 ){
        clearInterval(timerId)
       } }, 25);
  }
 
  function closeAllComments() {
    comments.forEach(element => {
      element.classList.remove(classActiveComment);
     });
  }
 



});
