import axios from "axios";
import {useState,useEffect,useRef } from "react"
import Pro from "../Pro"



const Panier =(props)=>{
	let idPros=props.count,
			[total,setTotal]=useState(0);
	let [pro,setPro]=useState([]);
	const spanRefs=useRef([])
	spanRefs.current=[];
	
	useEffect(()=>{
		axios.get("https://fakestoreapi.com/products")
			.then(res=>{
				  let nlist = []
				  idPros.map(idPro=>{
					nlist.push(res.data.filter(item=>item.id === idPro))
					})
					setPro(nlist)
			});
	},[]);
	const addToRef=(el)=>{
		if(el && !spanRefs.current.includes(el))
		{
			spanRefs.current.push(el)
		}
		if (spanRefs.current.length !== 0){
			setTotal(spanRefs.current.reduce((acc,val)=>acc+Number(val.innerHTML),0))
		}
	}
	
	return(
		<div>
			<div>
				{pro.map(product=><Pro
					refS={addToRef}
					key={product[0].id}
					id={product[0].id}
					src={product[0].image}
					title={product[0].title}
					price={product[0].price}
					onclick={props.onclick}
				/>)}
			</div>
			<p>Total : {total}</p>
			<a href="/signup">Commander</a>
			<button onClick={props.onclickAnnuler}>Annuler</button>
		</div>
	)
}
export default Panier;