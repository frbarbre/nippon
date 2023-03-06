const payMethodList = document.getElementById("pay-method-list");

const payment = [
	{ 
		image: "visa.png",
		alt: "visa-logo",
        name: "Betalingskort",
		function: "goToPayVisa()",
 	},
	{ 
		image: "apple-pay.png",
		alt: "apple-pay-logo",
        name: "Apple Pay",
 	},
	{ 
		image: "google-pay.png",
		alt: "google-pay-logo",
        name: "Google Pay",
 	},
	 { 
		image: "mobile-pay.png",
		alt: "mobile-pay-logo",
        name: "MobilePay",
 	},
];

function goToPayVisa() {
	window.location.href = "payment-visa.html";
}

const paymentMaker = () => {
	for (let pay of payment) {
			payMethodList.innerHTML += 
			`<div class="pay-method" onclick="${pay.function}">
				<img src="img/${pay.image}" alt="${pay.alt}">
				<h3>${pay.name}</h3>
			</div>`;
	}
};

paymentMaker();
