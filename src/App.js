import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

import './App.css';

class App extends Component {

    state = {
        counterprop: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},

        ]
    };

  /*  constructor(props){
        super(props);
        console.log('App-constructor');
        // this.state = this.props.something
        // in constructor we can change state directly
    };

    componentDidMount() {
        //ajax called  to get data from server
        // this.setState({with new data})
        console.log('App-componentDidmount')
    };
    */

    handleReset = () => {
        const newcounter = this.state.counterprop.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counterprop: newcounter})

    };

    handleIncrement = countervalue => {
        const newcounter = [...this.state.counterprop];
        const index = newcounter.indexOf(countervalue);

        newcounter[index] = {...countervalue};
        newcounter[index].value++;

        this.setState({counterprop: newcounter});

        console.log('new value after increment :', newcounter[index].value)

    };

    handleDecrement = countervalue => {
        const newcounter = [...this.state.counterprop];
        const index = newcounter.indexOf(countervalue);

        newcounter[index] = {...countervalue};
        newcounter[index].value--;

        this.setState({counterprop: newcounter});

        console.log('new value after decrrease is:', newcounter[index].value)

    };

    handleDelete = (id) => {
        const newcounter = this.state.counterprop.filter(c => c.id !== id);
        this.setState({counterprop: newcounter});

        console.log('item is deleted withh id nummer:', id)
    };

    render() {
        console.log('App-render')
    return (
   <React.Fragment>

       <NavBar totalCounters={this.state.counterprop.filter(c => c.value > 0).length}/>
       <main className='container'>
           <Counters

               counterprop={this.state.counterprop}
               onReset={this.handleReset}
               onIncrement={this.handleIncrement}
               onDecrement={this.handleDecrement}
               onDelete={this.handleDelete}


           />
       </main>



   </React.Fragment>
    );
  }
}

export default App;
