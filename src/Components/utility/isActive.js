
const isActive=(visible,elemName)=>{
    let btns = document.querySelectorAll(".navBtn");
    btns.forEach((elem)=>{
      elem.classList.remove('active');
    })
    if(visible){
        document.getElementsByClassName(elemName)[0].classList.add('active')
    
}
    else{
        // document.getElementsByClassName('aboutNavItem')[0].classList.remove('active')
    }
}
export default isActive;