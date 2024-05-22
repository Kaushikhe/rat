const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")
const products = [{
        id: 1,
        title: "Boss-Grip",
        price: 994,
        colors: [{
                code: "black",
                img: "./image/formual/balck.png"
            },
            {
                code: "brown",
                img: "./image/formual/brown.png",
            },
        ],
    },
    {
        id: 2,
        title: "WEINBRENNER OLIVE MULA FOR MEN",
        price: 330,
        colors: [{
                code: "brown",
                img: "/image/chupple/brown.png",
            },
            {
                code: "black",
                img: "/image/chupple/black.png",
            },
        ],
    },
    {

        id: 3,
        title: "OLIVE SPORTY SANDAL FOR MEN",
        price: 1299,
        colors: [{
                code: "black",
                img: "/image/sandal/other one.png",
            },
            {
                code: "grey",
                img: "/image/sandal/armycolor.png",
            },
        ],
    },
    {

        id: 4,
        title: "Sports",
        price: 994,
        colors: [{
                code: "black",
                img: "/image/sport/black.png",
            },
            {
                code: "blue",
                img: "/image/sport/bule.png",
            },
        ],
    },
    {

        id: 5,
        title: "Boots",
        price: 994,
        colors: [{
                code: "brown",
                img: "/image/boot/bro.png",
            },
            {
                code: "black",
                img: "/image/boot/blck.png",
            },
        ],
    },
];
let chooseProduct = products[0]

const currrentProductImg = document.querySelector(".productImg")
const currrentProductTitle = document.querySelector(".productTtile")
const currrentProductPrice = document.querySelector(".productPrice")
const currrentProductColors = document.querySelectorAll(".color")
const currrentProductSizes = document.querySelectorAll(".size")

menuItem.forEach((item, index) => {
    item.addEventListener("click", function() {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
            //change the choosen product
        chooseProduct = products[index]
            //chnage texts of currentproduct
        currrentProductTitle.textContent = chooseProduct.title
        currrentProductPrice.textContent = "₹" + chooseProduct.price
        currrentProductImg.src = chooseProduct.colors[0].img

        currrentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chooseProduct.colors[index].code;
        })
    });
});
currrentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currrentProductImg.src = chooseProduct.colors[index].img
    })
})
currrentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currrentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"

    })
})
const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".closes")
const payButton = document.querySelector(".payButton")
productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})
close.addEventListener("click", () => {
    payment.style.display = "none"
})
payButton.addEventListener("click", () => {
    payment.style.display = "none"
})
const close2 = document.querySelector(".close2")
const ok = document.querySelector(".ok")
const exit = document.querySelector(".exit")

payButton.addEventListener("click", () => {
    exit.style.display = "flex"
})
close2.addEventListener("click", () => {
    exit.style.display = "none"
})
ok.addEventListener("click", () => {
    exit.style.display = "none"
})