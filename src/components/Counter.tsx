import React, { Component } from 'react'
import { connect } from 'react-redux'
import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET} from '../redux/actionTypes'

class Counter extends Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <button onClick={this.props.reset}>Reset</button>
                <div>{this.props.counter.count}</div>
            </div>
        )
    }
}

// TODO: Use App State
const mapStateToProps = (state: any) => ({
    counter: state.counter
})

// TODO: Strongly type this
const mapDispatchToProps = (dispatch: any) => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: COUNTER_INCREMENT }),
        decrement: () => dispatch({ type:COUNTER_DECREMENT }),
        reset: () => dispatch({ type: COUNTER_RESET }),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)