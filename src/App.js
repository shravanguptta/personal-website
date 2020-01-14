import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      data: {}
    };
  }

  getData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main}/>
        <About data={this.state.data.main}/>
        <Projects data={this.state.data.portfolio}/>
        <Resume data={this.state.data.resume}/>
        <Footer data={this.state.data.main}/>         
      </div>
    );
  }
}

export default App;