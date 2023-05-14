const fishFoodContainer = document.querySelector('.fishFood__container');

const fishFoodItems = [
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

const renderFishFood = () => {
    let fishFoodRender = fishFoodItems.map((product) => {
		return ` <div class="food__product">
        <div class="img__container">
            <img src=${product.img} alt="">
        </div>
        <h3>${product.name}</h3>
        <h2>₱${product.price}</h2>
        <button>Add to cart</button>
    </div>`;
	})
    
    fishFoodRender = fishFoodRender.join("");
    fishFoodContainer.innerHTML = fishFoodRender;
}

renderFishFood();