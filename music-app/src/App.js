import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import SearchBox from './components/SearchBox';
import FetchMovie from './components/FetchMovie';
import Footer from './components/Footer';

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
	render() {
  	return (
    	<>
        <NavBar />
    	  <FetchMovie />
				{/* <Footer /> */}
    	</>
    );
  }	
}
// function App(props) {
//   return (
//     <>
//       <NavBar />,      
//       <FetchMovie />
//     </>
//   );
// }

export default App;
