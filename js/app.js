/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("section")
const ul = document.getElementById("navbar__list")
// options for IntersectionObserver
//get options from MDN
//url:https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    //changed threshold value from 1.0 to 0.3
    threshold: 0.3
}
/**
 * End Global Variables
 * 
 */

/**
 * Begin Main Functions
 * 
 */

// build the nav

for (let i = 0; i<sections.length;i++){
    let li = document.createElement("li")
    li.setAttribute("class","menu__link")
    li.innerText=`${sections[i].getAttribute("data-nav")}`
    ul.appendChild(li)
    /*
     another way
     let data = document.createTextNode(sections[i].getAttribute("data-nav"))
     li.appendChild(data)
    */
}




// Scroll to section on link click
const li = document.querySelectorAll("li")
for(let i=0;i<li.length;i++){
    li[i].onclick=function(){
        for(let j =0 ; j<li.length;j++){
            li[j].classList.remove("active")
            sections[j].classList.remove("your-active-class")
        };
        li[i].classList.add("active")
        sections[i].classList.add("your-active-class")
        /*
         Scroll to section by scrollIntoView
         some informations about scrollIntoView
         1.MDN
         url:https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
         2.FWD video Explanation starts from 29:00
         url:https://udacity.zoom.us/rec/play/nb5PCLr2IGQNDiqrqIikMlrz69oo-fXHBPPjzCazmevrDzBfxoaKFwmkkJJf5IsBqoiKdiDYrZIg3PkM.RtfPrGHy-yvlHwa3?startTime=1629309559000&_x_zm_rtaid=T3oOsnHrT2usjyHO8CH8jw.1631802460192.c7a92d3c58e8bf6fec532e1d5243d748&_x_zm_rhtaid=182
         */ 
         sections[i].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline:"nearest"
        })
    }
}
// Add class 'active' to section when near top of viewport
function callback (ent) {
if(ent[0].isIntersecting){
        for(let j =0 ; j<li.length;j++){
            li[j].classList.remove("active")
            sections[j].classList.remove("your-active-class")
        };
        for(let k =0 ; k<li.length;k++){
            if(ent[0].target.getAttribute("data-nav")===li[k].innerText){
                li[k].classList.add("active") 
            }

        }
        ent[0].target.classList.add("your-active-class")
       
    }
}
// Toggle menu in phone case 
function toggleMenu(){
    if(ul.style.display==="block"){
        ul.style.display="none"
    }else {
        ul.style.display="block"
    }
}






/*
 * End Main Functions
 * Begin Events
 * 
 */
/*
some informations about IntersectionObserver
1.MDN 
url:https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
2.FWD video Explanation starts from 01:06:00
url:https://udacity.zoom.us/rec/play/nb5PCLr2IGQNDiqrqIikMlrz69oo-fXHBPPjzCazmevrDzBfxoaKFwmkkJJf5IsBqoiKdiDYrZIg3PkM.RtfPrGHy-yvlHwa3?startTime=1629309559000&_x_zm_rtaid=T3oOsnHrT2usjyHO8CH8jw.1631802460192.c7a92d3c58e8bf6fec532e1d5243d748&_x_zm_rhtaid=182
3.video from Youtube
url:https://www.youtube.com/watch?v=QOWq3_zpOK4&t=258s

*/
 for(let i =0 ; i<sections.length ; i++){
     let observer = new IntersectionObserver(callback, options);
     observer.observe(sections[i])
 
 }







