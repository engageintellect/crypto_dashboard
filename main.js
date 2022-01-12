
console.log("hello world");

// SETTINGS
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
});


// FUNCTIONS
function link_to_github() {
    window.open(
        "https://github.com/jc9361"
    )
}


function scroll_to_top() {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function dark_mode_toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
