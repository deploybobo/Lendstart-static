const menuButton = document.querySelector('#mobile_menu_btn');
const menu = document.querySelector('#menu');
window.onresize = initMobile(); 

function initMobile(){
    if( window.innerWidth < 1100 ){
        menu.style.display = 'none'
        document.querySelectorAll('.category').forEach( ( el )=>{
            el.setAttribute("onclick","return false;");
        });
    }
    else{
        menu.style.display = 'flex';
    }

};

menuButton.addEventListener("click", () =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
        document.body.style.overflow = "hidden";
    }else{
        menu.style.display = 'none';
        document.body.style.overflow = "visible";
    }

});