import * as React from 'react';
import {Animated} from 'react-360';

const State = {
  moonRotation: new Animated.Value(0),
  earthRotation: new Animated.Value(0),
  sunRotation: new Animated.Value(0),
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function setPlanetRotation(planet, value) {
  State[planet] = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      moonRotation: State.moonRotation,
      earthRotation: State.earthRotation,
      sunRotation: State.sunRotation,
    };

    _listener = () => {
      this.setState({
        moonRotation: State.moonRotation,
        earthRotation: State.earthRotation,
        sunRotation: State.sunRotation,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      );
    }
  };
}
