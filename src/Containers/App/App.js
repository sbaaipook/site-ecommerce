import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useEffect,useState} from "react"
import "./App.css";
import Slide from "../../Components/Slide"
import Product from "../../Components/Product"
import Header from "../../Components/Header"
import Home from "../Home"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import useLocalStorage from "../../Hooks/useLocalStorage"

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
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

const Panier =(props)=>{
	let idPs=props.count
	let [pro,setPro]=useState([]);
	useEffect(()=>{
		axios.get("https://fakestoreapi.com/products")
			.then(res=>{
				  let nlist = []
				  idPs.map(idP=>{
					nlist.push(res.data.filter(item=>item.id === idP))
					})
					setPro(nlist)
			});
	},[]);
	return(
		<div>
			{pro.map(product=><Pro
				key={product[0].id}
				id={product[0].id}
				src={product[0].image}
				title={product[0].title}
				price={product[0].price}
				onclick={props.onclick}
			/>)}
		</div>
	)
}

const Pro=(props)=>{
	let [count,setCount] = useState(1);
	
	return(
		<div className="list-items">
			<img src={props.src} alt="image" />
			<h4>{props.title}</h4>
			<span>{props.price * count}</span>
			<div>
				<button onClick={()=>setCount(count + 1)}>+</button>
				  <p>{count}</p>
				<button onClick={()=>setCount(count!==1?count - 1:1)}>-</button>
			</div>
			<input type="hidden" value={props.id}/>
			<button onClick={props.onclick}>del</button>
		</div>
	)
}

const Accueil =(props)=>{
	 
 const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBW4GsXkL25g57SL9iKcwksjrTUXNMI9ro"
  })

  
 let [content,setContent] = useState(null)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then((response) => {
        setContent(response.data);
      });
  }, []);
	return (
		<>
		<Container className="mt-3 mb-3">
        <Slide />
      </Container>
      <Container>
        <Row>
        {content !== null ?content.map(item=><Col key={item.id} >
          <Product
            onclick={props.onclick}
            inpVal={item.id}
            src={item.image} 
            text={item.description} 
            title={item.title} 
            price={item.price} 
            rate={item.rating.rate}
            count={item.rating.count}
           />
          </Col>): <h1>"No data found !"</h1>}
        </Row>
      </Container>
      <Container>
      {isLoaded ?
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>: "Loading..."}
  
      </Container>	
      </>
	)
}


