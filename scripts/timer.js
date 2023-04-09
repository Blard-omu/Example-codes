const time = document.getElementsByTagName("div")
 
 const timings = 60;
 let i=0;
const Timeout = () =>{
        time[0].innerHTML=`${(timings*60-i)%60}`;
i++;
    }
const myInterval = setInterval(Timeout, 1000);

// Timesec
const TimeSec = () =>{
    time[1].innerHTML=`${(timings*60-i)%60}`;
i++;
}
const mySecInterval = setInterval(TimeSec, 250);
