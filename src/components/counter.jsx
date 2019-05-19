import React, {Component} from 'react';

class Counter extends Component {
    /* componentDidUpdate(prevProps, prevState) {
         //called after a component did update
         //we can get ajax request from data
         console.log('prevProps', prevProps);
         console.log('prevState', prevState);
         if(prevprops.counterproperty.value !== this.props.counterprops.value){
             //ajax called and get new data from the server
         }
     };
     */

    /*  componentWillUnmount() {
          //called just before the component remove from the Dom
          console.log('Counter - Unmount')
      }

  */
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counterproperty.value > 0 ? "primary" : "warning";
        return classes;
    };


    formatValue() {
        console.log('Counter - Renderd')
        const {value} = this.props.counterproperty;
        return value > 0 ? value : "zero"
    }

    render() {

        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClass()}>{this.formatValue()}</span>
                </div>

                <div className="col">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => this.props.onIncrement(this.props.counterproperty)}
                    >
                        +
                    </button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counterproperty)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counterproperty.value === 0 ? 'disabled' : ''}
                    >
                        -
                    </button>

                    <button
                        onClick={() => this.props.onDelete(this.props.counterproperty.id)}
                        className="btn btn-danger btn-sm">
                        Delete
                    </button>
                </div>


            </div>
        );
    }


}

export default Counter;
