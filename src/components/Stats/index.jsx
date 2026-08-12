import { Fragment } from 'react';
import { data } from './constant.js'

import './style.scss';


const Impact = () => {

   return (

      <div className="container">


         {data?.map((item, index) => {
            return (
               <div className={'card-container '  } key={index }  >

                  <div className='heading'>
                     <span className='title'>{item?.title}</span>
                     <span className='subTitle'>{item?.subTitle}</span>
                  </div>
                  



                  <p className='descA'>{item?.stats}</p>
                  {/* <div className="vl"></div> */}
                
                  



               </div>
               // <hr className="vl" />

            )
         })}





      </div>
   )
}
export default Impact;
