
import {useState} from "react"
import useLocalStorage from "../../Hooks/useLocalStorage"

const Pro=(props)=>{
	let [count , setCount] = useState(1)
	return(
		<div className="list-items">
			<img src={props.src} alt="something" />
			<h4>{props.title}</h4>
			<span ref={props.refS} className="prix">{props.price * count}</span>
			<div>
				<button onClick={_=>setCount(count + 1)}>+</button>
				  <p>{count}</p>
				<button onClick={_=>setCount(count!==1?count - 1:1)}>-</button>
			</div>
			<input type="hidden" value={props.id}/>
			<button onClick={props.onclick}>del</button>
		</div>
	)
}
export default Pro;