const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu=document.querySelector('.navbar__menu');
const icons=document.querySelector('.navbar__icons');
const login=document.querySelector('.navbar__login');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    login.classList.toggle('active');
});

/*모달창 띄우고 제거하기*/ 
const modalBtn = document.querySelector(".navbar__login");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});