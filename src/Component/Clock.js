import React from 'react';
import './clock.css';

function Clock({hour,min,sec,day}) {
  return (
    <div>
      <center>
             <div className='clock_outer' >
                    <div className='numbers number_1' >|</div>
                    <h1 className='numbers number_2'>|</h1>
                    <h1 className='numbers number_3'>|</h1>
                    <h1 className='numbers number_4'>|</h1>
                    <h1 className='numbers number_5'>|</h1>
                    <h1 className='numbers number_6'>|</h1>
                    <h1 className='numbers number_7'>|</h1>
                    <h1 className='numbers number_8'>|</h1>
                    <h1 className='numbers number_9'>|</h1>
                    <h1 className='numbers number_10'>|</h1>
                    <h1 className='numbers number_11'>|</h1>
                    <h1 className='numbers number_12'>|</h1>
                    <div className='sec_hand' style={{ transform:'translateX(-50%) rotate(calc('+sec+'*6deg))'}}></div>
                    <div className='min_hand' style={{transform:'translateX(-50%) rotate(calc('+min+'*6deg))'}}></div>
                    <div className='hour_hand' style={{transform:'translateX(-50%) rotate(calc('+hour+'*30deg))'}}></div>
                    <div className="date_day"><h5>{day}</h5></div>
             </div>    
             <div className='clock_alarm_outer'>
                  <div className='clock_alarm_left'></div>
                  <div className='center_point'><div className='center_white'></div></div>
                  <div className='clock_alarm_right'></div>
                  <div class="clock_name_title">
                       <img src='https://cdn-icons-png.flaticon.com/512/51/51338.png' alt='' className='crown_image'/>
                       <h5>ROLEX</h5>
                  </div>
                  <div className='clock_alarm_left_leg'></div>
                  <div className='clock_alarm_right_leg'></div>
             </div>
      </center>      
    </div>
  )
}

export default Clock
