import React,{Component} from 'react';

class LogicalComponent extends Component{
    constructor(props){
        super(props);
        this.logicalOpr = ['log','^','√']
        
    }

    render(){
        return(
            <div className="logical-bar">
            {this.logicalOpr.map((item,index) =>{
              return(
                  <button key={index} className='button'onClick={this.props.onButtonClick} value={item}>{item}</button>
              );
            }
            )}
         </div>
        );
       
    }
}
export default LogicalComponent;