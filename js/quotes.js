const quotes = [
  {quote: "Traveling – it leaves you speechless, then turns you into a storyteller.",
  author: "Ibn Battuta"},
  {quote: "We travel, some of us forever, to seek other places, other lives, other souls.",
  author: "Anais Nin"},
  {quote: "A journey is best measured in friends, rather than miles.",
  author: "Tim Cahill"},
  {quote: "The gladdest moment in human life, methinks, is a departure into unknown lands.",
  author: "Sir Richard Burton"},
  {quote: "No place is ever as bad as they tell you it’s going to be.",
  author: "Chuck Thompson"},
  {quote: "“I am not the same, having seen the moon shine on the other side of the world.",
  author: "Mary Anne Radmacher"},
  {quote: "Travel makes one modest. You see what a tiny place you occupy in the world.",
  author: "Gustave Flaubert"},
  {quote: "He who would travel happily must travel light.",
  author: "Antoine de St. Exupery"},
  {quote: "The man who goes alone can start today; but he who travels with another must wait till that other is ready.",
  author: "Henry David Thoreau"},
  {quote: "To awaken alone in a strange town is one of the pleasantest sensations in the world.",
  author: "Freya Stark"},
  {quote: "The life you have led doesn’t need to be the only life you have.",
  author: "Anna Quindlen"},
  {quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
  author: "Andre Gide"},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * (quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
