import React from 'react'
interface Props {
    counter: {
        id: string
        color: string
        count: number
    }
    countUp: any
}
class Counter extends React.Component<Props, {}> {
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
