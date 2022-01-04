import React from 'react';
import react, { Component } from 'react';

class Counter extends Component {
    //update hook
    //this method is called after and update has been made on the component
    //means we have new states and new props compared to the old states and old props
    //and if there is a change then we can make a ajax request to a server
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevStates', prevState)
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    //this method will be called just before the component is deleted or removed from the DOM
    //this is usefull for clean up before a component is removed from the DOM
    //can be usefull for stoping memory leaks when a component is removed from the DOM
    componentWillUnmount(){
        console.log('COunter - Unmount')
    }

    render() {
        console.log('counter - Rendered')
        // this is a jsx syntax
        // jsx expression must have only one element
        // attributes for class are different in jsx. They are called className
        return (
        <div>
            <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.counter.id) }className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
    getBadgeClasses(){
            let classes = "badge m-2 badge-";
            classes += this.props.counter.value === 0 ? 'warning' : "primary";
            return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;