import React, { useRef, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Animated, View, Button, Easing } from 'react-native';
import { Dimensions } from 'react-native';
import CardForm, { next, prev } from './CardForm';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const content = [
  <View style={{width: "40%", height: "8%", backgroundColor: 'green'}} key={1}>
    <Button style={{backgroundColor: 'green',width: '100px', height: '100px'}} title="Next" onPress={next} />
  </View>,
  <View key={2}>
    <Button title="Next" onPress={next} />
    <Button title="Prev" onPress={prev} />
  </View>,
  <View key={3}>
    <Button title="Next" onPress={next} />
    <Button title="Prev" onPress={prev} />
  </View>,
  <View key={4}>
    <Button title="Prev" onPress={prev} />
  </View>
];

const App = () => {

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.container}>

        <CardForm>

          {content}

        </CardForm>

      </SafeAreaView>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '300%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fadingContainer: {
    width: '90%',
    height: '100%',
    backgroundColor: 'powderblue',
    alignSelf: 'center',
    margin: 0,
  },
  fadingContainer2: {
    width: '90%',
    height: '100%',
    backgroundColor: 'green',
    alignSelf: 'center',
  },
  fadingContainer3: {
    width: '90%',
    height: '100%',
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;

/*

<Animated.ScrollView style={[
          styles.fadingContainer2,
          {
            right: Animated.add(Animated.multiply(-1, window_width), fadeAnim),
          },
        ]}>

        </Animated.ScrollView>

        */