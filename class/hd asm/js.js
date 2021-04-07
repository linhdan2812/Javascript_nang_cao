var urlProducts = 'http://localhost:3000/products';
// lấy dữ liệu
fetch(urlProducts)
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            renderPro(product);
        });
    });
// hiển thị dữ liệu
var tabProduct = document.querySelector("#tableProducts");
var renderPro = product => {
    output = `
    <tr data-id="${product.id}">
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
            <a class="btnEdit btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter1">Sửa</a> |
            <a class="btnDel btn btn-danger btn-sm">Xóa</a>
        </td>
    </tr>`;
    tabProduct.insertAdjacentHTML('beforeend', output);
    // xoá dữ liệu
    var btnDel = document.querySelector(`[data-id = '${product.id}'] .btnDel`);
    btnDel.addEventListener('click', e => {
        var del = confirm('có muốn xoá sp này?');
        if (del) {
            fetch(`${urlProducts}/${product.id}`, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(() => location.reload());
        }
    });
    // sửa put
    var edit = document.querySelector(".form-edit");
    var btnEdit = document.querySelector(`[data-id = '${product.id}'] .btnEdit`);
    btnEdit.addEventListener('click', e => {
        e.preventDefault();
        alert(product.id + "+" + product.name);
    })
    // edit.addEventListener('submit', e => {
    //     e.preventDefault();

    // })
};
// thêm sp
var add = document.querySelector(".form-user");
add.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlProducts, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                id: add.id.value,
                name: add.name.value,
                price: add.price.value
            }
        )
    })
        .then(res => res.json())
        .then(data => {
            var arr = [];
            arr.push(data);
            renderPro(arr)
        });
})
