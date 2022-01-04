import React from 'react';
import react, { Component } from 'react';

class Counter extends Component {
    // state is a property object that contains data that this component needs
    state = {
        count: 0,
    }
    
    handleIncrement = product => {
        this.setState({ count: this.state.count + 1 })
    };


    render() {
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
            classes += this.state.count === 0 ? 'warning' : "primary";
            return classes;
    }

    formatCount() {
        const { count } = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;