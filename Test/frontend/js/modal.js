document.addEventListener('DOMContentLoaded', () => {

const modal = document.querySelector(".modal");
const iframe = modal.firstElementChild.firstElementChild;
const btnPlay = document.querySelector(".video-btn");
const classActiveModal = "modal-on";

deleteNode(); 

modal.addEventListener("click", function () {
  closeModal(event,function() {
    modal.classList.remove(classActiveModal);
  })
});


function closeModal(e,f){
  document.body.style.overflow = "auto";
  if (e.target == modal) {
    let count = 1;
    let timerId = setInterval(() => {
      count -= 0.1
      modal.style.transform = `scale(${count})`
      if (count < 0){
        clearInterval(timerId)
        f();
    }
     modal.classList.add(classActiveModal);
    }, 2);
    deleteNode();
  }
}


btnPlay.addEventListener("click", () => {
    let count = 0;
    document.body.style.overflow = "hidden";
    modal.classList.add(classActiveModal);
    modal.firstElementChild.append(iframe);

    let timerId = setInterval(() => {
      count += 0.1
      modal.style.transform = `scale(${count})`

      if (+count.toFixed(2)+0.1 > 1){
        clearInterval(timerId)
      }

    }, 2);

});

function deleteNode() {
    modal.firstElementChild.firstElementChild.remove();
  }


})