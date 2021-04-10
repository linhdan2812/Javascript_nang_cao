var urlProducts = 'http://localhost:3000/products';
var urlCate = ' http://localhost:3000/cate';
var editModal = document.querySelector('.editModalForm .form-product');
var editID = '';
fetch(urlProducts).then(res => res.json())
    .then(data => {
        data.forEach(product => {
            renderProducts(product);
        });
    })
fetch(urlCate)
    .then(ress => ress.json())
    .then(catedata => {
        var content = ``;
        catedata.forEach(cate => {
            content += `<option value="${cate.name}">${cate.name}</option>`;
        });
        document.querySelector('#cateid').innerHTML = content;
        document.querySelector('#editcateid').innerHTML = content;
    })

//Hiển thị dữ liệu
var tableProducts = document.querySelector('#tableProducts');
var renderProducts = product => {
    output = `
        <tr data-id = "${product.id}">
            <td>${product.id}</td>
            <td>${product.proName}</td>
            <td>
                <img src="${product.image}" width="70"/>    
            </td>
            <td>${product.price}</td>
            <td>${product.detail}</td>
            <td>${product.cateId}</td>
            <td><a class="btnEdit btn btn-primary btn-sm ">Sửa</a> -
                    <a class="btnDel btn btn-danger btn-sm">Xóa</a>
            </td>
        </tr>
    `;
    tableProducts.insertAdjacentHTML('beforeend', output);
    // Xóa dữ liệu
    var btnDel = document.querySelector(`[data-id = '${product.id}'] .btnDel`);
    btnDel.addEventListener('click', e => {
        var del = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không');
        if (del) {
            fetch(`${urlProducts}/${product.id}`,
                {
                    method: 'Delete'
                })
                .then(res => res.json())
                .then(() => location.reload());
        }
    });
    // Load Dữ Liệu cập nhật
    var btnEdit = document.querySelector(`[data-id = '${product.id}'] .btnEdit`);
    btnEdit.addEventListener('click', e => {
        e.preventDefault();
        editID = product.id;
        $('.editModalForm').modal('show');
        editModal.id.value = product.id;
        editModal.id.disabled = true;
        editModal.proName.value = product.proName;
        editModal.editcateid.value = product.cateId;
        editModal.image.value = product.image;
        editModal.price.value = product.price;
        editModal.detail.value = product.detail;
    });



}

// Cập nhật dữ liệu
editModal.addEventListener('submit', e => {
    e.preventDefault();
    fetch(`${urlProducts}/${editID}`, {
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: editModal.id.value,
            proName: editModal.proName.value,
            image: editModal.image.value,
            price: editModal.price.value,
            detail: editModal.detail.value,
            cateId: editModal.editcateid.value
        })
    })
        .then(res => res.json())
        .then(() => location.reload());

});

var add = document.querySelector(".form-user");
add.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlProducts, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: add.id.value,
            proName: add.proName.value,
            image: add.image.value,
            price: add.price.value,
            detail: add.detail.value,
            cateId: add.cateid.value
        })
    })
        .then(res => res.json())
        .then(data => {
            var arr = [];
            arr.push(data);
            renderPro(arr)
        })
})