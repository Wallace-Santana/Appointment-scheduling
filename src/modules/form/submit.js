import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { scheduleDays } from "../schedules/load";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

console.log(inputToday)


selectedDate.value = inputToday


selectedDate.min = inputToday

form.onsubmit = async (event) => {
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
        

        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

       await scheduleDays()

       clientName.value = ""

        } catch (error) {

        
        console.error('Ocorreu um erro:', error);
        alert('Por favor, tente novamente.');
    }
}
