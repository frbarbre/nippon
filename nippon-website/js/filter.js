const searchBar = document.getElementById("search-bar");
const list = document.getElementById("list");

const icons = [
	{ 
		keywords: "ramen nudler æg grøntsager chili",
		image: "ramen.png",
		catagory: "gluten lactose chili",
		title: "Ramen",
		id: "ramen",
        time: "20-30",
        kcal: "453",
		
		chili: "",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "",
		lactose: "", 
		fish: "hidden",

		button: "index.html",

		recipeNumber: "1",

 	},
	 { 
		keywords: "Sushi ris tang fisk sesamfrø soya wasabi",
		image: "sushi.png",
		catagory: "fish",
		title: "Sushi",
		id: "sushi",
        time: "8-10",
        kcal: "372",
		chili: "hidden",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "hidden", 
		fish: "",
		button: "https://www.google.com",

		recipeNumber: "2",

 	},
	 { 
		keywords: "Udonsuppe Suppe tofu ",
		image: "udon.png",
		catagory: "veggie lactose vegan",
		title: "Udonsuppe",
		id: "udon",
        time: "15",
        kcal: "230",
		chili: "hidden",
		veggie: "",
		vegan: "",
		gluten: "hidden",
		lactose: "", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "3",

 	},
	 { 
		keywords: "Græskar Suppe kokosmælk græskerkerner",
		image: "pumpkin.png",
		catagory: "veggie chili gluten",
		title: "Græskarsuppe",
		id: "pumpkin",
        time: "10-15",
        kcal: "150",
		chili: "",
		veggie: "",
		vegan: "hidden",
		gluten: "",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "4",

 	},

	 { 
		keywords: "Gyoza dumplings svinekød soya",
		image: "gyoza.png",
		catagory: "chili",
		title: "Gyoza",
		id: "gyoza",
        time: "25-30",
        kcal: "387",
		chili: "",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "5",

 	},

	 { 
		keywords: "frikadeller ponzu svinekød oksekød",
		image: "ponzu-frikadeller.png",
		catagory: "chili",
		title: "Ponzu Frikadeller",
		id: "ponzu",
        time: "40-45",
        kcal: "432",
		chili: "",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "6",

 	},

	 { 
		keywords: "tonkatsu svinekød ris kål",
		image: "tonkatsu.png",
		catagory: "chili gluten",
		title: "Tonkatsu",
		id: "tonkatsu",
        time: "25-30",
        kcal: "602",
		chili: "",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "7",

 	},

	 { 
		keywords: "Yakitori kylling teriyaki",
		image: "yakitori.png",
		catagory: "chili gluten",
		title: "Yakitori",
		id: "yakitori",
        time: "15-20",
        kcal: "295",
		chili: "",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "8",

 	},

	 { 
		keywords: "Nudelsalat tempura rejer",
		image: "tempura-nudelsalat.png",
		catagory: "chili fish lactose",
		title: "Tempura Nudelsalat",
		id: "tempura",
        time: "20-25",
        kcal: "775",
		chili: "hidden",
		veggie: "hidden",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "", 
		fish: "",
		button: "https://www.google.com",

		recipeNumber: "9",

 	},

	 { 
		keywords: "Okonomiyaki kål chilimayo ",
		image: "okonomiyaki.png",
		catagory: "veggie chili",
		title: "Okonomiyaki",
		id: "okonomiyaki",
        time: "20-25",
        kcal: "597",
		chili: "",
		veggie: "",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "10",

 	},

	 { 
		keywords: "Yakisoba sobanudler soya østersauce ",
		image: "yakisoba.png",
		catagory: "veggie",
		title: "Yakisoba",
		id: "yakisoba",
        time: "15-20",
        kcal: "613",
		chili: "hidden",
		veggie: "",
		vegan: "hidden",
		gluten: "hidden",
		lactose: "hidden", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "11",

 	},

	 { 
		keywords: "Tamagoyaki æg",
		image: "tamagoyaki.png",
		catagory: "veggie lactose gluten",
		title: "Tamagoyaki",
		id: "tamagoyaki",
        time: "10-15",
        kcal: "203",
		chili: "hidden",
		veggie: "",
		vegan: "hidden",
		gluten: "",
		lactose: "", 
		fish: "hidden",
		button: "https://www.google.com",

		recipeNumber: "12",

 	},
];

var kat;

filterSelection("all")
function filterSelection(c) {
kat = c;
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const filter = () => {
	list.innerHTML = "";

	const text = searchBar.value.toLowerCase();

	for (let icon of icons) {
		let keyword = icon.keywords.toLowerCase();

		if (keyword.indexOf(text) !== -1) {
			list.innerHTML += 
			`<figure class="pop-widget filter-widget from-bottom fade-in filterDiv ${icon.catagory}">
            <img src="img/${icon.image}" alt="ramen-picture" />
            <article>
              <h3 id="${icon.id}">${icon.title}</h3>
              <img src="img/line.png"/>
              <h5>${icon.time} minutter</h5>
              <img src="img/line.png"/>
              <h6>${icon.kcal} kcal pr. portion</h6>
              <img src="img/line.png"/>
              <div class="dish-icon-wrapper">
                <img ${icon.chili} class="dish-icon" src="img/chili-simple.png" alt="">
                <img ${icon.veggie} class="dish-icon" src="img/veggie-simple.png" alt="">
                <img ${icon.vegan} class="dish-icon" src="img/vegan-simple.png" alt="">
                <img ${icon.gluten} class="dish-icon" src="img/gluten-simple.png" alt="">
                <img ${icon.lactose} class="dish-icon" src="img/laktose-simple.png" alt="">
                <img ${icon.fish} class="dish-icon" src="img/fisk-simple.png" alt="">
              </div>
              <div><a href="${icon.button}">Se opskrift</a></div>
              <div onclick="addDish${icon.recipeNumber}()" class="add-btn recipe-btn-${icon.recipeNumber}"></div>
            </article>
			<p hidden>${icon.keywords}</p>
          </figure>`;
        filterSelection(kat);
		}
	}
};

filter();

searchBar.addEventListener("keyup", filter);