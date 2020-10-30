import React, {Component} from 'react';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    handleDelete = counterId => {
        //  filters all the counter except the given counter
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleIncrement = counter => {
        //Creates new array using spread operator to clone the array. Objects are same as in the state
        //In react we never update the state directly
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className={"container"}>
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
