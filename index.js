
const more_detail_btn = document.getElementById('handle_details');
const more_details_div = document.getElementById('more_details_container');

more_detail_btn.addEventListener('click', function() {
    console.log("here")
    if(more_details_div.style.display === 'none'){
        more_details_div.style.display = 'block';
    }
    else {
        more_details_div.style.display = 'none';
    }
})



const theme_toggle_btn = document.getElementById('toggle_theme');
const main_container_div = document.getElementById('main_container');

theme_toggle_btn.addEventListener('click', function() {
    console.log("toggle?")
   main_container_div.classList.toggle('dark_theme');
})