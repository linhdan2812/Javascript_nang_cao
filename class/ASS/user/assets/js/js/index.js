var urlProducts = 'http://localhost:3000/products';
var urlCate = 'http://localhost:3000/cate';
// hiển thị sản phẩm
fetch(urlProducts).then(res => res.json())
    .then(data => {
        data.forEach(product => {
            renderProducts(product);
        });
    })
//Hiển thị dữ liệu
var productList = document.querySelector('#productList');
var renderProducts = product => {
    output = `
    <li class="portfolio-item2 content" data-id="id-1" data-type="cat-item-1">
    <span class="image-block">
        <a class="image-zoom" href="" data-gal="prettyPhoto[gallery]">
            <div class="content-overlay"></div>
            <img src="${product.image}" class="img-fluid w3layouts agileits" alt="portfolio-img" width="200px">
            <div class="content-details fadeIn-bottom">
                <h3 class="content-title">${product.proName}</h3>
                <p>${product.detail}</p>
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