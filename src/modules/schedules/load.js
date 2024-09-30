import{hoursLoad} from "../form/hours-load"

const selectedDate = document.getElementById('date')
export function scheduleDays(){
    const date = selectedDate.value;
    hoursLoad({date});
}