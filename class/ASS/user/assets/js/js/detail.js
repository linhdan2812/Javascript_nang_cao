window.onload = () => {
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);
    var categoryAPI = 'http://localhost:3000/category';
    var productAPI = 'http://localhost:3000/products';
    var url = new URL(document.URL);
    var id = url.searchParams.get('id');

    // function toJSON(object) {
    //     var json = JSON.stringify(object);
    //     return json;
    // }
    var getProduct = () => {
        fetch(`${productAPI}/${id}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {

                $('#title').innerHTML = data.proName;
                $('#price').innerHTML = data.price;
                $('.product-description').innerHTML = data.detail;
                $('#img').src = data.image;

            });

    }

    if (id) {
    getProduct();
    } else {
        // $('#product-detail-content').innerHTML = 'Không tìm thấy sản phẩm';
    }


}

// document.querySelector("#search-input").addEventListener('keyup', function(e) {
//     var result = document.querySelector("#result-search")
//     console.log(e.target.value);
//     var url_Search = `http://localhost:3000/products?q=${e.target.value}&qFields=name`

//     fetch(url_Search)
//         .then((res) => res.json())
//         .then((data) => result.innerHTML = data.map(product => {
//             return ` 
//             <a href="detail.html?id=${product.id}" >
//             <img src="${product.image}" alt=""  style="width:140px;">
//                 <span class="info">
//                 <h6 class="name">${product.name}</h6>
//                 <span class="price" style="font-size:13px">${product.price}  đ</span></span>
//                 </a>
           
//             <hr>
//             `
//         }).join(""));
// })