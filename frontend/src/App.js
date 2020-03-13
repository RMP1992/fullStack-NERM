import React, { Component } from 'react';
import Catfacts from './components/Catfacts';
import Nasa from './components/Nasa';
import Quotes from './components/Quotes';
import Music from './components/Music';
import Manga from './components/Manga';
import Login from './components/Login';

import './App.css';

export class App extends Component {
  constructor (){
    super();
    this.state = {
      apiCatfacts: "",
      apiNasa: "",
      apiQuotes: "",
      apiMusic: "",
      apiManga: "",
      showCatfacts: false,
      showNasa: false,
      showQuotes: false,
      showMusic: false,
      showManga: false,
    } 
  }

showCatfacts = () =>{
  const doesShow = this.state.showCatfacts;
  this.setState({showCatfacts: !doesShow})
}
callCatfacts = () => {
  fetch("http://localhost:3002/catfacts")
  .then(res => res.text())
  .then(res => this.setState({apiCatfacts: res}));
}
toggleCatfacts = () =>{
  this.showCatfacts()
  this.callCatfacts()
}

toggleNasa = () =>{
  const doesShow = this.state.showNasa;
  this.setState({showNasa: !doesShow})
}
toggleQuotes = () =>{
  const doesShow = this.state.showQuotes;
  this.setState({showQuotes: !doesShow})
}
toggleMusic = () =>{
  const doesShow = this.state.showMusic;
  this.setState({showMusic: !doesShow})
}
toggleManga = () =>{
  const doesShow = this.state.showManga;
  this.setState({showManga: !doesShow})
}

callNasa = () =>{
  fetch("http://localhost:3002/nasa")
    .then(res => res.text())
    .then(res => this.setState({apiNasa: res}))
}
callQuotes = () =>{
  fetch("http://localhost:3002/quotes")
    .then(res => res.text())
    .then(res => this.setState({apiQuotes: res}))
}
callMusic = () =>{
  fetch("http://localhost:3002/music")
    .then(res => res.text())
    .then(res => this.setState({apiMusic: res}))
}
callManga = () =>{
  fetch("http://localhost:3002/manga")
    .then(res => res.text())
    .then(res => this.setState({apiManga: res}))
    
}

componentDidMount() {
  this.callCatfacts();
  this.callNasa();
  this.callQuotes();
  this.callMusic();
  this.callManga();
  
}
  render() {
    return (
      <React.Fragment>
        <div id="btn-container">
          <Catfacts func={this.toggleCatfacts} Cat={this.state.apiCatfacts}/>
          <Nasa func={this.toggleNasa} Nasa={this.state.apiNasa}/>
          <Quotes func={this.toggleQuotes} Quotes={this.state.apiQuotes}/>
          <Music func={this.toggleMusic} Music={this.state.apiMusic}/>
          <Manga func={this.toggleManga} Manga={this.state.apiManga}/>
          <Login />
          
        </div>
        {/* {this.state.showCatfacts === true ?
          <div>
            <p>{this.state.apiCatfacts}</p>
          </div> : null
        } 
        {this.state.showNasa === true ?
          <div>
            <img src={this.state.apiNasa} alt="nasa" />
          </div> : null
        } */}
        {this.state.showQuotes === true ?
          <div>
            <p>{this.state.apiQuotes}</p>
          </div> : null
        }
        {this.state.showMusic === true ?
        <div>
          <p>{this.state.apiMusic}</p>
        </div> : null
        }
        {/* {this.state.showManga === true ?
        <div>
          <p>{this.state.apiManga}</p>
        </div> : null
        } */}
      </React.Fragment>
    )
  }
}

export default App

