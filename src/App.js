import './App.css';
import Weather  from './Weather';
function App() {
  return (
    <div className="App container">
 <Weather dafaultCity="Sydney" />




  <footer>
   Coded by {""}
   <a href='https://tender-hoover-502b0b.netlify.app/' target="_blank"  rel="noreferrer">Valeria Montisci</a> 
   {""} open-sourced on {""}
   <a href='https://github.com/Valeria-Montisci/react-weather-app' target="_blank>" rel="noreferrer">Github</a> 
  </footer>
    </div>
  );
}

export default App;
