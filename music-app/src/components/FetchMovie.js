import React, { Component } from 'react';
// import SearchBox from './SearchBox';

// React Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';

const axios = require('axios').default;


const ProfileList = (props) => (
	<Container>
    <Row className="flex-container">
  	  {props.profiles.map(profile => <Profile key={profile.id} {...profile}/>)}
    </Row>
  </Container>
);

class Profile extends React.Component {
	render() {
  	const profile = this.props;
  	return (
      
      <Card className="flex-item">
        <Card.Img variant="top" src={profile.Poster} />
        <Card.Body>
          <Card.Title><b>Title:</b> {profile.Title}</Card.Title>
          <Card.Text className="company"><b>Year:</b> {profile.Year}</Card.Text>
          <Card.Text><b>Runtime:</b> {profile.Runtime}</Card.Text>
          <Card.Text><b>Actors:</b> {profile.Actors}</Card.Text>
          <Card.Text><b>Plot:</b> {profile.Plot}</Card.Text>
          <Button className="footer-button" variant="primary" size="lg" block>Add to favourites
          </Button>
        </Card.Body>
      </Card>
      
    );
  }
}

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dfbcc791&t=${this.state.userName}`);
      this.props.onSubmit(response.data);
      this.setState({ userName: '' });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Movie title" 
          required 
        />
        <button>Search</button>
    	</form>
    );
  }
}

class FetchMovie extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        {console.log('Profile: ',this.state.profiles)}
        <ProfileList profiles={this.state.profiles} />
    	</div>
    );
  }
}

export default FetchMovie;





// class FetchMovie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoad: false,
//       data: [],
//       userInput: ''
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }
//   fetchData = () => {
//     fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=dfbcc791&t=${this.state.userInput}`)
//       .then(res =>  res.json())
//       .then(
//         (movies) => { 
//           this.setState({
//             isLoad: false,
//             data: movies
//           });
//         },
//         (error) => { 
//           this.setState({
//             isLoad: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoad, data } = this.state;
//     if (error) {
//       return (
//         <div>Error: {console.log(error.message)}</div>
//       );
//     } else if (isLoad) {
//       return (
//       <div>{console.log('Loading. . . . .')}</div>
//       );
//     } else {
//       return (
//         <div className="display">
//           {/* <SearchBox value={this.handleChange} /> */}
//           <SearchBox value={this.handleSubmit} />
//           <div className="column1">
//             <img src={data.Poster} alt="Movie"></img>
//           </div>
//           <div className="column2">
//             <h1> Title: {data.Title}</h1>
//             <h4>Actors: {data.Actors}</h4>
//             <h4>Year: {data.Year}</h4>
//             <h4>Runtime: {data.Runtime}</h4>
//             <h4>Rated: {data.Rated}</h4>
//             <p>Plot: {data.Plot}</p>
//           </div>
//           <div>{console.log(data.Title +' '+ data.Actors)}</div>
//         </div>
        
//       );
//     }    
//   }
// }

// export default FetchMovie;

