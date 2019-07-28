import Counter from "./Counter"
import React from 'react'
class CounterList extends React.Component<CounterListProps, {}> {
    render() {
        let counters = this.props.counters.map((counter: CounterInterface) => {
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