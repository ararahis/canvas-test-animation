var canvas2 = document.getElementById('canvas2');
var c2 = canvas2.getContext('2d');
c2.fillStyle = "#f5f4f4";
c2.fillRect(0, 0, canvas2.width, canvas2.height);

var tick = 0;
var y = 0;

var img1 = new Image();
img1.src = 'images/spritesheet1.png';
var img2 = new Image();
img2.src = 'images/spritesheet2.png';
var img3 = new Image();
img3.src = 'images/spritesheet3.png';

var sprite_arr = [
    {'img': img1, 'frames': 25, 'width': 266},
    {'img': img2, 'frames': 25, 'width': 266},
    {'img': img3, 'frames': 20, 'width': 266}
];



function moveBottom(sprite) {
    //console.log(y)
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.clearRect(0,0,canvas.width,canvas.height);
    c.save();
    var frame = tick % sprite.frames;
    var x = frame * sprite.width;
    c.drawImage(
        sprite.img,
        x,0,266,266,
        0,y,266,266
    );
    tick++;
    y+=1;
    c.restore();
    if(y >= canvas2.height-200) {
        clearInterval(func1);
        var next_scene_y = y;
        y = 0;
        tick = 0;
        func1 = setInterval(moveRight, 100, sprite_arr[1], next_scene_y);
    }
}

function moveRight(sprite,position_y) {
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.clearRect(0,0,canvas.width,canvas.height);
    c.save();
    var frame = tick % sprite.frames;
    var x = frame * sprite.width;
        c.drawImage(
            sprite.img,
            x,0,266,266,
            y,position_y,266,266
        );
    tick++;
    y+=1;
    c.restore();
    if(y >= canvas2.width-200) {
        clearInterval(func1);
        var next_scene_x = y;
        y = 0;
        tick = 0;
        func1 = setInterval(explode, 100, sprite_arr[2], next_scene_x, position_y);
    }
}

function explode(sprite,position_x,position_y) {
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.clearRect(0,0,canvas.width,canvas.height);
    c.save();
    var frame = tick % sprite.frames;
    var x = frame * sprite.width;
        c.drawImage(
            sprite.img,
            x,0,266,266,
            position_x,position_y,266,266
        );
    tick++;
    c.restore();
    if(tick >= sprite.frames) {
        clearInterval(func1);
        c.clearRect(0,0,canvas.width,canvas.height);
    }
}
//drawIt();
//console.log(sprite_arr[0])я

var func1 = setInterval(moveBottom, 100, sprite_arr[0]);
