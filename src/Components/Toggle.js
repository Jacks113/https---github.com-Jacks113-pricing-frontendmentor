import { Component } from "react";

class Toggle extends Component{


    render(){

   

        return(
            <div className="toggleContainer">
                <span className="toggleText textLeft active-text">Monthly</span>
                <label className="switch">
                    <input type="checkbox" onChange={this.props.change}/>
                    <span className="slider round"></span>
                </label>
                <span className="toggleText textRight inactive-text">Annually</span>
            </div>

        )

        
    }
}

export default Toggle;