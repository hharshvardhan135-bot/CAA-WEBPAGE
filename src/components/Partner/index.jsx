import './style.scss'
import partner1 from '../../assets/png/partner1.png'
import partner2 from '../../assets/png/partner2.png'
import partner3 from '../../assets/png/partner3.png'
const Partner = ()=>{
     return(
        <>
        <section className='partnerSection'>
            <div className="partnerHead">
                Our Partners
            </div> 
            <div className="partnerLogo">
                <img src={partner1} alt="p1" className='partLogo'/>
                <img src={partner2} alt="p2" className='partLogo'/>
                <img src={partner3} alt="p3" className='partLogo' />
            </div>
        </section>
        </>
     )
}
export default Partner;