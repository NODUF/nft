const btnIcon = document.querySelector('.right-nav span');
const btn = document.querySelector('.right-nav span')
const toggleInfo = document.querySelector('.menu-bar');
//btnIcon.innerHTML = "expand_less";
//toggleInfo.classList.toggle('active')

btn.addEventListener('click', (e)=>{
   toggleInfo.classList.toggle('active');
   if(toggleInfo.classList.contains('active')){
      btnIcon.innerHTML = 'chevron_right';
   }else{
      btnIcon.innerHTML = 'menu';
   }
})