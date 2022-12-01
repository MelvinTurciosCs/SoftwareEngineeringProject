import "../App.css"
import { useState } from "react";
import FormInput from "./FormInput";

const UserReserve = () => {

    const[values, setValues] = useState({
        fullName:"",
        email:"",
        date:"",
        time:"",
        phoneNumber:"",
        numGuests:""
    });
    
    const inputs = [
        {
            id:1,
            name:"date",
            type:"date",
            placeholder:"date",
            errorMessage:"",
            label:"Date",
        },
        {
            id:2,
            name:"time",
            type:"time",
            min:"5:00",
            placeholder:"Time",
            //errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label:"Time",
            //pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true
        },
        {
            id:3,
            name:"numGuests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Passwords don't match",
            label:"Number of Guests",
            //pattern: values.password,
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