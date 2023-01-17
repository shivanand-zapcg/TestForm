import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './from.css'

export const FormPage = ({ update }) => {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [phone, setPhone] = useState("")
    // const [emergency, setEmergency] = useState("")
    // const [gender, setGender] = useState("")
    // const [email, setEmail] = useState("")

    const [formData, setFormData] = useState({});

    let y = []
    useEffect(() => {
        //   console.log("Form useEffect")
        console.log(formData)
        return () => {
        }
    }, [formData])

    // const check = (e) => {
    //     e.preventDefault()
    //     displayRadioValue()
    //     function displayRadioValue() {
    //         var ele = document.getElementsByName('gender');
    //         for (let i = 0; i < ele.length; i++) {
    //             if (ele[i].checked) {
    //                 // console.log(ele[i].value)
    //                 let x = {}
    //                 x.firstName = firstName
    //                 x.lastName = lastName
    //                 x.phone = phone
    //                 x.emergency = emergency
    //                 x.gender = ele[i].value
    //                 // setForm(x)
    //                 y.push(x)
    //             }
    //         }
    //     }
    //     console.log(y)
    // }

    const details = (e) =>{
        console.log(e.target.name + " "+ e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    
    return (
        <>

            <div className="container">
                <h1>General Admission Registration</h1>
                <form onSubmit={() => update(formData)}>
                    <label >Name</label>
                    <input type="text" name="firstName" placeholder="First Name" onBlur={details} />
                    <input type="text" name="lastName" placeholder="Last Name" onBlur={details} /><br />

                    {/* <label >Email</label>
                    <input type="email" placeholder="sample@example.com" onBlur={(e) => setEmail(e.target.value)} /><br />

                    <label >Gender</label>
                    <input type="radio" id="male" name="gender" value="Male" />
                    <label>Male</label>
                    <input type="radio" id="female" name="gender" value="Female" />
                    <label>Female</label><br />

                    <label >Phone</label>
                    <input type="number" onBlur={(e) => setPhone(e.target.value)}/><br />

                    <label >Emergency contact</label>
                    <input type="number" onBlur={(e) => setEmergency(e.target.value)} /> <br /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}