import logo from './logo.svg';
import './App.css';

function Header(){
	return <header>
	<h1><a href="/index.html">FunctionWeb</a></h1>
	</header>
}

function Navi() {
	return <nav>
	<ol>
		<li><a href="/read/1.html">html</a></li>
		<li><a href="/read/2.html">CSS</a></li>
		<li><a href="/read/3.html">JavaScript</a></li>
	</ol>
	</nav>
}

function Arti(){
	return <article>
		<h2>Welcome</h2>
		Hello, Web!
	</article>
}

function App() {
  return (
    <div className="App">
	
	<Header></Header>
	<Navi></Navi>
	<Arti></Arti>

	</div>
  );
}

export default App;
