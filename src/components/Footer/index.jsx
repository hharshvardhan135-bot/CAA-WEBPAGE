import './style.scss'
import caaLogo from '../../assets/png/caaLogo.png'
import insta from '../../assets/png/instaLogo.png'
import ytLogo from '../../assets/png/ytLogo.png'
import wLogo from '../../assets/png/whatsappLogo.png'

const Footer = () => {
    return (
        <>
            <footer className='footerContainer'>
                <div className="footerMain">
                    <div className="footerLogo">
                        <img src={caaLogo} alt="logo" className='caaLogo' />
                    </div>
                    <div className="logoMark">
                        © 2026 · FORMAK
                    </div>
                </div>
                <div className="footerSocial">
                    <div className="footerUp">
                        <div className="vlOne"></div>
                        <nav className="fone">
                            
                            <div className="podcast">Podcast</div>
                            <div className="newsletter">Newsletter</div>
                        </nav>
                        <div className="vlTwo"></div>
                        <nav className="ftwo">
                            
                            <div className='join'>Join Us</div>
                            <div className="contact">Contact Us</div>
                            <div className="faq">FAQ</div>
                            <div className="about">About Us</div>

                        </nav>

                    </div>

                    <div className="socialMedia">
                        <img src={ytLogo} alt="YT" className='socialLogo' id='yt' />
                        <img src={insta} alt="" className='socialLogo'  />
                        <img src={wLogo} alt="" className='socialLogo' id='wsa'/>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer;