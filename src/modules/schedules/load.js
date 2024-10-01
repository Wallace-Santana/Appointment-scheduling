import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js";
import {scheduleshow}   from "../schedules/show.js";

const selectedDate = document.getElementById('date');
export async function scheduleDays() {
    const date = selectedDate.value;

    const dailySchedules = await scheduleFetchByDay({date});

    scheduleshow({dailySchedules});

    hoursLoad({date, dailySchedules});
}
