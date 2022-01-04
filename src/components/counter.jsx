import React from 'react';
import react, { Component } from 'react';

class Counter extends Component {
    // state is a property object that contains data that this component needs
    state = {
        value: this.props.value
    }
    
    handleIncrement = product => {
        this.setState({ value: this.state.value + 1 })
    };


    render() {
        console.log('props', this.props)
        // this is a jsx syntax
        // jsx expression must have only one element
        // attributes for class are different in jsx. They are called className
        return (
        <div>
            <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button onClick={ () => this.handleIncrement({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
    getBadgeClasses(){
            let classes = "badge m-2 badge-";
            classes += this.state.value === 0 ? 'warning' : "primary";
            return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }
}

export default Counter;