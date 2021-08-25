let img = document.querySelector('img');
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let imgNumLabel = document.querySelector('h2');

let imgNum = 1;     // first image named as 1.jpg and so on until the last image in ascending order.
let newSrc = 1;
let maxImgNum = 10;  // write the maximum number of images here e.g in this case its 10 images.

prevBtn.addEventListener('click', () => {

    if(imgNum<=1){
        img.src = 'images/' + newSrc + '.jpg';
    } else {
        newSrc = --imgNum;
        img.src = 'images/' + newSrc + '.jpg';
    }
    imgNumLabel.innerHTML = newSrc;

})

nextBtn.addEventListener('click', () => {

    if(imgNum>=maxImgNum){
        img.src = 'images/' + maxImgNum + '.jpg';
    } else {
        newSrc = ++imgNum;
        img.src = 'images/' + newSrc + '.jpg';
    }
    imgNumLabel.innerHTML = newSrc;

})
