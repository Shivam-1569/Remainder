const dayElement=document.getElementById("day");
const hourElement=document.getElementById("hour");
const minElement=document.getElementById("min");
const secondElement=document.getElementById("second");
const heading = document.querySelector(".container h1")
const box = document.querySelector(".box")


const second=1000;
const minutes=60*second;
const hour=60*minutes;
const day=24*hour;

function timer(){
    const inputday = prompt("Enter The Day").padStart(2,"0");
    const inputmonth = prompt("Enter The Month").padStart(2,"0");
    const inputYear=prompt("Enter the Year").padStart(4,"2023");
    let remDate=`${inputmonth}/${inputday}/${inputYear}`;
    if(inputday > 31 || inputmonth > 12){
        box.style.display = "none";
        heading.innerText = "Invalid Date";
    }
    const counter=setInterval(()=>{
        

        const targetDate=new Date(remDate).getTime();
        const currentTime=new Date().getTime();
        const difference=targetDate-currentTime;
        console.log(difference)
        const remDay=Math.floor(difference/day);
        const remHour=Math.floor((difference%day)/hour);
        const remMin=Math.floor((difference%hour)/minutes);
        const remSec=Math.floor((difference%minutes)/second);

        dayElement.innerHTML=remDay;
        hourElement.innerHTML=remHour;
        minElement.innerHTML=remMin;
        secondElement.innerHTML=remSec;



        if (difference < 0) {
            box.style.display = "none";
            heading.innerText = "Time's Up";
            
            clearInterval(counter);
        }
    },0)
    
};

timer();