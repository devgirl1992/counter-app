import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
       // console.log('Counters - Renderd');
        const {onReset, counterprop, onIncrement, onDecrement, onDelete} = this.props;
        return (
            <div>
                <button
                    className='btn btn-outline-primary m-2'
                    onClick={onReset}>Reset
                </button>

                {counterprop.map(x => (
                    <Counter key={x.id}
                            counterproperty={x}
                             onIncrement={onIncrement}
                             onDecrement={onDecrement}
                             onDelete={onDelete}>
                        <h6>Counter #{x.id}</h6>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;