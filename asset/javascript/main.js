//Click search

const search = document.getElementById('search');
const searchOn = document.getElementById('search-tool')

search.onclick = function(){
    searchOn.style.width = '100vw';
}

const searchclose = document.getElementById('search-close');

searchclose.onclick = function(){
    searchOn.style.width = '0px';
}

// click sub-menu
const menu = document.getElementById('menu-right');
const subMeunOn = document.getElementById('sub-menu')

menu.onclick = function(){
    subMeunOn.style.width = '450px';
}

const subMenuclose = document.getElementById('sub-menu-close');

subMenuclose.onclick = function(){
    subMeunOn.style.width = '0px';
}
// Slide 
const slides = [
    {
        image:'./asset/img/slide3.jpg',
        subLabel: 'From Alps',
        mainLabel: 'Snow Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum amet voluptas magni vitaeratione quae!',
    },
    {
        image: './asset/img/slide2.jpg',
        subLabel: 'Enjoy Your',
        mainLabel: 'Winter Vacations',
        description: 'The majestic beauty of winter promises you the most wonderful experiences. Feel nature in the most authentic way. Let\'s start the journey now.',
    },
    {
        image:'./asset/img/slide1.jpeg',
        subLabel: 'From Alps',
        mainLabel: 'Snow Adventure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum amet voluptas magni vitaeratione quae!',
    },
    {
        image: './asset/img/slide4.jpg',
        subLabel: 'Enjoy Your',
        mainLabel: 'Winter Vacations',
        description: 'The majestic beauty of winter promises you the most wonderful experiences. Feel nature in the most authentic way. Let\'s start the journey now.',
    }
]
const slideHTML = document.querySelector('.slide-wrap');
const prevBtn = document.querySelector('.slide-btn-left');
const nextBtn = document.querySelector('.slide-btn-right');
var slideIndex = 0;

function renderSlide(slide) {
    var htmls = `
        <div class="slide-banner">
            <div id="slide-banner__img" style="background-image: url('${slide.image}');">
            </div>
            <div class="slide-banner__text">
                <span class="slide-banner-title1">${slide.subLabel}</span>
                <h2 class="slide-banner-title2">${slide.mainLabel}</h2>
                <p class="slide-banner-description">
                    ${slide.description}
                </p>
            </div>
        </div>
    `;
    slideHTML.innerHTML = htmls;
}

renderSlide(slides[slideIndex]);

prevBtn.onclick = function() {
    if(slideIndex === 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex -= 1;
    }
    renderSlide(slides[slideIndex]);
}

nextBtn.onclick = function() {
    if(slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    renderSlide(slides[slideIndex]);
}

setInterval(() => { 
    if(slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    renderSlide(slides[slideIndex]);
}, 7000);



// Product 
// const products = [
//     {
//         id : '0',
//         image: './asset/img/product1.jpg',
//         title: 'Snow Surfing',
//         price: '$960',
//         score: '6.0',
//         rating: 'Good',
//         description: ' The majestic beauty of winter promises you the most wonderful experiences. Feel nature in the most authentic way. Let\'s start the journey now.'
//     },
//     {
//         id : '1',
//         image: './asset/img/product2.jpg',
//         title: 'Magic Of Italy',
//         price: '$1000',
//         score: '6.7',
//         rating: 'Good',
//     },
//     {
//         id : '2',
//         image: './asset/img/product4.jpg',
//         title: 'Skiing In Alps',
//         price: '$450',
//         score: '6.0',
//         rating: 'Good',
//     },
//     {
//         id : '3',
//         image: './asset/img/product5.jpg',
//         title: 'Snow Surfing',
//         price: '$720',
//         score: '7.3',
//         rating: 'Superb',
//     },
//     {
//         id : '4',
//         image: './asset/img/product6.jpg',
//         title: 'Kids Ski School',
//         price: '$1600',
//         score: '6.7',
//         rating: 'Good',
//     },
//     {
//         id : '5',
//         image: './asset/img/product7.jpg',
//         title: 'Active Winter',
//         price: '$3600',
//         score: '7.3',
//         rating: 'Superb',
//     },
// ];
// const listItem = document.querySelector('.product-list-items-wrap');


// function displayProduct() {
//     products.forEach(function(productItem, ) {
//         var htmls = `
//         <div class="product-item">
//             <div class="product-item-img" style="background-image: url(${productItem.image});">
//             </div>
//             <div class="product-item-detail">
//                 <i class="ti-calendar"> 1</i>
//                 <i class="ti-user"> 100+</i>
//                 <i class="ti-location-pin"> Skiing</i>
//             </div>
//             <h2 class="product-item-title">${productItem.title}</h2>
//             <p class="product-item-description">
//                 ${productItem.description}
//             </p>
//             <div class="product-item-price-rate">
//                 <div class="product-item-price">
//                     <i class="ti-money">${productItem.price}</i>
//                 </div>
//                 <div class="product-item-rate">
//                     <i class="ti-star">${productItem.score} ${productItem.rating}</i>
//                 </div>
//             </div>
//         </div>
//         `;
//         listItem.innerHTML += htmls;
//     })
// }
//displayProduct()

// click video 
var videoBtn = document.querySelector('.winter-sport-btn')
var videoBtnImg = document.querySelector('.winter-sport-img')
var modalVideo = document.querySelector('.modal-video')
videoBtn.onclick =function(){
    modalVideo.style.display = 'flex';
}
videoBtnImg.onclick =function(){
    modalVideo.style.display = 'flex';
}
modalVideo.onclick =function(){
    modalVideo.style.display = 'none';
}
// manual btn
var counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 4000);
// manual review btn
var reviewCounter = 1;

setInterval(function () {
    document.getElementById('review-radio' + reviewCounter).checked = true;
    reviewCounter++;
    if (reviewCounter > 4) {
        reviewCounter = 1;
    }
}, 4000);


