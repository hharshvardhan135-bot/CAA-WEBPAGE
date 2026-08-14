import './style.scss'
import { faq } from './api.js';
import { useEffect, useState } from 'react';



const Faq = () => {

    const [accordion, setAccordion] = useState([]);
    const [ activeId , setActiveId ] = useState(null);


    const handleToggle = (id)=>{
        setActiveId(activeId===id ? null : id );
    }

    useEffect(() => {
        const accFetch = async () => {
            try {
                const data = await faq();
                setAccordion(data.response)
            } catch {
                console.error(error)
            }
        }
        accFetch()
    }, []);
    console.log(open);

    return (
        <>
            <div className="faqSection">
                <h2 className="faqHead">FAQ</h2>
                <div className="faqContainer">
                    <div className="accordion">
                        {accordion.map(({ question, answer, id }
                        ) => { const isOpen = activeId === id;
                            return (
                                <div key={id} className='accContainer'>
                                    <div className="accQuestion">
                                        <p> {question}</p>
                                        <button className='displayAnswer' onClick={()=>handleToggle(id)}> {activeId? "close": "show"} </button>

                                    </div>
                                    <div className= {`accAnswer ${isOpen?'answerOpen' : ''}`} >
                                        <p>{answer}</p>
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                   


                    <button className='viewMore'>View More FAQs</button>
                </div>

            </div>
        </>
    )

}
export default Faq;