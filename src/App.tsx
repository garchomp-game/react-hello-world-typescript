import React from 'react';
import './App.css';
import CounterList from "./CounterList";
interface Props {
}

interface State {
  counters: Array<{
    id: string
    count: number
    color: string
  }>
  total: number
}


class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counters:  [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'},
        {id: 'D', count: 0, color: 'gray'},
        {id: 'E', count: 0, color: 'pink'}
      ],
      total: 0
    };
    this.countUp = this.countUp.bind(this);
  }
  countUp(counter: any): void {
    this.setState(prevState => {
      const counters = prevState.counters.map(counter => {
        return {id: counter.id, count: counter.count, color: counter.color};
      });
      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;
      return {
        counters: counters,
        total: prevState.total + 1
      };
    });
  }
  render() {
    return (
      <div className="container">
        <CounterList
          counters={this.state.counters}
          countUp={this.countUp}
        />
        <div>TOTAL INVENTORY: {this.state.total}</div>
      </div>
    );
  }
}

export default App;
