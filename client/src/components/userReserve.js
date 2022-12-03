import "../App.css"
import React, { useState } from "react";
import FormInput from "./FormInput";
import Modal from "./SubmitMessage";


const UserReserve = () => {
    const [show, setShow] = useState(false);

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
            name:"fullName",
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
            name:"phoneNumber",
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
            name:"numGuests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Passwords don't match",
            label:"Number of Guests",
            //pattern: values.password,
            required: true
        }
    ]

    const holidays = [
        "2023-01-01",
        "2023-01-16",
        "2023-02-14", 
        "2023-02-20",
        "2023-04-07",
        "2023-05-29",
        "2023-11-10",
        "2023-11-04",
        "2023-12-24"
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        
        let high_traffic = false;

        for(let i = 0; i < holidays.length; i++) {
            if(values.date === holidays[i]){
                high_traffic = true;
            }
            else {
                high_traffic = false;
            }
        }

        if(high_traffic === setShow){
            return <Modal className='HighTrafficDay' title="High Traffic Day" onClose={() => setShow(false)} show={show}>
            <p className="ModalMessage">This is considered a high traffic day. There might be limited seating.</p>
            </Modal>
        }
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
            <button type="submit" onClick={() => setShow(true)}>Submit</button>
            <Modal className='HighTrafficDay' title="High Traffic Day" onClose={() => setShow(false)} show={show}>
                <p className="ModalMessage">This is considered a high traffic day. There will be limited seating.</p>
            </Modal>
            {/* <h1>{values.birthday}</h1> */}
        </form>

    </div>
};

  export default UserReserve;