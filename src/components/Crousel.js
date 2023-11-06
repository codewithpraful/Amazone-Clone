import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
function crousel() {
  return (
    <div>
      
      <Carousel swipeable={true} autoPlay={true} showArrows={true}>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Jupiter23/Phase1/Homepage_DesktopHeroTemplate_3000x1200_22June2023-PS5_Phase_2._CB574722912_.jpg" />
                   
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Phase2/GW/Heroo/Homepage_DesktopHeroTemplate_3000x1200_Unrec._CB574643556_.jpg" />
                   
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase2/J23_P2_PC_NTA_Hero_2x._CB574841011_.jpg" />
                  
                </div>
            </Carousel>
    </div>
  )
}

export default crousel
