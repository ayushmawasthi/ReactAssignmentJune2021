import React, { Component, useState } from "react";
import ModalSelect from "./ModalSelect";
import "./Style.css"




const ModalView =({title})=> {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [nameErr,setNameErr]=useState({});
    const [emailErr,setEmailErr]=useState({});
    const [phoneErr,setPhoneErr]=useState({});
    const onSubmit =(e)=>{
        e.preventDefault();
        const isValid= formValidation();
        if(isValid)
        {
            alert("Data sent");
        }
    }
    const formValidation=()=>{
        const nameErr={};
        const emailErr={};
        const phoneErr={};
        let isValid=true;
        var letters = /^[A-Za-z]+$/;
        var phoneno = /^\d{10}$/;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(name.trim().length <2)
        {
            nameErr.nameInvalid="Enter Valid Name";
            isValid=false;
        }
        if(!name.trim().match(letters))
        {
            nameErr.nameInvalid="Enter Valid Name";
            isValid=false;
        }
        if(!phone.trim().match(phoneno))
        {
            nameErr.nameInvalid="Enter Valid Number";
            isValid=false;
        }
        if(!email.trim().match(mailformat))
        {
            nameErr.nameInvalid="Enter Valid Email";
            isValid=false;
        }
        setNameErr(nameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        return isValid;

    }
    
        return (
            <div className="modal">
                <form onSubmit={onSubmit}>
                <div className="modalhead">
                    Get Started with SquadVoice
                </div>
                <div className="modalplanselected">
                    Plan Selected <b>{title}</b>
                </div>
                <div className="modalname">
                    <p>Name</p>
                    <input type={Text} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="contactrow">
                    <div className="emailcontact">
                        <p>E-mail Address</p>
                        <input type={Text} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="phonecontact">
                        <p>Phone No.</p>
                        <input type={Text} onChange={(e)=>{setPhone(e.target.value)}} />
                    </div>
                </div>

                <div className="contactrow">
                    <ModalSelect para="Number of leads you generate in a month" className="dropleft"></ModalSelect>
                    <ModalSelect para="Total Leads in your CRM" className="dropright"></ModalSelect>
                </div>
                <div className="contactrow">
                    <ModalSelect para="Which CRM do you use?" className="dropleft"></ModalSelect>
                    <ModalSelect para="No. of Agents" className="dropright"></ModalSelect>
                </div>

                <div className="modalcheckboxrow">
                    <p>Which are your biggest lead sources</p>
                    <div className="checkboxalign">
                        <input type="checkbox" name="Zillow" value="Zillow"  id="check01"></input>
                        <label for="check1">Zillow</label>
                        <input type="checkbox" name="Realtor" value="Realtor" id="check02"></input>
                        <label for="check1">Realtor</label>
                        <input type="checkbox" name="Ylopo" value="Ylopo" id="check03"></input>
                        <label for="check1">Ylopo</label>
                        <input type="checkbox" name="Others" value="Others" id="check04"></input>
                        <label for="check1">Others</label>
                        
                    </div>
                </div>
                <div className="modalcheckboxrow">
                    <p>How did you hear about us</p>
                    <div className="checkboxalign">
                        <input type="checkbox" name="Google" value="Google"  id="check11"></input>
                        <label for="check1">Google</label>
                        <input type="checkbox" name="Facebook" value="Facebook" id="check12"></input>
                        <label for="check1">Facebook</label>
                        <input type="checkbox" name="Email" value="Email" id="check13"></input>
                        <label for="check1">Email</label>
                        <input type="checkbox" name="Friends" value="Friends" id="check14"></input>
                        <label for="check1">Friends</label>
                        <input type="checkbox" name="Real Closers" value="Real Closers" id="check15"></input>
                        <label for="check1">Real Closers</label>
                        
                    </div>
                </div>
                <button type="submit" className="modalsubmit">
                    Submit
                </button>
                </form>
                {Object.keys(nameErr).map((key)=>
                {
                    return alert(nameErr[key]);
                }
                )}
                {Object.keys(emailErr).map((key)=>
                {
                    return alert(emailErr[key]);
                }
                )}
                {Object.keys(phoneErr).map((key)=>
                {
                    return alert(phoneErr[key]);
                }
                )}
            </div>
        )
    }


export default ModalView;
