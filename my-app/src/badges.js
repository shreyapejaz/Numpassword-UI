import React,{Component} from 'react';
import {Button} from 'reactstrap';

class Badges extends Component{
    render(){
        return (
            <div className="button">
        
            <Button color="primary" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button >
            <Button color="primary" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button >
            <Button color="primary" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button >
           <br/>
            <Button color="primary" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button >
            <Button color="primary" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button >
            <Button color="primary" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button >
            <br/>
            <Button color="primary" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button >
            <Button color="primary" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button >
            <Button color="primary" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button >
           <br/>
            <Button color="primary" name="*" onClick={e => this.props.onClick(e.target.name)}>*</Button >
            <Button color="primary" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button >
            <Button color="primary" name="#" onClick={e => this.props.onClick(e.target.name)}>#</Button >
            <br/>
            <br/>
          
            
        </div>
        
      );
    }
    

    }
    
export default Badges;