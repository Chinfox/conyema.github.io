const professionText = document.getElementById("about-profession").innerText;
const aboutMe = document.getElementById("profession");
const headerNav = document.getElementById("site-header");
const speed = 30;
let i = 0;

function toggleHeaderBg() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    // headerNav.classList.remove("header-transparent");
    headerNav.classList.add("header-transparent");
  } else {
    // headerNav.classList.add("header-transparent");
    headerNav.classList.remove("header-transparent");
  }
}

function typeWriter() {
  if (i < professionText.length) {
    aboutMe.innerHTML += professionText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onscroll = function() {
  toggleHeaderBg()
};

// document.addEventListener('DOMContentLoaded', () => {
//   //registerServiceWorker();
//   typeWriter();
// });

typeWriter();
