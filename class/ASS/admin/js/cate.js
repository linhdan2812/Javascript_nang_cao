var urlCate = ' http://localhost:3000/cate';
var editModal = document.querySelector('.editModalForm .form-product');
var editID = '';
fetch(urlCate).then(res => res.json()).then(data => {
    data.forEach(cate => {
        renderCate(cate);
    });
});
//Hiển thị dữ liệu
var tableProducts = document.querySelector('#tableProducts');
var renderCate = cate => {
    output = `
        <tr data-id = "${cate.id}">
            <td>${cate.id}</td>
            <td>${cate.name}</td>
            <td><a class="btnEdit btn btn-primary btn-sm">Sửa</a> |
                    <a class="btnDel btn btn-danger btn-sm">Xóa</a>
            </td>
        </tr>
    `;
    tableProducts.insertAdjacentHTML('beforeend', output);
    // Xóa dữ liệu
    var btnDel = document.querySelector(`[data-id = '${cate.id}'] .btnDel`);
    btnDel.addEventListener('click', e => {
        var del = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không');
        if (del) {
            fetch(`${urlCate}/${cate.id}`, 
            {
                 method: 'Delete' 
                })
                .then(res => res.json())
                .then(() => location.reload());
        }
    });
    // Load Dữ Liệu cập nhật
    var btnEdit = document.querySelector(`[data-id = '${cate.id}'] .btnEdit`);
    btnEdit.addEventListener('click', e => {
        e.preventDefault();
        editID = cate.id;
        $('.editModalForm').modal('show');
        editModal.id.value = cate.id;
        editModal.id.disabled = true;
        editModal.name.value = cate.name;
    });



}

// Cập nhật dữ liệu
editModal.addEventListener('submit', e => {
    e.preventDefault();
    fetch(`${urlCate}/${editID}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: editModal.id.value,
                name: editModal.name.value,
            })
        })
        .then(res => res.json())
        .then(() => location.reload());

});

var add = document.querySelector(".form-user");
add.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlCate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: add.id.value,
                name: add.name.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            var arr = [];
            arr.push(data);
            renderCate(arr)
        });
});
