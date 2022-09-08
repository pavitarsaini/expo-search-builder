import React, { useRef, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Animated, View, Button, Easing, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import CardForm, { next, prev } from './CardForm';

import SearchIcon from './assets/icons/SearchIcon';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const content = [


  <View style={{ flex: 1, padding: 15 }} >

    <View style={{ flex: 1, borderRadius: 30, borderColor: '#e0e0e0', borderWidth: 20, backgroundColor: "#e0e0e0" }}>

      {/* Title Start */}
      <View>
        <Text style={{ fontWeight: '700', fontSize: 42 }}>Where</Text>
      </View>
      {/* Title End */}

      {/* Search Bar Start */}
      <View style={{ flex: 1, backgroundColor: '#e8e8e8', marginTop: '5%', borderRadius: 20, flexDirection: 'row'}}>
        <View style={{ flex: 1, marginLeft: '0%'}}>

          <SearchIcon/>

        </View>
        <View style={{ flex: 5, justifyContent: 'center', padding: "2%", marginRight: 80}}>
          <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.6)'}}>Search</Text>
        </View>
      </View>
      {/* Search Bar End */}

      {/* Map Start */}
      <View style={{ flex: 6, backgroundColor: 'red', marginTop: '5%' }} />
      {/* Map Start */}

      {/* Map Start */}
      <View style={{ flex: 2, backgroundColor: 'green', marginTop: '5%' }} />
      {/* Map Start */}

      {/* Next Button Start*/}
      <View style={{ flex: 1, marginTop: '5%', flexDirection: 'row' }} >
        <View style={{ flex: 3 }} />
        <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: '#2a7e4d', flex: 2, margin: 'auto', alignItems: 'center', flexDirection: 'column', borderRadius: 20 }}>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Next Button End */}

    </View>

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#d9d9d9' }}>

      <CardForm>

        {content}

      </CardForm>


    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
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