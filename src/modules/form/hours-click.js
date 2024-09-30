export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available) => {
        available.addEventListener('click', function(selected){
           hours.forEach((hours)=> {
            hours.classList.remove('hour-selected');
           });
           selected.target.classList.add('hour-selected');
        })
    })
}