import Counter from "./Counter"
import React from 'react'
interface Props {
    counters: Array<{
        id: string
        count: number
        color: string
    }>
    countUp: any
}


class CounterList extends React.Component<Props, {}> {
    render() {
        let counters = this.props.counters.map((counter: any) => {
            return (
                <Counter
                    counter={counter}
                    key={counter.id}
                    countUp={this.props.countUp}
                />
            )
        })
        return (
            <ul>
                {counters}
            </ul>
        );
    }
}

export default CounterList

