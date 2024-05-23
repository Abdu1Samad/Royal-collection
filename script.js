
// Search Overlay open close work 

let search_icon = document.querySelector(".fa-magnifying-glass");
let close_icon = document.querySelector("#seach-close-icon");
let overlay_container = document.querySelector(".search-overlay");
let searchBtn = document.querySelector('#search-btn');

search_icon.addEventListener('click' ,function(){

    overlay_container.style.visibility = 'visible';
    searchBtn.style.display = 'block'; 
    document.body.style.height = '100vh';

});

close_icon.addEventListener('click',function(){

    overlay_container.style.visibility = 'hidden';
    searchBtn.style.display = 'none';

})