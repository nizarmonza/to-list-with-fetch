
import React from "react";
import { useState, useEffect } from "react";



//create your first component
const ToDos = () => {
	
	let base_url = 'https://assets.breatheco.de/apis/fake/todos/user/nizarmonza'

    const [toDo, setToDo] = useState([
		{"label": "Running", "done": false}
	]);

	const getAllToDos = ()=>{
        fetch(base_url)
					.then(resp => resp.json())
					.then(data => setToDo( data ))
					.catch(error => console.log("Error loading message from backend", error));
    }

	useEffect(() => {
        getAllToDos()
     }, []);
	
	const [isShown, setIsShown] = useState({
		state: false,
		index : 0
	})
	

	const list = toDo.map((item, i) => {
		return (
			<div className="repeating" key = {i}>
				<li>
					{item.label} 
				</li>
			</div>
		)
	})

	const removeList = index =>{
		const newArray = toDo.filter((item, i) => i != index);
		setToDo(newArray);

	};
	const update = e =>{
		if(e.keyCode == 13){
			let user = e.target.value;
			const result = [...toDo, user];
			setToDo(result);
			console.log("this is enter")
		}
	}



	return (
		<div className="toDo">
			<h1>ToDos</h1>
			<input 
				onKeyDown={update}
				type="text"
				placeholder="please write">
			</input>
			<ul>
				{list}
			</ul>

		</div>	
		
		
		
		);
};

export default ToDos;
