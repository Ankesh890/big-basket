const products = [
    {
        name: "Banana - Robusta",
        image: "banana.jpg", 
        discount: "51% OFF",
        price: "₹52",
        oldPrice: "₹105.48"
    },
    {
        name: "Capsicum - Green (Loose)",
        image: "capsicum.jpg", 
        discount: "20% OFF",
        price: "₹71.23",
        oldPrice: "₹89.04"
    },
    {
        name: "Cauliflower",
        image: "cauliflower.jpg", 
        discount: "20% OFF",
        price: "₹29.59",
        oldPrice: "₹36.99"
    },
    {
        name: "Chilli - Green Long, Medium (Loose)",
        image: "chilli.jpg", 
        discount: "50% OFF",
        price: "₹42",
        oldPrice: "₹83.56"
    }
];

const productContainer = document.querySelector(".products");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <div class="discount">${product.discount}</div>
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
            <h3>${product.name}</h3>
            <p class="price">${product.price} <span class="old-price">${product.oldPrice}</span></p>
        </div>
    `;

    productContainer.appendChild(productCard);
});
