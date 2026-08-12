import './style.scss'
import { form } from './api';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';




const Form = () => {
    // const [checkMail, setCheckMail] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        interestType: ""
    });
    const reset = () => {
        setUser({
            name: "",
            email: "",
            phone: "",
            interestType: ""
        });
    }
    const success = () => { toast.success('Successfully Submitted!') };
    const invalid = () => { toast.error("Wrong Input") };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

    }
    const getData = async () => {
        const response = await form(user);
        if (Error) {
            invalid();
            reset();

        }
        else {
            success();
            reset();

        }
    }
    const isformValid =
        user.name.trim() !== "" && user.email.trim() !== "" && user.phone.trim() !== "";

    const handleFormSubmit = (event) => {
        event.preventDefault();
        getData();
        // alert("registered successfuly")
    }

    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);

   const isNumberValid = /^(?:\\+91[- ]?)?[6-9]\d{9}$/.test(user.phone);


   



    return (
        <>
            <div className="formContainer">
                <h2 className='formTop'>Join Us Form</h2>
                <div className="joinContainer">
                    <div className="formLeft">
                        <div className="leftUp">
                            <h3 className='headForm'>Become Voice of Chandigarh (Volunteers)</h3>
                            <hr className='underline' />
                            <ul className='ulLeftForm'>
                                <li className='list'>Choose how you’d like to contribute (story collection, events, documentation, outreach)</li>
                                <li className='list'>Join ongoing projects across sectors of Chandigarh</li>
                                <li className='list'>Help listen, document, and co-create cultural memory</li>
                            </ul>
                        </div>
                        <div className="leftBelow">
                            <h3 className='headForm'>City storytelling partnerships (Brands & Events)</h3>
                            <hr className='underline' />
                            <ul className='list'>
                                <li className='list'>Co-host conversations, exhibitions, or listening sessions</li>
                                <li className='list'>Support community-led art and documentation initiatives</li>
                                <li className='list'>Enable platforms that amplify citizen voices</li>
                            </ul>

                        </div>

                    </div>


                    <form className="rightForm" onSubmit={handleFormSubmit}>
                        <div className="formName">
                            <label htmlFor="nameForm">Name</label><br />
                            <input required type="text" name='name' placeholder='Enter Your Name' id='nameForm' className='inputForm' onChange={handleInput} value={user.name} />
                        </div>
                        <div className="formEmail">
                            <label htmlFor="emailForm">Email</label><br />
                            <input required type="email" name='email' id="emailForm" placeholder='abc@gmail.com' className='inputForm' onChange={handleInput} value={user.email} />
                            { user.email.length > 0 && !isEmailValid ? <p className='errorEmail'>Enter valid email</p> : ""}
                        </div>
                        <div className="phoneNum">
                            <label htmlFor="phoneForm">Phone Number</label><br />
                            <input required type="text" maxLength={10} required name='phone' id="phoneForm" placeholder='Enter Number' className='inputForm' onChange={handleInput} value={user.phone} />
                            {user.phone.length>0 && !isNumberValid? <p className='errorPhone'>Enter valid phone number</p> : "" }
                        </div>
                        <div className="radioForm">
                            <p>I Want To:</p>
                            <input type="radio" id="checkMark1" name='interestType' onChange={handleInput} value={1} />
                            <label htmlFor="vol" htmlFor='checkMark1' className='labelForm' >Volunteer</label>
                            <input type="radio" id="checkMark2" name='interestType' onChange={handleInput} value={2} />
                            <label htmlFor="vol" htmlFor='checkMark2' className='labelForm'>Collaborate (Brands/Events)</label> <br />
                            <button className='formSubmit' disabled={!isformValid} onClick={getData}>Submit</button>
                        </div>

                    </form>
                    <Toaster
                        position="top-right"
                        reverseOrder={false} />
                </div>


            </div>

        </>
    )
}
export default Form;