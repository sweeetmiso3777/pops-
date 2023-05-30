const boxElements = document.querySelectorAll('.box');
const musicSamples = [
  'pop.mp3',
  'pop.mp3',
  'pop.mp3',
  'pop.mp3',
  'pop.mp3',
  'pop.mp3'
];

const playRandomMusic = () => {
  const randomIndex = Math.floor(Math.random() * musicSamples.length);
  const audioElement = new Audio(musicSamples[randomIndex]);
  audioElement.play();
};

const changeColor = (boxElement) => {
  const randomColor = getRandomColor();
  boxElement.style.backgroundColor = randomColor;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

boxElements.forEach((boxElement) => {
  boxElement.addEventListener('mouseenter', () => {
    playRandomMusic();
    changeColor(boxElement);
  });
});

const emojis = ["🌋", "⭐️", "🌺", "🎉", "🍕", "🌈", "🐶", "🌼"];
const divs = document.querySelectorAll(".box");

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

divs.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.textContent = getRandomEmoji();
  });
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
});

const assignRandomColorAndEmoji = () => {
  boxElements.forEach((boxElement) => {
    const randomColor = getRandomColor();
    const randomEmoji = getRandomEmoji();
      
    boxElement.style.backgroundColor = randomColor;
    boxElement.textContent = randomEmoji;
  });
};

assignRandomColorAndEmoji();