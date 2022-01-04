import React from 'react';
import react, { Component } from 'react';

class Counter extends Component {
    // state is a property object that contains data that this component needs
    state = {
        count: 0,
        tags: ['tag1', 'tags2', 'tags3']
    };

    renderTags() {
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        } else {
            return ( <ul>
                        { this.state.tags.map(tag => <li key={ tag } >{ tag }</li>) }
                    </ul>
            )
        }
    }

    render() {
        // this is a jsx syntax
        // jsx expression must have only one element
        // attributes for class are different in jsx. They are called className
        return (
        <div>
            { this.state.tags.length === 0 && "please create a new tag!" }
            { this.renderTags() }
        </div>
        );
    }
}

export default Counter;