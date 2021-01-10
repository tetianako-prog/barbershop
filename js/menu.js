(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closeMenuRef = document.querySelector("[data-menu-close]");
  const body = document.querySelector("body");
  const backdrop = document.querySelector(".backdrop");
  

  menuBtnRef.addEventListener("click", () => {
    
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("is-open");
    backdrop.classList.toggle("is-hidden");
    
    
  });
  closeMenuRef.addEventListener("click", () => {
    
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("is-open");
    backdrop.classList.toggle("is-hidden");
    
    
  });
})();