const formAdd = document.querySelector('#form-add');
const formUpdate = document.querySelector('#form-update');
const deleteButton = document.querySelector('#delete');
const updateField = document.querySelector('#update-field');

formAdd?.addEventListener('submit', add);
formUpdate?.addEventListener('submit', update);
deleteButton?.addEventListener('click', deleteOne);

function add(event) {
    event.preventDefault();

    const fd = new FormData(formAdd);

    fetch('/contacts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function update(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/update/${fd.get('id')}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function deleteOne(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/delete/${fd.get('id')}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(() => window.location.href = '/contacts');
}

var formChanged = false; // флаг изменения формы 
var inputs = document.querySelectorAll('#form-update input'); // выбираем все поля формы 

// добавляем обработчик события изменения для всех полей формы 
for (var i = 0; i < inputs.length; i++) { 
    inputs[i].addEventListener('input', function() { 
        formChanged = true; // меняем флаг на true, если поле изменено 
        checkFormChanged(); // проверяем, нужно ли блокировать кнопку "Удалить" 
    }); 
} 

function checkFormChanged() { 
    var deleteBtn = document.querySelector('#delete'); // выбираем кнопку "Удалить" 
    if (formChanged) { 
        deleteBtn.disabled = true; // разблокируем кнопку, если форма была изменена 
    } else { 
        deleteBtn.disabled = false; // блокируем кнопку, если форма не была изменена 
    } 
} 

checkFormChanged(); // проверяем, нужно ли блокировать кнопку "Удалить" сразу после загрузки страницы





