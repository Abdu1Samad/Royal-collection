
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


});

close_icon.addEventListener('click',function(){

    // if(overlay_container.style.display === 'block'){
    //     overlay_container.style.display = 'none';
    // }

    overlay_container.style.visibility = 'hidden';
    searchBtn.style.display = 'none';
})