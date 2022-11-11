import "./App.css"
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import PurpleBar from './components/purplebar/PurpleBar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <PurpleBar />
      <Footer />
    </div>
  );
}

export default App;
