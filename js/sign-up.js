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

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Зупинити стандартну обробку форми

        // Отримайте значення з полів форми
        const email = document.getElementById("email").value;
        const lastName = document.getElementById("last_name").value;
        const firstName = document.getElementById("first_name").value;
        const telephone = document.getElementById("telephone").value;
        const group = document.getElementById("group").value;

        // Створіть новий рядок для таблиці і додайте дані
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
      <td>${email}</td>
      <td>${lastName}</td>
      <td>${firstName}</td>
      <td>${telephone}</td>
      <td>${group}</td>
    `;

        // Скинути дані в формі
        form.reset();
    });


