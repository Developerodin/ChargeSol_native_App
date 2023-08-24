import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton} from '@ionic/react';
import Asset21 from "./Asset21.png";
import InfoSwipe from '../components/InfoSwipe';
const InfoPage1 = () => {
  return (
   
    <div >
      <div  style={{margin:"0px"}}>
          <div style={{marginTop:"50px",width:"100%",paddingLeft:"30px"}}>
            <p style={{marginTop:"20px",fontSize:"39px",LineHeight:"45px",textAlign:"left"}}>The Current <br/> eMobility market <span style={{color:"#FF4000"}}><br/>is highly fragmented</span></p>
          </div>



          <div style={{marginBottom:"10px",marginTop:"0px"}}>
            <img  style={{marginTop:"10px",minHeight:"100%"}} src={Asset21} alt='image'/>
          </div>

          <div style={{margin:"auto",fontWeight:'400',fontSize:'20px',lineHeight:'24px',letterSpacing:'0.3px',textAlign:"left",width:"330px"}}>
            <p>The EV market is extremely fragmented and challenging for consumers to navigate 
              because it is made up of multiple Charge Point Operators each providing their own charging options, making it tedious for users.
              </p>
          </div>

               

          
     </div>
      
         

    </div>
   
    
  )
}

export default InfoPage1
