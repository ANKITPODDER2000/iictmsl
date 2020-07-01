/* --color : #fff in nightmode
   --color : #000 in daymode  
   --background : #fff in daymode
   --background : #000 in darkmode
   <i class="far fa-moon"></i> : Moon icon
   <i class="fas fa-lightbulb"></i> : lightbulb icon 
   typed : for typing effect in header : .logo > .box1 > <h1 id="ban"><span id="typed"></span></h1>
   particlesJS : background particles effect
   scrollToTop : for scrollToTop btn
*/

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
        document.documentElement.style.setProperty('--col1', '#fff5');
        document.documentElement.style.setProperty('--col2', '#fff3');
        color = "#fff";

        $('#day-night').removeClass("fa-moon");
        $('#day-night').removeClass("far");
        $('#day-night').addClass("fas");
        $('#day-night').addClass("fa-lightbulb");
        $(".fixedbar").addClass('night');
        //$("#main > div.logo > div > img").attr("src","./image/IIC2_night.png");
        $("#particles-js > div.fixedbar > div:nth-child(1) > a > img").attr("src","./image/IIC_night.png");
    }else{
        document.documentElement.style.setProperty('--color', '#000');
        document.documentElement.style.setProperty('--background', '#fff');
        document.documentElement.style.setProperty('--col1', '#0007');
        document.documentElement.style.setProperty('--col2', '#0005');
        color = "#000";

        $('#day-night').addClass("fa-moon");
        $('#day-night').addClass("far");
        $('#day-night').removeClass("fas");
        $('#day-night').removeClass("fa-lightbulb");
        $(".fixedbar").removeClass('night');
        //$("#main > div.logo > div > img").attr("src","./image/IIC2.png");
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
let memno = -1;
function details(i){
    memno = i;
    $("#particles-js > div.show > div > div.image > img").attr('src',dict[memno]['photo']);
    document.querySelector("#particles-js > div.show > div > div.details > h2").innerHTML = dict[memno]['name'];
    document.querySelector("#particles-js > div.show > div > div.details > p:nth-child(2)").innerHTML = dict[memno]['pos'];
    document.querySelector("#particles-js > div.show > div > div.details > p:nth-child(3)").innerHTML = dict[memno]['mail'];
    $("#particles-js > div.show > div > div.details > a").attr('src',dict[memno]['link']);
    $("#particles-js > div.show").addClass('active');
}
$("#particles-js > div.show > i").click(()=>{
    $("#particles-js > div.show").removeClass('active');
})

function slide(shift){
    if((memno==0 && shift==-1) || (memno==(dict.length)-1 && shift==+1))
        return;
    memno += shift;
    $("#particles-js > div.show > div > div.image > img").attr('src',dict[memno]['photo']);
    document.querySelector("#particles-js > div.show > div > div.details > h2").innerHTML = dict[memno]['name'];
    document.querySelector("#particles-js > div.show > div > div.details > p:nth-child(2)").innerHTML = dict[memno]['pos'];
    document.querySelector("#particles-js > div.show > div > div.details > p:nth-child(3)").innerHTML = dict[memno]['mail'];
    $("#particles-js > div.show > div > div.details > a").attr('src',dict[memno]['link']);
}
console.clear();