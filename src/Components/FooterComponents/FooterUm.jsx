import { MdPeopleOutline } from "react-icons/md"
import { useState } from "react"
import amigo1 from "/images/footer/amigo1.png"
import amigo2 from "/images/footer/amigo2.png"
import amigo3 from "/images/footer/amigo3.png"
import amigo4 from "/images/footer/amigo4.png"
import amigo5 from "/images/footer/amigo5.png"
import amigo6 from "/images/footer/amigo6.png"
import amigo7 from "/images/footer/amigo7.png"
import amigo8 from "/images/footer/amigo8.png"
import styled from "styled-components"


const CirculoOnline = styled.div`
width: 15px;
height: 15px;
background-color: #00FF38;
border-radius: 100%;
`
const CirculoOffline = styled.div`
width: 15px;
height: 15px;
background-color: #A5BAA9;
border-radius: 100%;

`
const AmigosContainer = styled.div`
width: 80%;
height: 10%;
position: relative;
figure{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height:80%;
    width:100%;

}
figure div{
    z-index: 1;
    position: absolute;
    width: 55%;
    height: 100%;
    border-radius: 100%;
    background-color: white;
}
img{
    object-fit: cover;
    z-index: 2;
    width:60%;
    height:100%;
    flex: none;
}

.on{
    z-index: 3;
    border: solid 2px #00453F ;
    position:absolute;
    top: 0;
    right: 18%;
    
}



`

function FooterUm() {
    const [amigos, setAmigos] = useState([
        { imagem: amigo1, status: "online" },
        { imagem: amigo2, status: "online" },
        { imagem: amigo3, status: "off" },
        { imagem: amigo4, status: "off" },
        { imagem: amigo5, status: "off" },
        { imagem: amigo6, status: "off" },
        { imagem: amigo7, status: "off" },
        { imagem: amigo8, status: "off" },
    ])


    return (

        <section className="parteUmFooter">
            <figure>
                <img src="https://s3-alpha-sig.figma.com/img/0715/ef89/ce606ec0ad03260b2ec3e883ec37d6b5?Expires=1697414400&Signature=ipkTiax8q5ZoxdsxLJMx-anQkSqf-F8YOe2W-HsMDhz25~EvM-Sn7AV1wbR-w-Dv88JOVRKcXoww7WhnAL8jiO65-zZEEuOSAsn3QOoKaXYkOyOwnEiRZ6BEz~s5GA~lz8CfydOFKJJFrhn8TakNinLEyU3DIOP-KTTZ4t4rxw~afPp~bkt1T~09HEJ2Lj7tkm5hvazELuGdW4u2Uk98-OBVmjJMcs6PgDuuOixA2oTlyakVQcUsFhFm8p-9-CrePDRJLayKdb2JEpMClDC8PyuCUb~CB4vSWGh0eLgkCs86baXCn4Y5jdD6vmFfDKLHwYZoEtZlv~QxL~6vQnYgIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="um" />
            </figure>

            <div>
                <MdPeopleOutline />
            </div>

            {amigos.map((amigo) => (
                <AmigosContainer>
                    <figure>
                        <img src={amigo.imagem} alt="teste" />
                        <div></div>
                    </figure>

                    {amigo.status == "online" ? (<div>
                        online
                        <div className="ingame">in game</div>
                        <CirculoOnline className="on"></CirculoOnline>
                    </div>) : (<div><CirculoOffline className="on"></CirculoOffline></div>)}
                </AmigosContainer>))}


        </section>
    )
}

export default FooterUm