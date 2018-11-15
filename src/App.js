import React, { Component } from 'react';
import axios from 'axios';

import InputField from './components/InputField';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: 'MeeOpp',
    }
  }

  componentDidMount() {
    this.getSearchResult(this.state.input)
  }


  changeSearchQ = (keyword) => {
    this.setState({
      input: keyword
    })
    this.getSearchResult(keyword)
  }


  getSearchResult = (keyword) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`).then(res => {
      const data = res.data.items
      this.setState({
        data: data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <InputField 
          input= {this.state.input}
          emit = {this.changeSearchQ}
          />

        { this.state.data !== undefined ? <List data= {this.state.data}/> : <div></div> }
      </div>
    );
  }
}

export default App;
