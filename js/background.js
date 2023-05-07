const images = [
  "banpo-bridge-fountain-seoul.jpg",
  "gyeongbokgung-palace.jpg",
  "seongsan-ilchulbong-sunrise-peak.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img태그 생성(아직 문서 안들어감)
bgImage.src = `img/${chosenImage}`;    // img 태그에 src 입력

console.log(bgImage);    // <img src="img/gyeongbokgung-palace.jpg"

document.body.appendChild(bgImage);    // <img> 태그를 body에 넣음