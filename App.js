// import React, {Component} from 'react';
// import {View} from 'react-native';
// import Home from './src/screen/Home';

// export class App extends Component {
//   render() {
//     return (
//       <View>
//         <Home />
//       </View>
//     );
//   }
// }

// export default App;
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Home from './src/screen/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
