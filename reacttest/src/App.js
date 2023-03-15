import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';
import TimerComponent from './timer';

function App() {

  //사용 예시1
  const text = "React 테스트 안녕하세요 ㅎㅎ";

  //사용 예시2
  const sayHello = function() {
    return <h3>React 테스트 하위 메뉴</h3>;
  }

  //사용 예시3
  const sayHello2 = function() {
      alert('안녕하세요');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{text}</h2>
        {sayHello()}
        <img src={logo} className="App-logo" alt="logo" />
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
      <TimerComponent />
      <ChildComponent name="홍길동" age={20} />
      <ChildComponent name="김두한" age={21}  />
      <ChildComponent name="시라소니" age={22}  />
      <div onClick={sayHello2}>클릭해주세요</div>
    </div>
  );
}

export default App;
