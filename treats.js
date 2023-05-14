const treatsContainer = document.querySelector(".treats__container");
const mobileNav = document.querySelector('.mobile__nav');
const mobileNavBtn = document.querySelector('.fa-bars');
const clostMobileNav = document.querySelector('.fa-x');

mobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
})


clostMobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
})

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

const renderPetTreats = () => {
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
}

renderPetTreats();