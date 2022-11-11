import "./App.css"
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import PurpleBar from './components/purplebar/PurpleBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <PurpleBar />
    </div>
  );
}

export default App;
