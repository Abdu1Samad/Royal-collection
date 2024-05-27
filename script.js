
// Search Overlay open close work 

let search_icon = document.querySelector(".fa-magnifying-glass");
let close_icon = document.querySelector("#seach-close-icon");
let overlay_container = document.querySelector(".search-overlay");
let searchBtn = document.querySelector('#search-btn');

search_icon.addEventListener('click' ,function(){
    // console.log('testing opening overlay')
    // if(overlay_container.style.visibility == 'hidden'){
    //     overlay_container.style.display = 'visible';
    //     console.log('overlay visible')
    // }
    // else{
    //     overlay_container.style.visibility = 'hidden';
    // }
    overlay_container.style.visibility = 'visible';
    searchBtn.style.display = 'block'; // search button ko display block aur none kara hai woh jab close krte hain search overlay ko to boht der bad close hota hai ye button.
    document.body.style.height = '100vh';

<<<<<<< HEAD
    overlay_container.style.visibility = 'visible';
    searchBtn.style.display = 'block'; 
    document.body.style.height = '100vh';
=======
>>>>>>> 062cb7c64500c307e646cec745788b2b275d8538

});

close_icon.addEventListener('click',function(){

<<<<<<< HEAD
    overlay_container.style.visibility = 'hidden';
    searchBtn.style.display = 'none';
=======
    // if(overlay_container.style.display === 'block'){
    //     overlay_container.style.display = 'none';
    // }
>>>>>>> 062cb7c64500c307e646cec745788b2b275d8538

    overlay_container.style.visibility = 'hidden';
    searchBtn.style.display = 'none';
})