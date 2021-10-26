import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
import {PanGestureHandler} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <Text style={styles.title}>Gesture Handling Implementation</Text>
        <Circle />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  title: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  }
});

const circleRadius = 30;
console.log(width / 2 - circleRadius);
class Circle extends Component { 
  _touchX = new Animated.Value(width / 1.8 - circleRadius);
  _touchY = new Animated.Value(height / 3 - circleRadius);
  _onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {x: this._touchX, y: this._touchY},
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  render() {
    return (
      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
        <Animated.View
          style={{
            height: 100,
            justifyContent: 'center',
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: '#42a5f5',
                borderRadius: circleRadius,
                height: circleRadius * 2,
                width: circleRadius * 2,
              },
              {
                transform: [
                  {
                    translateX: Animated.add(
                      this._touchX,
                      new Animated.Value(-circleRadius),
                    ),
                  },
                  {
                    translateY: Animated.add(
                      this._touchY,
                      new Animated.Value(-circleRadius),
                      console.log(this._touchY)
                    ),
                  },

                ],
              },
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default App;
