import { useState } from "react";
import Clock from "./Component/Clock";
function App() {
  let time=new Date().toLocaleTimeString();
  const [hours,sethour]=useState(time);
  const [min,setmin]=useState(time);
  const [sec,setsec]=useState(time);
  const [date_day,setday]=useState('');
  const updatesec=()=>{
    const time=new Date()
    setsec(time.getSeconds())
    sethour(time.getHours()-12)
    setmin(time.getMinutes())
    const updateday=(x)=>{
      switch(x){
        case 1:
           return setday('MON')
        case 2:
          return setday('TUE');
        case 3:
          return setday('WED');
        case 4:
          return setday('THU');
        case 5:
          return setday('FRI');
        case 6:
          return setday('SAT');
        case 7:
          return setday('SUN');
        default:
          return setday('');
      }
    }
    var tim=new Date()
    const day1 = tim.getDay();
    updateday(day1)
  };

  setInterval(updatesec,1000); 
  
  return (
    <div>
      <Clock sec={sec} hour={hours} min={min} day={date_day}/>
    </div>
  );
}

export default App;
