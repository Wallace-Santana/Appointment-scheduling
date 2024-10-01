import{openingHours} from "../../utils/opening-hours.js"
import dayjs  from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours =  document.getElementById("hours");

export function hoursLoad({date, dailySchedules}){
    hours.innerHTML = "";
    const unavailableHours = dailySchedules.map((schedule)=>
         dayjs(schedule.when).format("HH:mm"))

    
    const openin = openingHours.map((hour) =>{
        const [scheduleHour] = hour.split(":");
        const isHoursPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        
        const available = !unavailableHours.includes(hour) && !isHoursPast;
        return{
            hour,
            available
        }
        
    })
 
    openin.forEach(({hour, available}) => {
        const li = document.createElement('li');
        li.classList.add('hour');
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour;

        if(hour === "9:00"){
            hoursHeaderAdd("Manhã")
        }else if (hour === "13:00"){
            hoursHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hoursHeaderAdd("Noite")
        }
            
        hours.appendChild(li);
    })
 hoursClick()
}

function hoursHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}