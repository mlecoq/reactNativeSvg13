/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Svg, Path, Ellipse} from 'react-native-svg';
import Animated, {useAnimatedProps} from 'react-native-reanimated';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const ellipseAnimatedProps = useAnimatedProps(() => {
    const coordinates = {cx: -10, cy: -10, rx: 0, ry: 0};

    return {
      cx: coordinates.cx,
      cy: coordinates.cy,
      rx: coordinates.rx,
      ry: coordinates.ry,
      stroke: 'rgb(0,0,0)',
      opacity: 0,
      strokeWidth: 0,
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Svg width="100%" height="100%">
        <AnimatedEllipse animatedProps={ellipseAnimatedProps} />
      </Svg>
    </SafeAreaView>
  );
};

export default App;
