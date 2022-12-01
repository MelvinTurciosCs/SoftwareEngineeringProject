import "../App.css"
import { useState } from "react";
import FormInput from "./FormInput";

const UserReserve = () => {

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        date:"",
        time:"",
        phone:"",
        guests:""
    });
    
    const inputs = [
        {
            id:4,
            name:"date",
            type:"date",
            placeholder:"date",
            errorMessage:"",
            label:"Date",
        },
        {
            id:5,
            name:"time",
            type:"time",
            min:"5:00",
            step:"120000",
            placeholder:"Time",
            //errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label:"Time",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true
        },
        {
            id:6,
            name:"guests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Number of Guests is Required",
            label:"Number of Guests",
            pattern: "^[1-9][0-9]*$",
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    console.log(values);
    return <div className = "GuestReserve">
        <form onSubmit={handleSubmit}>
        <h1>Reserve a Table</h1>
            {inputs.map(input=>(
            <FormInput key = {input.id} {...input} value= {values[input.name]} onChange={onChange}/>
            ))}
            <button type="submit">Submit</button>
            {/* <h1>{values.birthday}</h1> */}
        </form>

    </div>
};

export default UserReserve;