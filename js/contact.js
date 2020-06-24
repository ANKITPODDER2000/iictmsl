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
//Loading effect animation
var load = document.querySelector(".load");
window.addEventListener('load', function () {
    $('.load').fadeOut();
});
let typed = new Typed("#typed", {
    strings: [
        "W^200E^100L^100C^100O^200M^200E^100 ^100T^100O^100 ^100T^200H^100E^100 ^100O^200F^100F^100I^100C^100I^100A^200L^100 ^100W^100E^200B^100S^100I^100T^100E^100 ^200O^100F^100 ^100I^200I^100C^100 T^100M^100S^100L^600.^1000 ",
        "T^150H^150A^150N^150K^150S^150 ^150F^150O^150R^150 ^150V^150I^150S^150I^150T^150I^150N^150G^150 ^150O^150U^150R^150 ^150W^150E^150B^150S^150I^150T^150E^150.^150",
        "W^200E^100L^100C^100O^200M^200E^100 ^100T^100O^100 ^100T^200H^100E^100 ^100O^200F^100F^100I^100C^100I^100A^200L^100 ^100W^100E^200B^100S^100I^100T^100E^100 ^200O^100F^100 ^100I^200I^100C^100 T^100M^100S^100L^600.^1000 ",
        "T^150H^150A^150N^150K^150S^150 ^150F^150O^150R^150 ^150V^150I^150S^150I^150T^150I^150N^150G^150 ^150O^150U^150R^150 ^150W^150E^150B^150S^150I^150T^150E^150.^150",
        "W^200E^100L^100C^100O^200M^200E^100 ^100T^100O^100 ^100T^200H^100E^100 ^100O^200F^100F^100I^100C^100I^100A^200L^100 ^100W^100E^200B^100S^100I^100T^100E^100 ^200O^100F^100 ^100I^200I^100C^100 T^100M^100S^100L^600.^1000 ",
    ],
    loop: true
});

//Color Change
let day = true;
$("#day-night").click(()=>{
    day = !day;
    if(!day){
        document.documentElement.style.setProperty('--color', '#fff');
        document.documentElement.style.setProperty('--background', '#000');
        document.documentElement.style.setProperty('--shadowcolor', '#fff3');
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
        document.documentElement.style.setProperty('--shadowcolor', '#0003');
        color = "#000";

        $('#day-night').addClass("fa-moon");
        $('#day-night').addClass("far");
        $('#day-night').removeClass("fas");
        $('#day-night').removeClass("fa-lightbulb");
        $(".fixedbar").removeClass('night');
        $("#main > div.logo > div > img").attr("src","./image/IIC2.png");
        $("#particles-js > div.fixedbar > div:nth-child(1) > a > img").attr("src","./image/IIC.png");
    }
    mouseout();
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
});
//Marker
function mousein(e){
    $("#main > div.boh > div").css("box-shadow","0 0 20px "+getComputedStyle(document.documentElement).getPropertyValue('--shadowcolor'));
    $("#main > div.boh > div").css("color",getComputedStyle(document.documentElement).getPropertyValue('--color'));
    e.style.color = getComputedStyle(document.documentElement).getPropertyValue('--background');
    document.querySelector("#main > div.boh > div.marker").style.opacity = "1";
    document.querySelector("#main > div.boh > div.marker").style.left = e.offsetLeft + "px";
    document.querySelector("#main > div.boh > div.marker").style.top = e.offsetTop + "px";
    document.querySelector("#main > div.boh > div.marker").style.width = e.offsetWidth + "px";
    document.querySelector("#main > div.boh > div.marker").style.height = e.offsetHeight + "px";
    e.style.boxShadow = "none";
}
function mouseout(){
    $("#main > div.boh > div").css("box-shadow","0 0 20px "+getComputedStyle(document.documentElement).getPropertyValue('--shadowcolor'));
    $("#main > div.boh > div").css("color",getComputedStyle(document.documentElement).getPropertyValue('--color'));
    
    document.querySelector("#main > div.boh > div.marker").style.left = document.querySelector("#main > div.boh > div:nth-child(1)").offsetLeft + "px";
    document.querySelector("#main > div.boh > div.marker").style.top = document.querySelector("#main > div.boh > div:nth-child(1)").offsetTop + "px";
    document.querySelector("#main > div.boh > div.marker").style.width = document.querySelector("#main > div.boh > div:nth-child(1)").offsetWidth + "px";
    document.querySelector("#main > div.boh > div.marker").style.height = document.querySelector("#main > div.boh > div:nth-child(1)").offsetHeight + "px";
    document.querySelector("#main > div.boh > div:nth-child(1)").style.color = getComputedStyle(document.documentElement).getPropertyValue('--background');
    document.querySelector("#main > div.boh > div:nth-child(1)").style.boxShadow = "none";
}
mouseout();
console.clear();