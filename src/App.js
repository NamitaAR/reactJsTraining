import React from "react";
import logo from "./logo.svg";
import ResultComponent from "./result.component";
import LogicalComponent from "./logical.components";
import ButtonBarComponent from "./buttonbar.component";
import OperatorsComponent from "./operatores.component";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

import "./App.css";
import {BrowserRouter as Route, Router , Switch , Link, BrowserRouter} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        params:""
    };
    this.result =0;
    this.params="";
  }

  // onButtonClickParent = (value) =>{
  //     this.params = this.params + value;
  //     let inputData = this.state.params + value;
  //     this.setState({params:inputData});      
  // }

  // calculateResult = () => {  
  //   let params = parseInt(this.params);
  //   switch (this.operator) {
  //     case "+":
  //       this.result = this.result + params;
  //       this.setState({ result: this.result });
  //       break;
  //     case "-":
  //       this.result = this.result - params;
  //       this.setState({ result: this.result });
  //       break;
  //     case "/":
  //       this.result = this.result / params;
  //       this.setState({ result: this.result });
  //       break;
  //     case "*":
  //       this.result = this.result * params;
  //       this.setState({ result: this.result });
  //       break;  
  //     case '^' :
  //       // debugger;
  //       this.result=this.params!=="" ? this.result=Math.pow(this.result,this.params):this.result;
  //       // this.setState({result:this.result})
  //       this.setState({result:this.result,params:this.result+this.operator+this.params});      
  //     default:
        
  //       break;

  //   }
  //   // console.log(this.result)
  //   this.params = "";
  // };

  // onOperatorClick=(op)=>{
  //   //  ;
  //   console.log(op);
  //   this.operator=op.target.value;
  //   switch(op.target.value){
  //     case '+':
  //       this.result=this.params!=="" ? this.result+parseInt(this.params):this.result;
  //       // this.setState({result:this.result});
  //       break;
  //     case '-':
  //       // let parameter = parseInt(this.params);
  //       // this.flag= false;
  //       // this.result===0 ?this.result = parseInt(this.params) : this.flag = true;  
  //       // this.params = this.flag===true ? this.params : "";
  //       // this.result=parameter > this.result ?parameter -this.result : this.result-parameter; 
  //       this.result=this.params!=="" ? this.result- parseInt(this.params):this.result;
  //       // this.setState({result:this.result});
  //       break;
  //     case '*':
  //       this.result=this.params!=="" ? this.result * parseInt(this.params):this.result;
  //       // this.setState({result:this.result});
  //       break;
  //     case '/':
  //       this.result=this.params!=="" ? this.result / parseInt(this.params):this.result;
  //       break;
  //     case '^' :
  //       // debugger;
  //       this.result=this.params!=="" ? this.result=Math.pow(this.result,parseInt(this.params)):this.result;
  //       // this.setState({result:this.result})
  //       // this.setState({params:this.result+this.operator});  
       
  //     default:  
  //       break;
        
  //   }
  //   this.setState({params:this.result+op.target.value});
  //   this.params=""
  //   // this.setState({result:this.result});
  //   // console.log(this.state.result)

  // }

  // onClear=()=>{
  //   this.setState({params:"",
  //   result:0});
  //   this.operator="";
  //   this.params="";
  //   this.result=0;
  // }
  
  // onLogicalOperatorClick=(op)=>{
  //   this.operator = op.target.value;
  //   console.log(this.params);
  //   switch(this.operator){
  //     case 'log' :
  //       // debugger;
  //       this.result=this.params!=="" ? Math.log(10) / Math.log(this.params): Math.log(10) / Math.log(this.result);
  //       this.setState({result:this.result, params:this.result});
  //       break;
  //     case '^' :
  //       // debugger;
  //       if(this.result!==0){
  //         this.result=this.params!=="" ? this.result=Math.pow(this.result,parseInt(this.params)):this.result;
  //       }
  //       else{this.result=this.params;}
  //       // this.setState({result:this.result})
  //       this.setState({params:this.result+this.operator});
  //       break;  
  //     default:
  //       break;  
  //   }
  //   this.params="";

  // }
  // Math.pow(base, exponent)
  render() {
  
      return (
      
      // <div className="row w-100 h-100">
      //   <div className="col-md-12 h-100 calculator">
      //     <div className="container">
      //       <div className="row h-100">
      //           <ResultComponent result = {this.state.result} params ={this.state.params}/>
      //           <LogicalComponent onButtonClick={this.onLogicalOperatorClick}/>
      //           <ButtonBarComponent onButtonClick = {this.onButtonClickParent} onClear={this.onClear}/>
      //           <OperatorsComponent onButtonClick={this.onOperatorClick} calculateResult={this.calculateResult}/>
      //       </div>
      //     </div>
      //   </div>
      // </div>
     <Router> 
      <div>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        </ul>  
      </div> 
      <Switch>
         <Route exact path = '/' component = {Home} />
         <Route path = '/about' component = {About} />
         <Route path = '/contact' component = {Contact} />
      </Switch>
    </Router>
      );
    }
  
}
export default App;
