document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const buttons = document.getElementById("buttons");
    const buttonElements = document.querySelectorAll(".button");
  
    menu.addEventListener("click", () => {
      buttons.classList.toggle("animate");
  
      buttonElements.forEach((button) => {
        if (button !== menu) {
          button.classList.toggle("hidden");
        }
      });
    });
  });