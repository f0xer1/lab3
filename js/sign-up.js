const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.style.opacity = 1;
});

closeModalButton.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Затримка для закриття анімації
});


const form = document.querySelector("form");
const tableBody = document.querySelector("#data-table tbody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const lastName = document.getElementById("last_name").value;
    const firstName = document.getElementById("first_name").value;
    const telephone = document.getElementById("telephone").value;
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
      <td>${email}</td>
      <td>${lastName}</td>
      <td>${firstName}</td>
      <td>${telephone}</td>
      <td>${selectedGender}</td>
      <td>${group}</td>
    `;

    form.reset();
});

let rows = [];
$('.table').on('clicked.rs.row', function (evt){
    rows = $(this).selectedrows();
    updateButtonsState();
});
const deleteButton = document.getElementById('deleteButton');
const duplicateButton = document.getElementById('duplicateButton');

function updateButtonsState() {
    if (rows.length === 0) {
        deleteButton.disabled = true;
        duplicateButton.disabled = true;
        deleteButton.style.backgroundColor = 'gray';
        duplicateButton.style.backgroundColor = 'gray';
        deleteButton.style.cursor = 'default';
        duplicateButton.style.cursor = 'default';
    } else {
        deleteButton.disabled = false;
        duplicateButton.disabled = false;
        deleteButton.style.backgroundColor = '#ff9558';
        duplicateButton.style.backgroundColor = '#ff9558';
        deleteButton.style.cursor = 'pointer';
        duplicateButton.style.cursor = 'pointer';
    }
}

deleteButton.addEventListener('click', () => {
    $(rows).each(function() {
        $(this).remove();
    });
    rows = [];
    updateButtonsState();
});

duplicateButton.addEventListener('click', () => {
    $(rows).each(function() {
        const duplicateRow = $(this).clone();
        duplicateRow.removeClass('selected');
        duplicateRow.insertAfter($(this));
    });
});

updateButtonsState();

