import React from "react";

class Boton extends React.Component {
    render(){
        return(
            <button className={this.props.claseBoton} onClick={this.props.manejarClick}>
                {this.props.texto}
            </button>
        );
    }
}

export { Boton }