function createCards(containerId, cardsData) {
  const container = document.getElementById(containerId);

  cardsData.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = card.img;
    img.classList.add("card-img");

    const title = document.createElement("p");
    title.classList.add("card-title");
    title.textContent = card.title;

    const info = document.createElement("p");
    info.classList.add("card-info");
    info.textContent = card.info;

    cardDiv.appendChild(img);
    cardDiv.appendChild(title);
    cardDiv.appendChild(info);

    container.appendChild(cardDiv);
  });
}

const recentlyPlayed = [
  { img: "./images/card1img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." }
];

const trendingNow = [
  { img: "./images/card2img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card3img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card4img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card3img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card4img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." }
];

const featuredCharts = [
  { img: "./images/card5img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card6img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." },
  { img: "./images/card1img.jpeg", title: "Top 50 - Global", info: "Your daily updates of the most played..." }
];

createCards("recentlyPlayed", recentlyPlayed);
createCards("trendingNow", trendingNow);
createCards("featuredCharts", featuredCharts);


const playerIcons = [
  { src: "./images/player_icon1.png", class: "player-control-icon" },
  { src: "./images/player_icon2.png", class: "player-control-icon" },
  { src: "./images/player_icon3.png", class: "player-control-icon", style: "opacity:1;height:2rem;" },
  { src: "./images/player_icon4.png", class: "player-control-icon" },
  { src: "./images/player_icon5.png", class: "player-control-icon" }
];

const playerControl = document.getElementById("playerControl");

playerIcons.forEach(icon => {
  const img = document.createElement("img");
  img.src = icon.src;
  img.className = icon.class;
  if (icon.style) img.setAttribute("style", icon.style);
  playerControl.appendChild(img);
});
