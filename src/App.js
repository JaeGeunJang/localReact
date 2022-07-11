import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
	return <header>
	<h1><a href="/index.html" onClick={(event)=>{
	event.preventDefault();
	props.onSelect();}}>
	WEB</a></h1>
	</header>
}

function Navi(props) {
	return <nav>
	<ol>
		{props.data.map(el=><li key = {el.id}>
		<a href={"/read/"+el.id} 
		onClick={event=>{
		event.preventDefault();
		props.onSelect();
		}}>
		{el.title}
		</a></li>)}
	</ol>
	</nav>
}

function Arti(props){
	return <article>
		<h2>{props.title}</h2>
		{props.body}
	</article>
}

function App() {
	const topics = [
		{id : 1, title : "html", body : "HTML is..."},
		{id : 2, title : "CSS", body : "CSS is..."},
		{id : 3, title : "JavaScript", body : "Java Script is ..."}
	]
	
	const [mode, setMode] = useState("Read");
	let content = null;

	if (mode === "Read") content = <Arti title="READ" body="Hello READ"></Arti>
	else if (mode == "Welcome") content = <Arti title="HTML" body="Hello HTML"></Arti>


	return (
    <div>
		<Header onSelect={()=>setMode("Welcome")}></Header>
		<Navi data={topics}  onSelect={()=>setMode("Read")}></Navi>
		{content}

	</div>
	);
}

export default App;
