$(document).ready(function() {
    $('#telephone').mask('+38(000)000-00-00');
});
let rows = [];
$('.table').on('clicked.rs.row', function (evt){
    rows = $(this).selectedrows();
    updateButtonsState();
});

const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const form = document.querySelector("form");
const tableBody = document.querySelector("#data-table tbody");
const deleteButton = document.getElementById('deleteButton');
const duplicateButton = document.getElementById('duplicateButton');
const password = document.getElementById("password");
const repeatPassword = document.getElementById("password_repeat");
const telephoneField = document.getElementById("telephone");
const errorMessagePassword = document.getElementById('errorMessagePassword');
const iconOpen = document.getElementById('iconOpen');
const iconDelete = document.getElementById('iconDelete');
const iconDuplicate = document.getElementById('iconDuplicate');
const iconClose = document.getElementById('iconClose');

password.addEventListener("input", function (event) {
    errorMessagePassword.style.display = 'none';
});
repeatPassword.addEventListener("input", function (event) {
    errorMessagePassword.style.display = 'none';
});
const errorMessagePhoneNumber = document.getElementById('errorMessagePhoneNumber');
telephoneField.addEventListener("input", function (event) {
    if (telephoneField.value.length === 17) {
        errorMessagePhoneNumber.style.display = 'none';
    }
});

function open() {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 10);
}

function close() {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Затримка для закриття анімації
}

function submit() {
    event.preventDefault();

    if (password.value != repeatPassword.value) {
        errorMessagePassword.style.display = 'block';
    } else if (telephoneField.value.length != 17){
        errorMessagePhoneNumber.style.display = 'block';
    } else {
        const email = document.getElementById("email").value;
                const lastName = document.getElementById("last_name").value;
                const firstName = document.getElementById("first_name").value;
                const telephone = telephoneField.value;
                const group = document.getElementById("group").value;

                // Отримайте вибрану стать
                const genderInputs = document.querySelectorAll('input[name="gender"]');
                let selectedGender = "";
                for (const genderInput of genderInputs) {
                    if (genderInput.checked) {
                        selectedGender = genderInput.value;
                        break;
                    }
                }

                const newRow = tableBody.insertRow();
                newRow.innerHTML = `
                  <td data-label="Email">${email}</td>
                  <td data-label="Прізвище">${lastName}</td>
                  <td data-label="Ім'я">${firstName}</td>
                  <td data-label="Номер телефону">${telephone}</td>
                  <td data-label="Стать">${selectedGender}</td>
                  <td data-label="Група">${group}</td>
                `;

                form.reset();
    }
}

function deleteElement() {
    $(rows).each(function() {
        $(this).remove();
    });
    rows = [];
    updateButtonsState();
}

function duplicateElement() {
    $(rows).each(function() {
        const duplicateRow = $(this).clone();
        duplicateRow.removeClass('selected');
        duplicateRow.insertAfter($(this));
    });
}

function updateButtonsState() {
    if (rows.length === 0) {
        deleteButton.disabled = true;
        duplicateButton.disabled = true;
        iconDelete.disabled = true;
        iconDuplicate.disabled = true;
        deleteButton.style.backgroundColor = 'gray';
        duplicateButton.style.backgroundColor = 'gray';
        iconDelete.style.color = 'gray';
        iconDuplicate.style.color = 'gray';
        deleteButton.style.cursor = 'default';
        duplicateButton.style.cursor = 'default';
    } else {
        deleteButton.disabled = false;
        duplicateButton.disabled = false;
        iconDelete.disabled = false;
        iconDuplicate.disabled = false;
        deleteButton.style.backgroundColor = '#ff9558';
        duplicateButton.style.backgroundColor = '#ff9558';
        iconDelete.style.color = 'black';
        iconDuplicate.style.color = 'black';
        deleteButton.style.cursor = 'pointer';
        duplicateButton.style.cursor = 'pointer';
    }
}

openModalButton.addEventListener('click', open);
iconOpen.addEventListener('click', open);
closeModalButton.addEventListener('click', close);
iconClose.addEventListener('click', close);
form.addEventListener("submit", submit);
deleteButton.addEventListener('click', deleteElement);
iconDelete.addEventListener('click', deleteElement);
duplicateButton.addEventListener('click', duplicateElement);
iconDuplicate.addEventListener('click', duplicateElement);

updateButtonsState();