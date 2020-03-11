document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const iframe = modal.firstElementChild.firstElementChild;
  const btnPlay = document.querySelector(".video-btn");
  const classActiveModal = "modal-on";

  modal.addEventListener("click", () => {
    closeModal(event, () => {
      modal.classList.remove(classActiveModal);
    });
  });

  function closeModal(e, f) {
    document.body.style.overflow = "auto";
    if (e.target == modal) {
      let count = 1;
      let timerId = setInterval(() => {
        count -= 0.1;
        modal.style.transform = `scale(${count})`;
        if (count < 0) {
          clearInterval(timerId);
          f();
        }
        modal.classList.add(classActiveModal);
      }, 10);
      modal.firstElementChild.firstElementChild.remove();
    }
  }

  btnPlay.addEventListener("click", () => {
    let count = 0;
    document.body.style.overflow = "hidden";
    modal.classList.add(classActiveModal);
    modal.firstElementChild.append(iframe);

    let timerId = setInterval(() => {
      count += 0.1;
      modal.style.transform = `scale(${count})`;

      if (count > 1) {
        modal.style.transform = `scale(${1})`;
        clearInterval(timerId);
      }
    }, 10);
  });
});
