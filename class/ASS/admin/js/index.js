var urlCate = ' http://localhost:3000/cate';
var urlProducts = 'http://localhost:3000/products';
var urlCust = 'http://localhost:3000/customer';
var urlCount = 'http://localhost:3000/cate?_embed=products'
var countCate = document.querySelector(".countcate");
var countProd = document.querySelector(".countProd");
var countCust = document.querySelector(".countCust");
var count = document.querySelector(".count");
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

fetch(urlCount, {
    method: "GET"
})
    .then(res => res.json())
    .then(count => {
        count.forEach(countPro => {
            renderCount(countPro)
        });
    })
var countPro = document.querySelector(".countPro");
var renderCount = count => {
    result = `
    <tr>
        <td>${count.id}</td>
        <td>${count.name}</td>
        <td>${count.products.length}</td>
    </tr>
    `;
    countPro.insertAdjacentHTML('beforeend', result)
}