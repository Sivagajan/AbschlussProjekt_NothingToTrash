import "./App.css"
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import PurpleBar from './components/purplebar/PurpleBar'
import Footer from './components/footer/Footer'

function App() {
  const [bg, setBg] = useState(false)

  return (
    <div className="App">
      <Navbar />
      <Header setbg={setBg}/>
      <Main />
      <PurpleBar />
      <Footer />
    </div>
  );
}

export default App;
