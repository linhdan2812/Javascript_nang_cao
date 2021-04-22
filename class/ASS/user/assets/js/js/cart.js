var urlProducts = "http://localhost:3000/products";
var products = [];
console.log(products);
products = JSON.parse(localStorage.getItem("products"));
var cart = ``;
products.forEach((element,index) => {
     cart += /*html*/`<tr>
     <td>${index+1}</td>
     <td>${element.title}</td>
     <td><img src="${element.image}" class="" width="100" /></td>
     <td>${element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
     <td>
         <a id=""  class="btn btn-danger btn-remove-to-cart">
             <i class="fa fa-trash" aria-hidden="true"></i> Xóa
         </a>
     </td>
 </tr> `
 document.querySelector('#cart').innerHTML = cart;
 
});
