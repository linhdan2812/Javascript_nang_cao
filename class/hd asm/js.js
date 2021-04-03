var urlProducts = 'http://localhost:3000/products';
fetch(urlProducts)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        data.forEach(product => {
            renderPro(product);
        });
    });
// hiẻn thị dữ liệu
var tabProduct = document.querySelector("#tableProducts");
var renderPro = product => {
    output = `
    <tr data-id="${product.id}">
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
            <a class="btnEdit btn btn-primary btn-sm">Sửa</a> |
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
}
