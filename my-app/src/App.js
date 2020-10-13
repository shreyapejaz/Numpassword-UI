import React, { Component } from 'react';
import './App.css';
import ResultComponent from './result';
import Badge from './badges';
import {Container,Button} from 'reactstrap';

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }

    state={
      value:false,
      pass:""
    }

    onClick = button => {
        
      if(button === "reset"){
        this.reset()
    }
    else  if(button === "submit"){
       this.submit()
       

      }
      else if(button === "check"){
       this.check()
      }

    else if(button === "backspace"){
        this.backspace()
    }
      else{
              
          this.setState({
                result: this.state.result + button
            })
        }
    };
    
    submit=()=>{
      this.setState({
        result:this.state.result,
        value:true,
        pass:this.state.result
      })
      this.reset()
    }

    check=()=>{
      this.setState({
        result:this.state.result
      })
      if(this.state.result === this.state.pass){
        alert("Password matches")
      }
        else{
          alert("Password doesn't match");
        }
        this.reset()
        this.setState({
          value:false
        })
      };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="appbody">  
            <Container>
                    <ResultComponent result={this.state.result}/>
                    <br/>
                    <Badge onClick={this.onClick} />
                    <Button outline color="primary" name="submit"  onClick={e => this.onClick(e.target.name)}>Submit</Button>
                    <Button  disabled={this.state.value} outline color="primary" name="reset" onClick={e => this.onClick(e.target.name)}>Reset</Button>
                    <Button disabled={this.state.value} outline color="primary" name="backspace" onClick={e => this.onClick(e.target.name)}>Backspace</Button>
                    <br/>
                    <Button disabled={!this.state.value} outline color="primary" name="check" onClick={e => this.onClick(e.target.name)}>Check</Button>
            </Container>    

            </div>
        );
    }
}

export default App;
