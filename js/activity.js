window.addEventListener('load', function () {
    $('.load').fadeOut(1500);
});


let color = "#000"; // for background particles color.
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": color
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": color
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.01,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": color,
            "opacity": 0.25,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 12,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
//ScrollTop -> ^^^
window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 500);
})
function scrollToTop() {
    window.scrollTo({
        top: 0
    });
}

//Color Change
let day = true;
$("#day-night").click(()=>{
    day = !day;
    if(!day){
        document.documentElement.style.setProperty('--color', '#fff');
        document.documentElement.style.setProperty('--background', '#000');
        color = "#fff";

        $('#day-night').removeClass("fa-moon");
        $('#day-night').removeClass("far");
        $('#day-night').addClass("fas");
        $('#day-night').addClass("fa-lightbulb");
        $(".fixedbar").addClass('night');
        $("#main > div.logo > div > img").attr("src","./image/IIC2_night.png");
        $("#particles-js > div.fixedbar > div:nth-child(1) > a > img").attr("src","./image/IIC_night.png");
    }else{
        document.documentElement.style.setProperty('--color', '#000');
        document.documentElement.style.setProperty('--background', '#fff');
        color = "#000";

        $('#day-night').addClass("fa-moon");
        $('#day-night').addClass("far");
        $('#day-night').removeClass("fas");
        $('#day-night').removeClass("fa-lightbulb");
        $(".fixedbar").removeClass('night');
        $("#main > div.logo > div > img").attr("src","./image/IIC2.png");
        $("#particles-js > div.fixedbar > div:nth-child(1) > a > img").attr("src","./image/IIC.png");
    }
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": color
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": color
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.8,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.01,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 80,
                    "size_min": 0.4,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": color,
                "opacity": 0.35,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    //$(".fixedbar div a img").attr("src","")
});
//Screen Header
const screen =  document.querySelector(".screen");
const hover = (e)=>{
    screen.style.left= e.offsetLeft + "px";
    screen.style.top= e.offsetTop + "px";
    screen.style.width= e.offsetWidth + "px";
    screen.style.height= e.offsetHeight + "px";
    screen.style.opacity = "1";
}
const hoveroff = ()=>{
    screen.style.opacity = "0";
}