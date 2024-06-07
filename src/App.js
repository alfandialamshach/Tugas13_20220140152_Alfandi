import logo from './logo.city.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-logo-top-left" alt="logo" />
        <img src={logo} className="App-logo App-logo-top-right" alt="logo" />
        <img src={logo} className="App-logo App-logo-bottom-left" alt="logo" />
        <img src={logo} className="App-logo App-logo-bottom-right" alt="logo" />
        <div className="App-border">
          <p>
            WELCOME TO REACT APP
          </p>
          <p>
            With over 400 branches worldwide,
            fans can proudly come together and share unforgettable City moments whilst cheering on the Club
            they love from wherever they are based. Our global network of branches stretches from Chadderton to Chicago,with 34 
            new branches being welcomed into the Official Supporters Club Family during last season including Berlin, Lahore, and Jakarta.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
