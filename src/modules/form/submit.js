import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carregar data atual
selectedDate.value = inputToday

//definir data minima
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault();
    
}
