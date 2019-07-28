import React from 'react'

class Counter extends React.Component<CounterProps, {}> {
    render() {
        return (
            <li
                style={{ backgroundColor: this.props.counter.color }}
                onClick={() => this.props.countUp(this.props.counter)}
            >
                {this.props.counter.id}-({this.props.counter.count})
            </li>
        )
    }
}
export default Counter
