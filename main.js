// Change Navbar Styles on Scroll

window.addEventListener('scroll', () =>(
    document.querySelector('nav').classList.toggle
    /* Javascript method ScrollBy() scrolls the web page to 
    the specific number of pixels. The syntax of ScrollBy() 
    methods is : executeScript("window. scrollBy(x-pixels,y-pixels)").
    The scrollBy() method scrolls the document by the specified number of pixels.
    scrollX returns the X coordinate of the left edge of the current viewport. 
    If there is no viewport, the returned value is 0.
    The scrollY property returns the pixels a document has scrolled 
    from the upper left corner of the window. The scrollY property is read-only.
    */

    ('window-scroll',window.scrollY > 0)
))


// Show/hide faq Answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"; 
        }else {
            icon.className = "uil uil-plus";
        }
    })
})

// show/hide NAV Menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click', () =>  {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})


// Close Nav Menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
