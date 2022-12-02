import "../App.css"
import { useContext } from 'react'
import React from 'react'
import { useState } from "react";
import FormInput from "../components/FormInput";
import axios from "axios";
import { AuthContext } from '../context/authContext';

const GuestReserve = () => {

    const {currentUser} = useContext(AuthContext);

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        date:"",
        time:"",
        phone:"",
        guests:"",
        tableName:""
    });

    const inputs = [
        {
            id:1,
            name:"fullname",
            type:"text",
            placeholder:"Full Name",
            errorMessage:"Username should be 3-16 characters and shouldn't include and special character!",
            label:"Name",
            pattern: "^[A-Za-z0-9]{3,16}$", //js regex code
            required: true
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"email",
            errorMessage:"Should be a valid email adresss",
            label:"Email",
            required: true
        },
        {
            id:3,
            name:"phone",
            type:"number",
            placeholder:"Phone Number",
            errorMessage:"Not a valid phone number.",
            pattern:"/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g",
            label:"Phone Number",
            required: true
        },
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
            placeholder:"Time",
            //errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label:"Time",
            //pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true
        },
        {
            id:6,
            name:"guests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Passwords don't match",
            label:"Number of Guests",
            //pattern: values.password,
            required: true
        }
    ]

    // const isWeekend = (e) => {
    //     const date = values.date;
    //     // const day = date.getDay();
    //     let weekday = new Date();
    //     //console.log(date.toString())
    //     weekday = date.toString();
    //     console.log(weekday)
    //     // let isWeekend = false;
    //     // // isWeekend = (day === 6) || (day === 0);
    //     // if ((weekday.getDay() === 6) || (weekday.getDay() === 0)) console.log("Its a weekend")
    //     // else console.log("Its no weekend")
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            //isWeekend();
            await axios.post("/reservations/add",values)
        }catch(err){
            console.log(err)
        }
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        // isWeekend();
    }

    //console.log(values);
    return <div className = "GuestReserve">
        <form onSubmit={handleSubmit}>
        <h1>Reserve a Table</h1>
            {inputs.map(input=>(
            <FormInput key = {input.id} {...input} value= {values[input.name]} onChange={onChange}/>
            ))}
            <button type="submit">Submit</button>
            {/* <h1>{values.birthday}</h1> */}
        </form>
        {/* {isWeekend} */}

    </div>
};

export default GuestReserve;