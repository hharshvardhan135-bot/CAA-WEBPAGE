import bodyImage from '../../assets/png/bodyImg.png'
import './body.scss'
const Body = () => {
    return (
        <div className="heroMainBg">
            <div className='mainDiv'>
                <div className="overlayBg">


                </div>
                <img src={bodyImage} className='hero' id='imgHero' alt="body" />







                <div className='top' id='heroText'>Chandigarh</div>
                <div className='mid' id='heroText'>  Art Alive</div>
                <br />
                <div className='b1' id='heroText'>We’re exploring how the city shapes us, and we shape it </div>
                <br />
                <div className="b2" id='heroText'>in return. We are the artists of this canvas.</div>

                <button className='button' id='heroText'>Join Us</button>
            </div>

        </div>

    )
}
export default Body;