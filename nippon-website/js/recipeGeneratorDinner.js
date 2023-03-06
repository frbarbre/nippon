const popDishList = document.getElementById("pop-dish-list");

const dishes = [
	{ 
		image: "img/ramen.png",
		title: "Ramen",
        time: "20-30",
        kcal: "453",
		button: "index.html"
 	},
	{ 
		image: "img/pumpkin.png",
		title: "Græskarsuppe",
        time: "15-20",
        kcal: "150",
		button: "index.html"
 	},
	 { 
		image: "img/sushi.png",
		title: "Sushi",
        time: "8-10",
        kcal: "372",
		button: "index.html"
 	},
	 { 
		image: "img/udon.png",
		title: "Udonsuppe",
        time: "15 ",
        kcal: "230",
		button: "index.html"
 	},
	 { 
		image: "img/gyoza.png",
		title: "Gyoza",
        time: "25-30 ",
        kcal: "387",
		button: "index.html"
 	},
	 { 
		image: "img/ponzu-frikadeller.png",
		title: "Ponzu Frikadeller",
        time: "40-45 ",
        kcal: "432 ",
		button: "index.html"
 	},
	 { 
		image: "img/tonkatsu.png",
		title: "Tonkatsu",
        time: "25-30 ",
        kcal: "602 ",
		button: "index.html"
 	},
	 { 
		image: "img/yakitori.png",
		title: "Yakitori",
        time: "15-20 ",
        kcal: "295 ",
		button: "index.html"
 	},
	 { 
		image: "img/tempura-nudelsalat.png",
		title: "Tempura Nudelsalat",
        time: "20-25 ",
        kcal: "775 ",
		button: "index.html"
 	},
	 { 
		image: "img/okonomiyaki.png",
		title: "Okonomiyaki",
        time: "20-25 ",
        kcal: "597 ",
		button: "index.html"
 	},
	 { 
		image: "img/yakisoba.png",
		title: "Yakisoba",
        time: "20-25 ",
        kcal: "613 ",
		button: "index.html"
 	},
	 { 
		image: "img/tamagoyaki.png",
		title: "Tamagoyaki",
        time: "10-15",
        kcal: "203 ",
		button: "index.html"
 	},
];


const dishMaker = () => {
	for (let dish of dishes) {
			popDishList.innerHTML += 
			`<figure class="pop-widget from-bottom fade-in">
            <img src="${dish.image}" alt="ramen-picture" />
            <article>
              <h3>${dish.title}</h3>
              <img src="img/line.png"/>
              <h5>${dish.time} minutter</h5>
              <img src="img/line.png"/>
              <h6>${dish.kcal} kcal pr. portion</h6>
              <img src="img/line.png"/>
              <a class="std-btn btn-blue" href="${dish.button}">Læs mere</a>
            </article>
          </figure>`;
	}
};

dishMaker();

