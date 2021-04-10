var urlCust = 'http://localhost:3000/customer';
var editModal = document.querySelector('.editModalForm .form-product');
var editID = '';
fetch(urlCust).then(res => res.json()).then(data => {
    data.forEach(cust => {
        renderCus(cust);
    });
});
//Hiển thị dữ liệu
var tableProducts = document.querySelector('#tableProducts');
var renderCus = cust => {
    output = `
        <tr data-id = "${cust.id}">
            <td>${cust.id}</td>
            <td>${cust.cusName}</td>
            <td>${cust.address}</td>
            <td>${cust.phone}</td>
            <td>${cust.status}</td>
            <td>${cust.date}</td>
            <td><a class="btnEdit btn btn-primary btn-sm">Sửa</a> |
                    <a class="btnDel btn btn-danger btn-sm">Xóa</a>
            </td>
        </tr>
    `;
    tableProducts.insertAdjacentHTML('beforeend', output);
    //     // Xóa dữ liệu
    var btnDel = document.querySelector(`[data-id = '${cust.id}'] .btnDel`);
    btnDel.addEventListener('click', e => {
        var del = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không');
        if (del == true) {
            fetch(`${urlCust}/${cust.id}`,
                {
                    method: 'Delete'
                })
                .then(res => res.json())
            .then(() => location.reload());
        }
    });
    //     // Load Dữ Liệu cập nhật
        var btnEdit = document.querySelector(`[data-id = '${cust.id}'] .btnEdit`);
        btnEdit.addEventListener('click', e => {
            e.preventDefault();
            editID = cust.id;
            $('.editModalForm').modal('show');
            editModal.id.value = cust.id;
            editModal.id.disabled = true;
            editModal.cusName.value = cust.cusName;
            editModal.address.value = cust.address;
            editModal.phone.value = cust.phone;
            editModal.date.value = cust.date;
            editModal.status.value =  cust.status
        });



}

// // Cập nhật dữ liệu
editModal.addEventListener('submit', e => {
    e.preventDefault();
    fetch(`${urlCust}/${editID}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: editModal.id.value,
                cusName: editModal.cusName.value,
                address: editModal.address.value,
                phone: editModal.phone.value,
                date: editModal.date.value,
                status: editModal.status.value
            })
        })
        .then(res => res.json())
        .then(() => location.reload());
});

var add = document.querySelector(".form-user");
add.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlCust, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: add.id.value,
                cusName: add.cusName.value,
                address: add.address.value,
                phone: add.phone.value,
                status: add.status.value,
                date: add.date.value
            })
        })
        .then(res => res.json())
        .then(data => {
            var arr = [];
            arr.push(data);
            renderCate(arr)
        });
});
