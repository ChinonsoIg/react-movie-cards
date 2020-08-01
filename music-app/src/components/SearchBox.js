// import React, { Component } from 'react';

// class SearchBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange = (e) => {
//     e.preventDefault();
//     this.setState({value: e.target.value});
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     let userInput = this.state.value;
//     // this.props.onSearchBox(userInput); 
//     console.log(`You searched for the movie ${userInput}`);      
//   }

//   render() {
//     return (
//       <div className="search-container">
//         <form className="form-search" onSubmit={this.handleSubmit}>
//           <input 
//             type="text" 
//             value={this.state.value}
//             onChange={this.handleChange}
//             placeholder="Search Movie Title..."
//           />
//           <button>Search</button>
//         </form>
//         <h5>{this.userInput}</h5>
//       </div>
//     );
//   }
// }

// export default SearchBox;
















// // class Search extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       value: ''
// //     };
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //   handleChange(e) {
// //     this.setState({value: e.target.value});
// //   }
// //   handleSubmit(e) {
// //     e.preventDefault();
// //     console.log(`You searched for the movie ${this.state.value}`);
    
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <form className="form-search" onSubmit={this.handleSubmit}>
// //           <input 
// //             type="text" 
// //             value={this.state.value}
// //             onChange={this.handleChange}
// //           />        
// //           <button type="submit">
// //             <i className="fas fa-search"></i>
// //           </button>
// //         </form>
// //       </div>    
// //     );
// //   }
// // }


// // export default Search;

