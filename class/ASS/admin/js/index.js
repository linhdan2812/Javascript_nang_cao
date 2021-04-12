var urlCate = ' http://localhost:3000/cate';
var urlProducts = 'http://localhost:3000/products';
var urlCust = 'http://localhost:3000/customer';
var countCate = document.querySelector(".countcate");
var countProd = document.querySelector(".countProd");
var countCust = document.querySelector(".countCust");
fetch(urlCate, {
    method: "GET"
})
    .then(res => res.json())
    .then(cateData => {
        countCate.innerHTML = cateData.length;
    })

fetch(urlProducts, {
    method: "GET"
})
    .then(res => res.json())
    .then(proData => {
        countProd.innerHTML = proData.length;
    })

fetch(urlCust, {
    method: "GET"
})
    .then(res => res.json())
    .then(custData => {
        countCust.innerHTML = custData.length;
    })