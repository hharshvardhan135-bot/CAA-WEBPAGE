import './style.scss'
import GIF from '../../assets/svg/gif.gif'
import { useEffect, useState } from 'react'
import { modelApi } from './api'
const Model = () => {

    const [model, setModel] = useState([]);



    useEffect(() => {
        const modelFetch = async () => {
            try{
                const data = await modelApi();
                
                setModel(data.response);
            }catch(error){
                console.error("error occured");
            }
        }
        modelFetch();
    }, []);


    return (
        <>
            <div className="model">
                <div className="gif">
                        <img src={model[0]?.imageUrl} alt="gif" className='gifImg' />


                </div>

                <div className="change">
                    <span className='theory' id='modelText'>{model[0]?.title} </span><br />
                    <div className="desc" id='modelText'>When people in Chandigarh are given space to share stories, create art, and be heard, they develop deeper ownership of place.</div>
                    <br />
                    <div className="desc2" id='modelText'>Shared expression builds connection → connection builds belonging → belonging sustains a living cultural memory.</div>


                </div>




            </div>


        </>
    )
}
export default Model;