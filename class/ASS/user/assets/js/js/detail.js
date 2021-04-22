window.onload = () => {
    var $ = document.querySelector.bind(document);
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
                $('#image').src = data.image;

            });

    }
    getProduct(id);

}

var productAPI = 'http://localhost:3000/products';
var url = new URL(document.URL);
var id = url.searchParams.get('id');
document.querySelector("#btn-add-to-cart").addEventListener("click",()=>{
    fetch(`${productAPI}/${id}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                if (localStorage.getItem("products")) {
                    products = JSON.parse(localStorage.getItem("products"));
                  }
                  if (localStorage.getItem("products") == null) {
                    var products = [];
                    localStorage.setItem("products", products);
                  }
                  products = JSON.parse(localStorage.getItem("products"));
                    products.push({
                      id: data.id,
                      title: data.proName,
                      image: data.image,
                      price: data.price
                    });
                    console.log(typeof price);
                    localStorage.setItem("products", JSON.stringify(products));
            
                    alert("Thêm vào giỏ hàng thành công");
                  
            });
})