import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineShopping} from "react-icons/ai"
import { BotõesDaMainHeader } from "../styledComponents/main/headerMain"

function BottõesMainHeader() {
    return(
    <BotõesDaMainHeader>

        <button >
            <IoIosNotificationsOutline className="imagemBotão" />
        </button>
        <button>
            <AiOutlineShopping className="imagemBotão"/>
        </button>

    </BotõesDaMainHeader>)
}
export default BottõesMainHeader