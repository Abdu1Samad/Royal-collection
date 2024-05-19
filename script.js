
// Search Overlay open close work 

let search_icon = document.querySelector(".fa-magnifying-glass");
let close_icon = document.querySelector("#seach-close-icon");
let overlay_container = document.querySelector(".search-overlay");

search_icon.addEventListener('click' ,function(){

    if(overlay_container.style.display === 'none'){
        overlay_container.style.display = 'block';
    }
    else{
        overlay_container.style.display = 'none';
    }

});

close_icon.addEventListener('click',function(){

    if(overlay_container.style.display === 'block'){
        overlay_container.style.display = 'none';
    }

})