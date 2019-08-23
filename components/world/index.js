import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  View,
  asset,
  VrButton,
  Text,
} from 'react-360';

import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import { connect } from '../../store';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class World extends React.Component {

  render() {
    const { earthRotation, moonRotation, sunRotation } = this.props;
    return (
      <View style={styles.panel}>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <AnimatedEntity
          source={{gltf2: asset('sun/scene.gltf')}} 
          style={{transform: [
            {rotateY: sunRotation},
            {scale: 5},
          ]}}
        />
        <AnimatedEntity
          source={{gltf2: asset('earth/scene.gltf')}} 
          style={{transform: [
            {rotateY: earthRotation},
            {translateX: 100},
            {scale: 5},
          ]}}
        />
        <AnimatedEntity
          source={{gltf2: asset('moon/scene.gltf')}} 
          style={{transform: [
            {rotateY: moonRotation},
            {translateX: 150},
            {scale: 5},
          ]}}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(World)