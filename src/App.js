import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function Header(props) {
	return 	<header>
		<h1><a href = "/index.html" onClick={(event)=>{event.preventDefault(); props.onChangeMode();}}> 
		WEB</a></h1>
		</header>
}

function Nav(props) {
	return <nav>
	<ol>
	{props.data.map((el)=><li key = {el.id}><a href = {"/index/"+el.id} onClick={(event)=>{event.preventDefault(); props.onChangeMode(el.id);}}>{el.title}</a></li>)}
	</ol>
	</nav>
}

function Article(props) {
	return(
	<article>
	<h2>{props.title}</h2>
	{props.body}
	</article>)
}

function Create(props) {
	return (
		<article>
		<h2>Create</h2>
		<form onSubmit={(event)=>{
			event.preventDefault();
			const title = event.target.title.value;
			const body = event.target.body.value;
			props.onCreate(title, body);
		}}>
			<p><input type = "text" name="title" placeholder="title"></input></p>
			<p><textarea name = "body" placeholder="body"></textarea></p>
			<p><input type = "submit" value = "Create"></input></p>
		</form>
		</article>
	)
}

function Update(props){
	const [_title, setTitle] = useState(props.title);
	const [_body, setBody] = useState(props.body);

	return (
		<article>
		<h2>Update</h2>
		<form onSubmit={(event)=>{
			event.preventDefault();
			const title = event.target.title.value;
			const body = event.target.body.value;
			props.onUpdate(title, body);
		}}>
			<p><input type = "text" name="title" value = {_title} 
			onChange={(event)=>{setTitle(event.target.value)}}></input></p>

			<p><textarea name = "body" value = {_body} 
			onChange={(event)=>{setBody(event.target.value)}}></textarea></p>
			
			<p><input type = "submit" value = "Update"></input></p>
		</form>
		</article>
	)

}
function App() {
	const [topics, setTopics] = useState([
		{id : 1, title : "html", body : "html is ..."},
		{id : 2, title : "CSS", body : "CSS is ..."},
		{id : 3, title : "JavaScript", body : "JavaScript is ..."}
		])

	const [content, mode] = useState("WEB");
	const [_id, setID] = useState(null);

	let cont = null;
	let contextControl = null;

	if (content==="WEB") cont = <Article title = "Welcome" body = "My name is JG"></Article>
	else if (content == "CREATE") cont = <Create onCreate={(_title, _body)=>{
		const newTpic = {id : topics.length + 1, title : _title, body : _body}
		const newTopic = [...topics];
		newTopic.push(newTpic);
		setTopics(newTopic);
	}}></Create>

	else if (content==="READ"){
		for (let i = 0; i < topics.length; i++) {
			if(_id === topics[i].id) cont = <Article title = {topics[i].title} body = {topics[i].body}></Article>}
		
		contextControl = <li><a href={"/update/"+_id+".html"} onClick={(event)=>{
			event.preventDefault();
			mode("UPDATE");
		}}>Update</a></li>
	}
	
	else if (content === "UPDATE") {
		let _title = null;
		let _body = null;
		for (let i = 0; i < topics.length; i++){
			if (_id == topics[i].id) {
				_title = topics[i].title;
				_body = topics[i].body;
			}
		}
		cont = <Update title = {_title} body = {_body} onUpdate={(title, body)=>{
				const newUpdate = {id : _id, title : title, body : body};
				const newTopic = [...topics]
				for (let i = 0; i < topics.length; i++) {
					if (_id == topics[i].id) {newTopic[i] = newUpdate;}
				}
				setTopics(newTopic)
				mode("READ")
			}		
		}></Update>
	}

  	return (
    	<div className="App">
			<Header onChangeMode={()=>mode("WEB")}></Header>
			<Nav data={topics} onChangeMode={(_id)=>{mode("READ"); setID(_id);}}></Nav>
			{cont}
			
			<ul>
				<li><a href="/create.html" onClick={(event)=>{event.preventDefault(); mode("CREATE");}}>Create</a></li>
				{contextControl}
			</ul>
			
		</div>
	);
}

export default App;
