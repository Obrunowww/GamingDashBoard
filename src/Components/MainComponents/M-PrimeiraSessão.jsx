import { SiEpicgames } from "react-icons/si"
import { BsSteam } from "react-icons/bs"
import { AiFillLike } from "react-icons/ai"
import { AiOutlineFire } from "react-icons/ai"
import { JogoPopular, Plataformas, InfosJogoPopular } from "../styledComponents/main/SessãoPrincipalMain"
import SpaceMarineImg from "/images/main/SpaceMarine.png"
import SegundaSessãoPrincipal from "./M-SegundaSessão"





function PrimeiraSessãoPrincipal() {

    return (
        <section className="primeiraSessãoPrincipal">

            <JogoPopular>
                <div className="jogoPopularBackgound">
                    <InfosJogoPopular>
                        <Plataformas>
                            <div className="Popular">
                                <div className="fogo">
                                    <AiOutlineFire />
                                </div>
                                <p>Popular</p>
                            </div>
                            <button><BsSteam /></button>
                            <button> <SiEpicgames /> </button>
                        </Plataformas>
                        <div className="infos">
                            <h1>Space Marine</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Commodi rerum autem ducim
                                consectetur praesentium sequi, sit accusanti</p>

                        </div>
                        <div className="reviews">
                            <div className="amigos">
                                <figure>
                                    <img src="https://s3-alpha-sig.figma.com/img/0715/ef89/ce606ec0ad03260b2ec3e883ec37d6b5?Expires=1697414400&Signature=ipkTiax8q5ZoxdsxLJMx-anQkSqf-F8YOe2W-HsMDhz25~EvM-Sn7AV1wbR-w-Dv88JOVRKcXoww7WhnAL8jiO65-zZEEuOSAsn3QOoKaXYkOyOwnEiRZ6BEz~s5GA~lz8CfydOFKJJFrhn8TakNinLEyU3DIOP-KTTZ4t4rxw~afPp~bkt1T~09HEJ2Lj7tkm5hvazELuGdW4u2Uk98-OBVmjJMcs6PgDuuOixA2oTlyakVQcUsFhFm8p-9-CrePDRJLayKdb2JEpMClDC8PyuCUb~CB4vSWGh0eLgkCs86baXCn4Y5jdD6vmFfDKLHwYZoEtZlv~QxL~6vQnYgIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="Amigo" />
                                    <img src="htt             ps://s3-alpha-sig.figma.com/img/7ef9/0848/acc4ed87f184f308228982dd4408d95c?Expires=1697414400&Signature=bik7vEh0WIoYT3sVQOi7n6SoNVvgM5qcoB2hfInoEoZWsS3nFL0ItxxCtEVVLEWSMRqzk5hmWnMMqFBC6SPh~WjHcJbyWa53BHdHE6YiRhaXSsH5owW-kApqdkk8gkwkY9DMY0yFfm4azYNABaF5wfr7JTcxp6vNILjUc~tuVgcWEzTyCzYy6T9lJAkt29HSSAlMNGQz2W14PLGV0VJcPovhq504-LRLsKe~btEjKgCKazJQRvi9KEz0okCDnNfUXzj-7fpO-hsmVYyYvwh8pvhSa1-8qVE73b0NVJ05n3GcP-6AffDH-XhpLbm2PXwTYpX3IV8uBqrLt6OSs0i-xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="Amigo" />
                                    <img src="https://s3-alpha-sig.figma.com/img/9015/0ba8/0b16a87568e6849c5cc049d9bb29fbb6?Expires=1697414400&Signature=WknZ9LVKRVf12Xibv4wyUrMMti7-IfNApNokzRYJrKz823q-OgDUdhX0Cz1PTYQ9DRMYh2pm-JE5i~XAGjcGiHanBc9HJdaKOpVRrev6osOjwjQZrE4FSUCIb-CIDyWs8lsySJzsDAPxWMh-ZIKJfUHUJBjZ04-gpRhnVLvXnUdAQ1Iby8ONVbxIWRY7gJ5YUNR3QSYb02SXBgmumRP3NbeHtF5zazf9od~QKP4izHiABOHgie~qWnNsIKACxhgBrU9kEooQLYnNwietO9kA3rOXcLDLtTUJsWZ1DZEjLOsLfSZ3Juiatur1-CkeLc8jnRwzWIzZmrg1qDSUKppY1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="" />
                                </figure>
                                <button className="review">
                                    <AiFillLike />
                                    <div>+ 98 Reviews</div>
                                </button>
                            </div>
                        </div>
                    </InfosJogoPopular>
                    <figure className="ImagemSpaceMarine">
                        <img src={SpaceMarineImg} alt="" />
                    </figure>
                </div>
            </JogoPopular>
            <SegundaSessãoPrincipal/>

        </section>
    )
}

export default PrimeiraSessãoPrincipal