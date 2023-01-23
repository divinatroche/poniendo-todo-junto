import React from 'react';

class PersonCard extends React.Component{
    constructor (props) {
        super(props);
        //this.age = props;
        this.state = {age: props.age}
    }

    render(){
        //const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.age}</p>
                {this.props.children}
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.setState({age:this.state.age + 1})}>Feliz Cumple!</button>
            </div>
        )
    }
}

export default PersonCard;