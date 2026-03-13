const news = [

"USD strengthens after Fed speech",

"Gold prices fall in Asian market",

"Forex traders watching inflation data",

"Euro rises against dollar",

"Bitcoin volatility affects forex markets"

];

const container = document.getElementById("news");

news.forEach(item => {

let div = document.createElement("div");

div.className="market-card";

div.innerHTML = item;

container.appendChild(div);

});
