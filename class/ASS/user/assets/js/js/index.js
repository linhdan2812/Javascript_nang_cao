var urlProducts = `http://localhost:3000/products`;
var urlProduct = 'http://localhost:3000/products';
var urlCates = 'http://localhost:3000/cate';

var getProducts = (urlProducts, mode = false) => {
    fetch(urlProducts)
        .then((res) => res.json())
        .then((data) => {
            console.log("products", data);
            if (!mode) {
                data.forEach((product) => {
                    renderProducts(product);
                });
            } else {
                renderVip(data)
            }
        });
}

var getCategories = () => {
    fetch(urlCates)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((cate) => {
                renderCates(cate);
            });
        }).then(() => {
            var btnCategories = document.querySelectorAll('.btnCategories');
            console.log(btnCategories);
            btnCategories.forEach(btn => {
                btn.addEventListener('click', () => {
                    var urlProducts = `http://localhost:3000/products/?cateId=${btn.dataset.id}`;
                    getProducts(urlProducts,true)
                })
            })
        });
}
var main = () => {
    getCategories();
    getProducts(urlProducts);
}
main();
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

var renderVip = (products) => {
    var htmls = products.map(product => {
        return /*html*/ `  <li class="portfolio-item2 content mt-4" data-id="id-1" data-type="cat-item-1" data-id = "${product.id}">
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
    }).join('')
    document.querySelector('#show').innerHTML = htmls;
}

// console.log(detailId) ; 

// HIỂN THỊ DANH MỤC

//Hiển thị dữ liệu
var catetList = document.querySelector('#cateList');
var renderCates = cate => {
    output = /*html*/ `
    <li class="cat-item-1" data-id=${cate.id}  class="btnCategories">
    ${cate.name}
    </li>
    `;
    catetList.insertAdjacentHTML('beforeend', output);
}


//Tìm kiếm
document.querySelector("#search-input").addEventListener('keyup', function (e) {
    var result = document.querySelector("#productList")
    console.log(e.target.value);
    var url_Search = `http://localhost:3000/products?q=${e.target.value}&qFields=name`
    fetch(url_Search)
        .then((res) => res.json())
        .then((data) => result.innerHTML = data.map(product => {
            return ` <li class="portfolio-item2 content mt-4" data-id="id-1" data-type="cat-item-1" data-id = "${product.id}">
            <a href="detail.html?id=${product.id}">
                <span class="image-block">
                    <div class="content-overlay"></div>
                    <img src="${product.image}" class="img-fluid w3layouts agileits" alt="portfolio-img" width="200px">
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">${product.proName}</h3>
                    </div>
                </span>
            </a>
        </li>`
        }).join(""));
})