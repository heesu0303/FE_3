// 상품 리스트 생성
const createList = (item) => {
    const $container = document.createElement('section');
    const $productName = document.createElement('h2');
    const $productPrice = document.createElement('p');
    const $btnUpdate = document.createElement('button');
    const $btnDelete = document.createElement('button');

    $productName.innerText = item.productName;
    $productPrice.innerText = item.price;
    $btnUpdate.innerText = '수정하기';
    $btnDelete.innerText = '삭제하기';

    $container.appendChild($productName);
    $container.appendChild($productPrice);
    $container.appendChild($btnUpdate);
    $container.appendChild($btnDelete);

    document.body.appendChild($container);

    $btnUpdate.addEventListener('click', updateItem(item, $container));
    $btnDelete.addEventListener('click', deleteItem(item.id, $container));
}

// Read 
const btnLoad = document.querySelector('#btn-load');

btnLoad.addEventListener('click', (event) => {
    fetch("http://localhost:3001/product", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            for (item of data) {
                createList(item);
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
})

// Create
const btnRegister = document.querySelector('#btn-register');

btnRegister.addEventListener('click', (event) => {
    const productInfo = {
        productName: document.querySelector('#inp-name').value,
        productPrice: document.querySelector('#inp-price').value,
        productStock: document.querySelector('#inp-stock').value,
        productDate: document.querySelector('#inp-date').value,
    };

    fetch("http://localhost:3001/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productInfo),
    })
        .then((response) => response.json())
        .then((item) => {
            createList(item);
        })
        .catch((error) => {
            console.error('ERROR:', error);
        })
})

// Update
const updateItem = () => {

}

// Delete
const deleteItem = (id, $container) => {
    fetch(`http://localhost:3001/product/${id}`, {
        method: "DELETE",
    }).then(() => {
            $container.remove();
    })
}