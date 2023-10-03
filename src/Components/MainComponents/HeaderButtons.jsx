import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineShopping} from "react-icons/ai"
function BottõesMainHeader() {
    return(
    <section className="botõesDaHeader">

        <button >
            <IoIosNotificationsOutline className="imagemBotão" />
        </button>
        <button>
            <AiOutlineShopping className="imagemBotão"/>
        </button>

    </section>)
}
export default BottõesMainHeader