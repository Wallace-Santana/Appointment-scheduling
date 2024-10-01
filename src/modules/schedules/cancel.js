import { scheduleDays } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll('.period');

periods.forEach((period) => {
    period.addEventListener('click', async function(event) {
        if (event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest("li");
            const { id } = item.dataset;  

            if (id) {
                const isConfirm = confirm('Are you sure you want to cancel?');
                if (isConfirm) {
                    await scheduleCancel(id);  

                    await scheduleDays();  
                }
            }
        }
    });
});