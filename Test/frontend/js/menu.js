document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header-menu__burger");
  const menu = document.querySelector(".header-list");
  const classActiveBurger = "active-burger";
  const classActiveMenu = "active-menu";
  const link = document.querySelectorAll(".header-list__link");
  
 link.forEach(element => {
    element.addEventListener("click", function(e) {
      e.preventDefault();
    
      const attr = this.getAttribute("href");
      const sectionScroll = document.querySelector(`${attr}`);

      burger.classList.remove(classActiveBurger);
      menu.classList.remove(classActiveMenu);
      stateScrollWindow();
      
      sectionScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
      
      });
    });
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle(classActiveBurger);
    menu.classList.toggle(classActiveMenu);
    stateScrollWindow()

  });


  function stateScrollWindow() {
    
    menu.classList.contains(classActiveMenu)
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  }



});
