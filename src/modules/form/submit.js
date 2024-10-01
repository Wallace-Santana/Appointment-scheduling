import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');4

console.log(inputToday)


selectedDate.value = inputToday


selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault();
    try {
        const name = clientName.value.trim();

        if(!name){
            return alert('informe o nome do cliente')
        }

        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert('Selecione um horário disponível')
        }

        const [hour] = hourSelected.innerText.split(':')
       
        const when = dayjs(selectedDate.value).add(hour, "hour")
        

        console.log(when)

        } catch (error) {

        
        console.error('Ocorreu um erro:', error);
        alert('Por favor, tente novamente.');
    }
}
