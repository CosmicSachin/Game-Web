var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.10);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    loadNow(15);
});










gsap.from(".jk1", {
    x: "100vw",

    scrollTrigger: {
        trigger: ".jk1",
        scroller: "body",
        // markers:true,
        start: "top -20%",
        end: "top 0%",
        scrub: 2,
    }
})






gsap.to(".jk0", {
    x: "50vw",

    scrollTrigger: {
        trigger: ".a8",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 90%",
        scrub: 1,

    }
})






gsap.to(".kra", {

    transform: "translatex(41vw)",

    scrollTrigger: {
        trigger: ".kra",
        scroller: "body",

        // markers:true,
        start: "top 90%",
        end: "top 50%",
        scrub: 5,
    }
})


gsap.to(".bg1", {

    x: "31vw",

    scrollTrigger: {
        trigger: ".kra",
        scroller: "body",

        // markers:true,
        start: "top 50%",
        end: "top -50%",
        scrub: 0,
    }
})


gsap.to(".han", {

    transform: "translatex(-25vw)",

    scrollTrigger: {
        trigger: ".han",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2,

    }
})











gsap.from(".page1 img", {
    translateX: "50vw"
    ,

    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top 100%",
        scrub: 2,
        pin: true
    }
})


gsap.from(".page2 img", {
    translateX: "-50vw"
    ,

    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        //  markers:true,
        start: "top 0%",
        end: "top 100%",
        scrub: 2,
        pin: true
    }
})






gsap.to(".page5 img", {
    translateX: "50vw"
    ,

    scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        //    markers:true,
        start: "top -50%",

        end: "top 50%",
        scrub: 2,
        pin: true
    }
})


gsap.to(".page7 img", {
    translateX: "-50vw"
    ,

    scrollTrigger: {
        trigger: ".page7",
        scroller: "body",
        // markers:true,
        start: "top -50%",

        end: "top 100%",
        scrub: 2,
        pin: true
    }
})



gsap.from(".leg", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".vd",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
    }
})


gsap.from(".leg1", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".vd1",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
    }
})


// let tr = gsap.timeline()

gsap.from(".ex", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".hammer",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 99%",
        scrub: 2,
        pin: true
    }
})


gsap.from(".bhl", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".bhala",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 99%",
        scrub: 2,
        pin: true

    }
})




gsap.from(".bow", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".bows",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 99%",
        scrub: 2,
        pin: true

    }
})


gsap.from(".dre", {
    y: "100vh",

    opacity: 0,

    scrollTrigger: {
        trigger: ".draup",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 99%",
        scrub: 2,
        pin: true

    }
})







// gsap.from(".a31",{
//     y:"80vh",


//     scrollTrigger: {
//         trigger:".a31",
//         scroller:"body",
//         markers:true,
//         start:"top 100%",
//         end:"top 99%",
//         scrub: 2,
//     //    pin: true
//         }
// })




gsap.from(".realm", {
    y: "100vh",

    opacity: 0,
    scrollTrigger: {
        trigger: ".a31",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
        pin: true
    }
})







