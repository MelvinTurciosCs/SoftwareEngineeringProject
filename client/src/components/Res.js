import React, {useState} from 'react'
import useLocalStorage from './useLocalStorage';

const Res = () => {

    let [value, setValue] = useLocalStorage('');


  return (
    <div>
        <h1>Reservations</h1>

<div className="form">
  <label>Name:</label>
  <input type= "text" name="name" onChange={(event) => setValue(event.target.value)}
  valuie = {value}
  />
  <label>Phone Number:</label>
  <input type= "text" name="phone_number"/>
  <label>Number of Guest:</label>
  <input type= "text" name="number_Of_Guest" />
  <label>reservation date</label>
  <input type= "Date" name="reservation_date"/>
  <label>reservation time:</label>
  <input type= "time" name= "reservation_time"/>

  <button>Submit</button>
  
</div>

    </div>
  )
}

export default Res