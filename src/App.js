import './App.css';
import Colors from './components/Colors/Colors';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Person from './components/Person/Person';


function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Colors></Colors>
      <Country></Country>
      <Person></Person>
    </div>
  );
}



export default App;
