import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Garage from './Garage';
import HelloBtn from './HelloBtn';
import HelloBtn2 from './HelloBtn2';
import AddCount from './AddCount';
import Color from './Color';
import CourseList from './CourseList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello title="oss~" />
        <p style={{backgroundColor : 'lightblue' , color : 'black'}}> useState 실습(2/3), useState 실습(3/3)</p>
        <p style={{backgroundColor : 'lightblue' , color : 'black'}}> CourseList 만들기</p> 
        <CourseList />
        <br />
        <Garage />
        <HelloBtn />
        <HelloBtn2 />
        <AddCount />
        <Color />
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
        <br />
      </header>
    </div>
  );
}

export default App;
