import React from "react";
import {Component} from "react";

class ClassComponentProps extends Component {

    render() {
        return (
          <>
            <div>
                <h1>This is Cource One {this.props.CourceOne}</h1>
                <h1>This is Cource Two {this.props.CourceTwo}</h1>
            </div>
            <div>
               {this.props.children} 
            </div>
          </>
        );
    }
}
export default ClassComponentProps ;