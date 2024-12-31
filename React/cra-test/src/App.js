import logo from './logo.svg';
import './App.css';
import SmallImg from './smallImage.png'
import BigImg from './bigImage.jpg'


// import data from './data.json'

function App() {
  // console.log({data});

  function onClick() {
     //동적으로 데이터를 받아올 있도록 
     import('./data.json').then(({default:data}) =>{
        console.log({data});
     }); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={SmallImg} className="App-logo" alt="logo" />
        <img src={BigImg} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 보여주세요</button>
        <p>hello!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
