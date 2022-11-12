import "./App.css";
import Header from "../../Components/Header"
import Home from "../Home"
import useLocalStorage from "../../Hooks/useLocalStorage"
import Accueil from "../../Components/Accueil"
import Panier from "../../Components/Panier"


const App =()=>{
	let [idProducts,setIdProducts] = useLocalStorage("idProducts",[])
 const handleAcheter=(e)=>{
    idProducts.indexOf(Number(e.target.previousElementSibling.value)) === -1?setIdProducts([...idProducts,(Number(e.target.previousElementSibling.value))]):console.log("already exist !")
 }
 
 const handleDel=(event)=>{
 	setIdProducts(idProducts.filter(idp=>idp !== Number(event.target.previousElementSibling.value)))
 	window.location.pathname="/panier"
 	event.preventDefault()
 }


  return(
    <Home>
      <Header count={idProducts.length} />
      {window.location.pathname === "/" && <Accueil onclick={handleAcheter} />}
      {window.location.pathname === "/panier" && <Panier count={idProducts} onclick={handleDel} /> }
    </Home>
  )
}
export default App;