import SDG11 from '../../assets/png/SDG11.jpeg'
import SDG3 from '../../assets/png/SDG3.jpeg'
import SDG17 from '../../assets/png/SDG17.jpeg'
import SDG16 from '../../assets/png/SDG16.png'
import'./style.scss';
const Cards = ()=>{
  return(
    <>

     <div className="card-container">
          <div className="cardAlignment">
            <span className="sdg11">
                  <img src={SDG11}alt="SDG11"/> <hr className='hr11' /><br />
                   <h2 className='sdgText' >Shared City Life</h2>
            </span>
           
            <span className="sdg3">
                <img src={SDG3} alt="sdg3"  /><hr className='hr3' /><br />
                <h2 className='sdgText'>Heal Through Connection </h2>
            </span>
            <span className="sdg17">
                <img src={SDG17} alt="sdg17" /><hr  className='hr17'/><br />
                <h2 className='sdgText'>Community Collabration</h2>
            </span>
            <span className="sdg16">
                <img src={SDG16} alt="sdg16"/><hr className='hr16' /><br />
                <h2 className='sdgText'>Collective Voice</h2>
            </span>
              
          </div>
     </div>
    </>
  )
}
export default Cards;