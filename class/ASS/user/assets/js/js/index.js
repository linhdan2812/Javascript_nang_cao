var urlProducts = 'http://localhost:3000/products';
var urlProduct = 'http://localhost:3000/products';
var urlCate = 'http://localhost:3000/cate';
var detailId = '';
var title = document.querySelector(".product-title");

// hiển thị sản phẩm
fetch(urlProducts).then(res => res.json())
    .then(data => {
        data.forEach(products => {
            renderProducts(products);
        });
    })

//Hiển thị dữ liệu
var productList = document.querySelector('#productList');
var renderProducts = product => {
    detailId = product.id;
    // title.innerHTML = detailId;
    output = `
    <li class="portfolio-item2 content" data-id="id-1" data-type="cat-item-1">
        <span class="image-block">
            <a href="detail.html?id=${product.id}" class="detail">
                <div class="content-overlay"></div>
                <img src="${product.image}" class="img-fluid w3layouts agileits" alt="portfolio-img" width="200px">
                <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">${product.proName}</h3>
                </div>
            </a>
        </span>
    </li>
    `;
    productList.insertAdjacentHTML('beforeend', output);
}


// HIỂN THỊ DANH MỤC
fetch(urlCate).then(res => res.json())
    .then(data => {
        data.forEach(cate => {
            renderCate(cate);
        });
    })
//Hiển thị dữ liệu
var catetList = document.querySelector('#cateList');
var renderCate = cate => {
    output = `
    <li class="cat-item-1">
        <a href="#" title="Category 1">${cate.name}</a>
    </li>
    `;
    catetList.insertAdjacentHTML('beforeend', output);
}
// hiển thị dữ liệu trên trang detail
// fetch(urlProduct)
// .then(res => res.json())
// .then(datapro =>{
//     datapro.forEach(product =>{
//         renderProduct(product)
//     })
// })
//hiện thị dữ liệu detail
// var deatil = document.querySelector(".details");
// var renderProduct = productDetail =>{
//     // detailId = productDetail.id; 
//     productDetail.title.innerHTML = detailId;
// }