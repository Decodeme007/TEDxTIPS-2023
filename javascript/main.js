const tips_mobile_nav = document.querySelector('.snav-mobile-nav');
const nav_header = document.querySelector('.snav');
const toggleNavbar=()=>{
    nav_header.classList.toggle("snav-active")
}
tips_mobile_nav.addEventListener('click',() => toggleNavbar());