document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".comment-img__item");
  const comments = document.querySelectorAll(".comment-block__item");
  const cmntArray = Array.from(comments);
  const classActiveImg = "active-img";
  const classActiveComment = "active-comment";

  imgs.forEach(element => {
    element.addEventListener("click", function() {
      const dataIndx = this.dataset.img;

      if (stopSpam()) {
        return;
      }

      closeAllItems(imgs, classActiveImg);
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
    const selectElem = document.querySelector(
      `.comment-block__item[data-comment = "${data}"]`
    );
    let i = 0;

    if (selectElem.classList.contains(classActiveComment) || stopSpam()) {
      return;
    }

    closeAllComments(elems => {
      elems.classList.remove(classActiveComment);
      elems.style.opacity = 0;
    });

    selectElem.classList.add(classActiveComment);
    selectElem.style.position = "absolute";

    selectElem.style.opacity = i;

    let timerId = setInterval(() => {
      i = i + 0.2;
      selectElem.style.opacity = i;
      if (i > 1) {
        selectElem.style.opacity = 1;
        selectElem.style.position = "relative";
        clearInterval(timerId);
      }
    }, 40);
  }

  function closeAllComments(f) {
    const filterArr = cmntArray.filter(item =>
      item.classList.contains(classActiveComment)
    );

    filterArr.forEach(element => {
      let i = 1;
      let timerId = setInterval(() => {
        i = i - 0.2;
        element.style.opacity = i;
        if (i < 0) {
          clearInterval(timerId);
          f(element);
        }
      }, 40);
    });
  }

  function stopSpam() {
    const filterArr = cmntArray.filter(item =>
      item.classList.contains(classActiveComment)
    );
    if (filterArr.length > 1) {
      return true;
    }
  }
});
