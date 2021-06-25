canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_x=10;
car_y=10;
car_width=100;
car_height=90;
background_image="racing.jpeg";
car_image="car1.png";
function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    car_img=new Image();
    car_img.onload=uploadCar;
    car_img.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_img, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}
greenCar_x=10;
greenCarr_y=10;
greenCar_width=100;
greenCar_height=90;
greenCar_image="download (2).png";
function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    greenCar_img=new Image();
    greenCar_img.onload=uploadGreenCar;
    greenCar_img.src=greenCar_image;
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function uploadGreenCar(){
    ctx.drawImage(greenCar_img, greenCar_x, greenCar_y, greenCar_width, greenCar_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="87"){
        up();
    }
    if(keyPressed=="83"){
        down();
    }
    if(keyPressed=="65"){
        left();
    }
    if(keyPressed=="68"){
        right();
    }
}
