import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props)

    const date = new Date();
    this.state = {
      dateTime: date.toLocaleString()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.tick, 1000)
  }

  tick() {
    let dateUpdate = new Date();
    this.setState({dateTime: dateUpdate.toLocaleString()})
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval)
  };

  render () {
    const splitDateTime = this.state.dateTime.split(', ');
    return (
      <div className ="clock">
        <h4 className="date">Today's date: {splitDateTime[0]}</h4>
        <h4 className="time">Local time: {splitDateTime[1]}</h4>
      </div>
    );

  }

}

export default Clock;