import React from 'react';
import react, { Component } from 'react';

class Counter extends Component {
    // state is a property object that contains data that this component needs
    state = {
        count: 0,
        tags: ['tag1', 'tags2', 'tags3']
    };

    render() {
        // this is a jsx syntax
        // jsx expression must have only one element
        // attributes for class are different in jsx. They are called className
        return (
        <React.Fragment>
            <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                { this.state.tags.map(tag => <li key={ tag } >{ tag }</li>) }
            </ul>
        </React.Fragment>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;