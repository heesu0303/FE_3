const listItem = document.querySelector('.list-item');
const btnItem = listItem.querySelectorAll('.btn-item');
const itemImg = listItem.querySelectorAll('.item-img');
const itemName = listItem.querySelectorAll('.item-name');
const itemPrice = listItem.querySelectorAll('.item-price');
const item = {};
const itemArray = [];

const listChoiceItem = document.querySelector('.list-choice-item');

// 음료 선택
function choiceItem(itemName, itemPrice, itemImg) {
    item['name'] = itemName;
    item['price'] = itemPrice;
    item['img'] = itemImg;
    itemArray.push({...item});
    console.log(itemArray);

    showItem(item.img, item.name);
}

function showItem(itemImg, itemName) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const amount = document.createElement('p');

    name.classList.add('item-name');
    amount.classList.add('item-amount');
    
    img.src = itemImg;
    name.innerHTML = itemName;
    
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(amount);
    listChoiceItem.appendChild(li);


}

btnItem.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('.item-name').innerHTML;
        const itemPrice = item.querySelector('.item-price').innerHTML;
        const itemImg = item.querySelector('.item-img').src;
        choiceItem(itemName, itemPrice, itemImg);
    })
})









