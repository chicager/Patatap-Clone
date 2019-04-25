var isTextShown = 1;
var circles = [];

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var keyData = {
    q: {
        color: "#1abc9c",
        sound: new Howl({
            urls: ['sounds/bubbles.mp3']
        })
    },
    w: {
        color: "#2ecc71",
        sound: new Howl({
            urls: ['sounds/clay.mp3']
        })
    },
    e: {
        color: "#3498db",
        sound: new Howl({
            urls: ['sounds/confetti.mp3']
        })
    },
    r: {
        color: "#9b59b6",
        sound: new Howl({
            urls: ['sounds/corona.mp3']
        })
    },
    t: {
        color: "#34495e",
        sound: new Howl({
            urls: ['sounds/dotted-spiral.mp3']
        })
    },
    y: {
        color: "#16a085",
        sound: new Howl({
            urls: ['sounds/flash-1.mp3']
        })
    },
    u: {
        color: "#27ae60",
        sound: new Howl({
            urls: ['sounds/flash-2.mp3']
        })
    },
    i: {
        color: "#2980b9",
        sound: new Howl({
            urls: ['sounds/flash-3.mp3']
        })
    },
    o: {
        color: "#8e44ad",
        sound: new Howl({
            urls: ['sounds/glimmer.mp3']
        })
    },
    p: {
        color: "#2c3e50",
        sound: new Howl({
            urls: ['sounds/moon.mp3']
        })
    },
    a: {
        color: "purple",
        sound: new Howl({
            urls: ['sounds/bubbles.mp3']
        })
    },
    a: {
        color: "#f1c40f",
        sound: new Howl({
            urls: ['sounds/pinwheel.mp3']
        })
    },
    s: {
        color: "#e67e22",
        sound: new Howl({
            urls: ['sounds/piston-1.mp3']
        })
    },
    d: {
        color: "#e74c3c",
        sound: new Howl({
            urls: ['sounds/piston-2.mp3']
        })
    },
    f: {
        color: "#95a5a6",
        sound: new Howl({
            urls: ['sounds/prism-1.mp3']
        })
    },
    g: {
        color: "#f39c12",
        sound: new Howl({
            urls: ['sounds/prism-2.mp3']
        })
    },
    h: {
        color: "#d35400",
        sound: new Howl({
            urls: ['sounds/prism-3.mp3']
        })
    },
    j: {
        color: "#1abc9c",
        sound: new Howl({
            urls: ['sounds/splits.mp3']
        })
    },
    k: {
        color: "#2ecc71",
        sound: new Howl({
            urls: ['sounds/squiggle.mp3']
        })
    },
    l: {
        color: "#3498db",
        sound: new Howl({
            urls: ['sounds/strike.mp3']
        })
    },
    z: {
        color: "#9b59b6",
        sound: new Howl({
            urls: ['sounds/suspension.mp3']
        })
    },
    x: {
        color: "#34495e",
        sound: new Howl({
            urls: ['sounds/timer.mp3']
        })
    },
    c: {
        color: "#16a085",
        sound: new Howl({
            urls: ['sounds/ufo.mp3']
        })
    },
    v: {
        color: "#27ae60",
        sound: new Howl({
            urls: ['sounds/veil.mp3']
        })
    },
    b: {
        color: "#2980b9",
        sound: new Howl({
            urls: ['sounds/wipe.mp3']
        })
    },
    n: {
        color: "#8e44ad",
        sound: new Howl({
            urls: ['sounds/zig-zag.mp3']
        })
    },
    m: {
        color: "#2c3e50",
        sound: new Howl({
            urls: ['sounds/moon.mp3']
        })
    }
};

var properties = ['q', 'w', 'e', 'r', 't', 'y',
                  'u', 'i', 'o', 'p', 'a', 's',
                  'd', 'f', 'g', 'h', 'j', 'k',
                  'l', 'z', 'x', 'c', 'v', 'b',
                  'n', 'm'];


$(document).ready(function () {

    if (isMobile) {
        $('h1').text("Tap to begin...");
    } else {
        $('h1').text("Press any key (en)...");
    }
});


$(document).on("click", function () {

    if (isMobile) {

        if (isTextShown) {
            removeHeading();
        }

        var chosenProperty = properties[Math.floor(Math.random() * (properties.length))];
        getCircle(view.size.width * 0.6, chosenProperty);
    }
});


$(document).on("keydown", function (event) {

    if(keyData[event.key]){
        if (isTextShown) {
            removeHeading();
        }

        getCircle(500, event.key);
    }
});

function getCircle(size, property) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, size);
    newCircle.fillColor = keyData[property].color;
    keyData[property].sound.play();
    circles.push(newCircle);
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}

function removeHeading() {
    $('h1').remove();
    isTextShown--;
}
