const pairs = [
"EURUSD",
"GBPUSD",
"USDJPY",
"XAUUSD"
];

const container = document.getElementById("market-data");

pairs.forEach(pair => {

let price = (Math.random()*2+1).toFixed(4);

let card = document.createElement("div");

card.className="market-card";

card.innerHTML = `
<h3>${pair}</h3>
<div class="price">${price}</div>
`;

container.appendChild(card);

});
