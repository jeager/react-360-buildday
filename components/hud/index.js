import React from 'react';
import {
  StyleSheet,
  View,
  VrButton,
  Text,
  Animated,
} from 'react-360';
import { connect } from '../../store';

class HUD extends React.Component {

  state = {
    rotating: false,
    animations: {
      sun: Animated.timing(this.props.sunRotation, {toValue: 360, duration: 20000}),
      moon: Animated.timing(this.props.moonRotation, {toValue: 360, duration: 20000}),
      earth: Animated.timing(this.props.earthRotation, {toValue: 360, duration: 20000}),
    }
  }

  rotate = () => {
    const { animations, rotating } = this.state;
    if(rotating) {
      animations.sun.stop();
      animations.moon.stop();
      animations.earth.stop();
      this.setState({rotating: false})
    } else {
      Animated.loop(animations.sun).start();
      Animated.loop(animations.moon).start();
      Animated.loop(animations.earth).start();
      this.setState({rotating: true})
    }
  }
  
  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.rotate}>
          <Text>
            Rotate
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(HUD)
