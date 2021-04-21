var urlProducts = 'http://localhost:3000/products';
var urlProduct = 'http://localhost:3000/products';
var urlCate = 'http://localhost:3000/cate';

// hiển thị sản phẩm
fetch(urlProducts).then(res => res.json())
    .then(data => {
        data.forEach(products => {
            renderProducts(products);
        });
    })

//Hiển thị dữ liệu
var pro = document.querySelector('#detail');
var productList = document.querySelector('#productList');
var detailId = "null";
var renderProducts = product => {
    output = `
    <li class="portfolio-item2 content mt-4" data-id="id-1" data-type="cat-item-1" data-id = "${product.id}">
        <a href="detail.html?id=${product.id}">
            <span class="image-block">
                <div class="content-overlay"></div>
                <img src="${product.image}" class="img-fluid w3layouts agileits" alt="portfolio-img" width="200px">
                <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">${product.proName}</h3>
                </div>
            </span>
        </a>
    </li>
    `;
    productList.insertAdjacentHTML('beforeend', output);

 
}
// console.log(detailId) ; 

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
        <a href="pro_cate.html?id=${cate.id}" title="Category 1">${cate.name}</a>
    </li>
    `;
    catetList.insertAdjacentHTML('beforeend', output);
}
