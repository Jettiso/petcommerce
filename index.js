const wetFoodContainer = document.querySelector(".wetFood__container");
const dryFoodContainer = document.querySelector(".dryFood__container");
const treatsContainer = document.querySelector(".treats__container");

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

const treatsItems = [
	{
		img: "./imgs/cattreats.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/cattreats2.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/cattreats3.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/cattreats4.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/dogtreats.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/dogtreats2.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/dogtreats3.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
	{
		img: "./imgs/dogtreats4.jpg",
		name: "Monge Fruit",
		price: 44.0,
	},
];

const renderProducts = () => {
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

	dryFoodContainer.innerHTML = dryFoodRender;
	wetFoodContainer.innerHTML = wetFoodRender;
};

const renderTreats = () => {
	let treatsRender = treatsItems.map((product) => {
		return ` <div class="food__product">
        <div class="img__container">
            <img src=${product.img} alt="">
        </div>
        <h3>${product.name}</h3>
        <h2>₱${product.price}</h2>
        <button>Add to cart</button>
    </div>`;
	});

    treatsRender = treatsRender.join("");
    treatsContainer.innerHTML = treatsRender;
};

renderProducts();
renderTreats();
