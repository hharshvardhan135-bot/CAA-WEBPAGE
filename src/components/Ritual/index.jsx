import './style.scss';
import { ritual } from './constant.js'

const Ritual = () => {
    return (
        <>
            <section className='rituals'>
                <div className="headingRitual">
                    City Rituals
                </div >

                <div className="ritualContainer">
                    {ritual?.map((item, index) => {
                        return (
                            <div className="ritualConatiner" key={index}>
                                <div className='card'>
                                    <div className="cardUpper">
                                        <img src={item?.imgURL} alt="img" className='cardIMG' />

                                    </div>
                                    <div className="cardLower">
                                        <div className="cardLeft">
                                            <h2 className='cardHead'>{item?.fest}</h2>
                                            <p className='cardDesc'>{item?.venue}</p>
                                        </div>
                                        <div className="cardRight">
                                            <span className='cardMonth'>{item?.month}</span>
                                            <span className='cardDate'>{item?.date}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                    })}

                </div>



            </section>

        </>
    )
}
export default Ritual;