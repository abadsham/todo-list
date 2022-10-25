let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add btn disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

// add new item to list
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-x-lg"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a tasks')
    }
})

// delete item from list
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('bi-x-lg')) {
        e.target.parentElement.parentElement.remove();
    }
})

// mark item as complated
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('bi-pencil-square')
    ) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})