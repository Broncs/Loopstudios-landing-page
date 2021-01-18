const navMenu = document.querySelector(".nav-menu");
/* Get trigger element */
const modalTrigger = document.querySelector(".hamburger");

const jsModal = document.querySelector(".modal");
const modalClose = document.querySelector(".jsModalClose");

const handleScroll = () => {
  if (window.scrollY > 200) {
    navMenu.classList.add("nav-scrolled");
  } else {
    navMenu.classList.remove("nav-scrolled");
  }
};

const handleOpenModal = () => {
  jsModal.classList.add("open");
};

const handleCloseModal = () => {
  jsModal.classList.remove("open");
};

modalTrigger.addEventListener("click", handleOpenModal);
document.addEventListener("scroll", handleScroll);
modalClose.addEventListener("click", handleCloseModal);
