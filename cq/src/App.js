import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Home/Header';
import Footer from './Home/Footer';

import Feed from './Home/facebook';
import Accueil from './Home/Accueil'
// import CountDown from './Home/countdown';
function App() {
  return (
    <div>
      <div>
      <Header />
      {/* <CountDown /> */}
      </div>
      <div className="App container">

      <div className='row'>
        <div className='col-8'>
      <Accueil />
      </div>
      <div className='col feed'>
      <Feed />
      </div>
      </div>

      </div>
      <Footer />

      </div>
  );
}

export default App;
