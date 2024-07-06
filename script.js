function homePageAnimation() {
    gsap.set('.slidesm',{
        scale:5
    })
    
    var tl = gsap.timeline({
        scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            trigger: ".home",
            scrub:1
        },
    })
    
    
    tl
    .to(".vfull", {
        '--clip': '0%',
        ease: Power2,
    },'a')
    .to('.slidesm', {
        scale:1,
        ease: Power2
    },'a')
    .to('.lt', {
       xPercent: -5,
       stagger: 0.03,
        ease: Power4
    },'b')
    .to('.rt', {
        xPercent: 5,
       stagger: 0.03,
        ease: Power4    
    },'b')
    
        
}

function slideAnimation() {
    gsap.to('.slide',{
        scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            trigger: ".real",
            scrub:2,
        },
        xPercent: -200,
        ease: "power2.inOut" 
    })
}

function teamAnimation() {
    document.querySelectorAll(".listlem")
    .forEach(function(e) {
        e.addEventListener("mousemove",function (dets){
            gsap.to(this.querySelector(".pic"), {opacity:1 ,ease: Power4, duration:0.5,x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX)});
        });
        e.addEventListener("mouseleave",function (dets){
            gsap.to(this.querySelector(".pic"), {opacity:0 ,ease: Power4, duration:0.5});
        });
        
    })
}

function paraAnimation() {
    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function(e) {
            if (e === "") clutter += `<span>&nbsp;</span>`;
            clutter += `<span>${e}</span>`;
        });
    document.querySelector(".textpara").innerHTML = clutter;
    
    gsap.set(".textpara span", { opacity: 0.1 });
    
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4,
    });
    
    
}

function locoScroll() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();

}

function capsules() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            start: "top 70%",
            end: "bottom bottom",
            trigger: ".capsules",
            scrub: 1,
        },
        y:0,
        ease: Power4
    })
    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            start: "top 90%",
            end: "bottom top",
            trigger: ".capsules",
            scrub: 1,
        },
       x:0,
        ease: Power4.easeOut
    }) 
    
}

function changeColor() {
    document.querySelectorAll(".section")
    .forEach(function(e) {
        gsap.to(e, {
            scrollTrigger: {
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function() {
                    document.body.setAttribute("theme", e.dataset.color );
                },
                onEnterBack: function() {
                    document.body.setAttribute("theme", e.dataset.color );
                }
            }
        })
    })
}

function btn() {
    
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = this.innerText; 
        this.innerHTML = ''; 
        let chars = [...buttonText]; 
        chars.forEach((char, index) => {
            setTimeout(() => {
                
                let span = document.createElement('span');
                span.textContent = char;
                this.appendChild(span);
            }, index * 100); 
        });
    });
});
}





btn();
changeColor();
capsules();
locoScroll();
paraAnimation();
teamAnimation();
slideAnimation();
homePageAnimation();