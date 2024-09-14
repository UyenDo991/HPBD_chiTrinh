//tim
const snowCanvas = document.querySelector('.snow-canvas');
const numSnowflakes = 100;
    for (let i = 0; i < numSnowflakes; i++) {
      const snow = document.createElement('div');
      snow.classList.add('snow');
      // snow.textContent = '🎈';
      // snow.style.color = '#fff';
      var size = getRandomIntInclusive(5, 20);
      snow.style.left = getRandomIntInclusive(0, 95) + '%';
      // snow.style.fontSize = getRandomIntInclusive(5, 20) + 'px';
      snow.style.opacity = getRandomIntInclusive(1, 8) * .1;
      snow.style.filter = `blur(${getRandomIntInclusive(0, 3)}px)`;
      snow.style.width = size + 'px';
      snow.style.height = size + 'px';
      snow.style.animationDuration = `${getRandomIntInclusive(3, 10)}s, ${getRandomIntInclusive(1, 3)}s`;
      snowCanvas.append(snow);
    }
    // var size = getRandomIntInclusive(5, 20);
    // const bubble = document.createElement('div');
    // bubble.classList.add('bubble');
    // bubble.style.top = getRandomIntInclusive(0, 100) + '%';
    // bubble.style.left = getRandomIntInclusive(0, 70) + '%';
    // bubble.style.width = size + 'px';
    // bubble.style.height = size + 'px';
    // bubble.style.borderRight = "thick solid rgb(253 253 253)";
    // bubble.style.opacity = getRandomIntInclusive(1, 4) * .1;
    // bubble.style.filter = `blur(${getRandomIntInclusive(0, 3)}px)`;
    // bubble.style.animationDuration = `${getRandomIntInclusive(1, 4)}s`;
    // bubbleCanvas.append(bubble);





//ảnh
const mainPhoto  = document.querySelector('.img-main');
// tự động nhảy ảnh
let i = 0;
let imageNames = ["1trinh.jpg", "2trinh.jpg", "3trinh.jpg", "4trinh.jpg", "5trinh.jpg", "6trinh.jpg"]; // Thay đổi danh sách tên hình ảnh tại đây
let slideshowTimeout;

function slideshow() {
    if (i === imageNames.length) {
        i = 0;
    }
    link_name = "public/images/" + imageNames[i];
    mainPhoto.setAttribute('src', link_name); 
    i++;
    slideshowTimeout = setTimeout(slideshow, 1000);
}
slideshow();

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
//click button
const btnClick = document.querySelector('.btn-click');
const avt_box = document.querySelector('.avt-box');
const note = document.querySelector('.note');
btnClick.addEventListener('click', function () {
  avt_box.style.left = '60%';
  btnClick.style.left = '70%';
  note.style.display = "block";
  btnClick.style.display = "none";
});
