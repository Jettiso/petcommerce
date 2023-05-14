// SELECTS FOOD CONTAINERS 
const wetFoodContainer = document.querySelector(".wetFood__container");
const dryFoodContainer = document.querySelector(".dryFood__container");
const treatsContainer = document.querySelector(".treats__container");
// SELECTS MOBILE NAVIGATION
const mobileNav = document.querySelector(".mobile__nav");
const mobileNavBtn = document.querySelector(".fa-bars");
const clostMobileNav = document.querySelector(".fa-x");


// TOGGLE BUTTONS FOR THE MOBILE NAVBAR
mobileNavBtn.addEventListener("click", () => {
	mobileNav.classList.add("open");
});

clostMobileNav.addEventListener("click", () => {
	mobileNav.classList.remove("open");
});

// MANUAL ARRAY DATA
const wetFoodItem = [
	{
		img: "./imgs/wetdogfood.jpg",
		name: "Pedigree Puppy Chicken",
		price: 47.0,
	},
	{
		img: "./imgs/wetdogfood2.jpg",
		name: "Pedigree Adult Beef",
		price: 44.0,
	},
	{
		img: "./imgs/wetdogfood3.jpg",
		name: "Pedigree Chicken & Liver",
		price: 44.0,
	},
	{
		img: "./imgs/wetdogfood4.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/wetcatfood.jpg",
		name: "Whiskas Mackerel",
		price: 31.0,
	},
	{
		img: "./imgs/wetcatfood2.jpg",
		name: "Whiskas TasyMix",
		price: 34.0,
	},
	{
		img: "./imgs/wetcatfood3.jpg",
		name: "Whiskas Junior Tuna",
		price: 33.0,
	},
	{
		img: "./imgs/wetcatfood4.jpg",
		name: "Sheba Tuna and Salmon",
		price: 40.0,
	},
];
// MANUAL ARRAY DATA
const dryFoodItem = [
	{
		img: "./imgs/drydogfood.jpg",
		name: "Pedigree Puppy Chicken",
		price: 47.0,
	},
	{
		img: "./imgs/drydogfood2.jpg",
		name: "Pedigree Adult Beef",
		price: 44.0,
	},
	{
		img: "./imgs/drydogfood3.jpg",
		name: "Pedigree Chicken & Liver",
		price: 44.0,
	},
	{
		img: "./imgs/drydogfood4.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/drycatfood.jpg",
		name: "Whiskas Mackerel",
		price: 31.0,
	},
	{
		img: "./imgs/drycatfood2.jpg",
		name: "Whiskas TastyMix",
		price: 34.0,
	},
	{
		img: "./imgs/drycatfood3.jpg",
		name: "Whiskas Junior Tuna",
		price: 33.0,
	},
	{
		img: "./imgs/drycatfood4.jpg",
		name: "Sheba Tuna and Salmon",
		price: 40.0,
	},
];

// FUNCTIONS TO RENDER THE ELEMENTS FROM DATA PROVIDED
const renderProducts = () => {
		// RENDER WET FOOD PRODUCT ELEMENT
	let wetFoodRender = wetFoodItem.map((product) => {
		return ` <div class="food__product">
        <div class="img__container">
            <img src=${product.img} alt="">
        </div>
        <h3>${product.name}</h3>
        <h2>₱${product.price}</h2>
        <button>Add to cart</button>
    </div>`;
	});
	// RENDER DRY FOOD PRODUCT ELEMENT
	let dryFoodRender = dryFoodItem.map((product) => {
		return ` <div class="food__product">
        <div class="img__container">
            <img src=${product.img} alt="">
        </div>
        <h3>${product.name}</h3>
        <h2>₱${product.price}</h2>
        <button>Add to cart</button>
    </div>`;
	});

	dryFoodRender = dryFoodRender.join("");
	wetFoodRender = wetFoodRender.join("");
	// PUTTING THE RENDERED ELEMENT TO THE CONTAINER
	dryFoodContainer.innerHTML = dryFoodRender;
	wetFoodContainer.innerHTML = wetFoodRender;
};

renderProducts();
renderTreats();
