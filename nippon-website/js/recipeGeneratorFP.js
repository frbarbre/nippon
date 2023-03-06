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

