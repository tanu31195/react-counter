import React, {Component} from 'react';

//export default class Counter extends Component{
class Counter extends Component {
    state = {
      value: this.props.counter.value,
      tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = product => {
        this.setState({value: this.state.value + 1});
    };

    render() {
        console.log(this.props);

        return (
            <div>
                {/*Using dynamic classes*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleIncrement({id:1})}
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                {/*<ul>*/}
                {/*    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}*/}
                {/*</ul>*/}
                {this.state.tags.length === 0 && 'Please add a new tag!'}
                {/*{this.renderTags()}*/}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!!</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>
    }
}

export default Counter;
