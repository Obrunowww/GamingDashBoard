
import InputCustomizado from "./MainComponents/HeaderInput"
import BottõesMainHeader from "./MainComponents/HeaderButtons"


function Main() {
  
    return (
     <main>
        <section className="mainHeader"> 
            <h2>Hi, nome</h2>
            <InputCustomizado/>
            <BottõesMainHeader/>
        </section>
        <section></section> 
        <section></section> 
        <section></section>
     </main>
    )
  }

  
  export default Main