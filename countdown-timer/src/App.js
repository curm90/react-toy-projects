import React from 'react';

class App extends React.Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.countdownTimer();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  countdownTimer() {
    const now = new Date().getTime();
    const birthday = new Date('24 may 2021').getTime();
    const totalSeconds = (birthday - now) / 1000;

    const days = this.formatTime(
      Math.floor(totalSeconds / 3600 / 24)
    );
    const hours = this.formatTime(
      Math.floor(totalSeconds / 3600 / 24) % 24
    );
    const minutes = this.formatTime(
      Math.floor(totalSeconds / 60) % 60
    );
    const seconds = this.formatTime(Math.floor(totalSeconds) % 60);

    this.setState(() => ({ days, hours, minutes, seconds }));
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className='container'>
        <h1 className='title'>Happy Birthday In</h1>
        <div className='countdown-timer'>
          <div className='time-block' id='days-container'>
            <p className='timer'>{days}</p>
            <span className='unit'>Days</span>
          </div>
          <div className='time-block' id='hours-container'>
            <p className='timer'>{hours}</p>
            <span className='unit'>Hours</span>
          </div>
          <div className='time-block' id='minutes-container'>
            <p className='timer'>{minutes}</p>
            <span className='unit'>Minutes</span>
          </div>
          <div className='time-block' id='seconds-container'>
            <p className='timer'>{seconds}</p>
            <span className='unit'>Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
