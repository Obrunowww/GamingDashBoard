import { FaDiceD20 } from "react-icons/fa"
import { RiHomeLine } from "react-icons/ri"
import { MdPeopleOutline } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { BsHandbag } from "react-icons/bs"
import{ AiOutlineStar} from "react-icons/ai"
import{IoMdAdd} from "react-icons/io"

function HeaderSection() {

    return (
        <section >


            <div className="d20">
                <FaDiceD20 />

            </div>

            <nav>
                <ul>
                    <li>
                        <RiHomeLine />
                    </li>
                    <li>
                        <MdPeopleOutline />
                    </li>
                    <li>
                        <HiOutlineMail />

                    </li>
                    <li>
                        <BsHandbag />

                    </li>
                    <li>
                        <AiOutlineStar/>
                    </li>
                </ul>
            </nav>

            <div className="d30">

                <section>
                 <IoMdAdd/>
                </section>

            </div>

        </section>

    )
}

export default HeaderSection