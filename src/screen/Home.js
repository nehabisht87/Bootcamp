import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const Home = () => {
  const [loader, setLoader] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://www.google.com/'}}
        style={styles.displayUrl}
        onLoadStart={() => setLoader(true)}
        onLoadEnd={() => setLoader(false)}
      />
      {loader ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.activityIndicator}
        />
      ) : null}
    </SafeAreaView>
  );
  return (
    <WebView
      source={{uri: 'https://www.google.com/'}}
      style={styles.web}
      onLoadStart={() => alert('')}
      onLoadEnd={() => setLoader(false)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  displayUrl: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Home;
