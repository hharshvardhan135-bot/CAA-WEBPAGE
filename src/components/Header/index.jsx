import './style.scss';
import logo from '../../assets/png//headLogo.png'
import menu from '../../assets/svg/menu.svg'
import cross from '../../assets/svg/cross.svg'
import { useEffect, useState } from 'react';
import { headerFetch } from './api';




const Header = () => {
    const [headerData , setheaderData] = useState([]);

    const[open,setOpen] = useState(false);
    
    const click =()=>{
        setOpen(!open);
        
    }

    useEffect(()=>{
        const fetchHeader = async ()=>{
            try{
                const data = await headerFetch();
                setheaderData(data.response)
            }catch(error){
                console.error("error occured");
            }
        }
        fetchHeader();
    },[]);
    

    return (
        <>
        <div className="pageHead">
            <div className='header'>
                <div className="leftLogo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className={`right ${open?'nav-open':''}` }>
                    {headerData.map(({ id , name })=>(
                        <a href="#" key={id}>{name}</a>
                        
                    ))}




                    {/* <a href="/" className='aHeader'>Our Model</a>
                    <a href="/" className='aHeader'>Impact</a>
                    <a href="/" className='aHeader'>Join Us</a>
                    <a href="/" className='aHeader'>Contact Us</a> */}
                </div>
                <button className="menuBtn" onClick={click} >
                   {!open ? <img src={menu} alt="" className='menu' />:
                    <img src={cross} alt="" className='cross' />}
                </button>
            </div>
            
        </div>
       
            
        

        </>
    )
}

export default Header;