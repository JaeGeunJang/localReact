import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function Head(props) {
	return <header>
	<h1><a href="index.html" 
	onClick={event=>{event.preventDefault();	props.onSelect();}}>
	WEB</a></h1>
	</header>
}

function Nav(props) {
	return <nav>
		<ol>
		{props.data.map(el=><li key={el.id}><a href={"/index/"+el.id} 
		onClick={event=>{event.preventDefault(); props.onSelect();}}>
		{el.title}</a></li>)}
		</ol>
		</nav>
}

function Body(props){
	return <article>
		<p>
		<h1>{props.name}</h1>
		{props.readme}
		</p>
		</article>
}

function App() {
	const topics = [
		{id : 1, title : "html", body : "HTML is..."},
		{id : 2, title : "CSS", body : "CSS is..."},
		{id : 3, title : "JavaScript", body : "Java Script is "}
	]

	const [mode, setMode] = useState("Hello");
	let content = null;

	if (mode === "Hello") content = <Body name = "JG" readme="Hello, JG!"></Body>
	else if (mode === "Who") content = <Body name = "Who" readme="Who are you?"></Body>

  	return (
    	<div className="App">
			<Head onSelect={()=>setMode("Hello")}></Head>
			<Nav data={topics} onSelect={()=>setMode("Who")}></Nav>
    		{content}
		</div>
	);
}

export default App;
