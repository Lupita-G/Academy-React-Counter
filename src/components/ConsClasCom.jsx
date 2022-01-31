import React from "react";
import FunComBotton from "./FunComBotton";

class ConsClassCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    //   handleClick = () => alert('You have clicked');
        handleClick = () => {
            this.setState({
                contador: this.state.contador + 1
            })
        }
        

    render () {
        return (
            <div className="margen">
                {this.state.contador}

                <FunComBotton texto={this.state.contador} handleClick={this.handleClick}
                />

            </div>
        )
    }
}

export default ConsClassCom; 