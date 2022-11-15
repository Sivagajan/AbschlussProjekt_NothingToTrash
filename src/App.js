import "./App.css"
import Header from './components/header/Header'
import Main from './components/main/Main'
import PurpleBar from './components/purplebar/PurpleBar'
import Footer from './components/footer/Footer'

/* import { useState } from 'react' */

function App() {
  /* const [bg, setBg] = useState(false)
  console.log(bg) */

  return (
    <div className="App">
      <Header />
      <Main />
      <PurpleBar />
      <Footer />
    </div>
  );
}

export default App;
