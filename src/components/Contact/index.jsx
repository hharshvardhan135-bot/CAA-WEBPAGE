import './style.scss'

const Contact = () => {
    return (
        <>
            <section className='contactUs'>
                <div className="contactHead">
                    Contact Us
                </div>
                <div className="contactDetail">
                    <div className="phoneDetail">
                        <div className='phoneHead'>
                            Phone Number
                        </div> <br />
                        <span className="numberDetails">
                            +91 9876543210 / +01234567891
                        </span>
                    </div>
                    <div className="contactEmail">
                        <div className='emailHead'>
                            Email
                        </div> <br />
                        <span className="emailDetail">
                            contact@chandigarhartalive.com
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;