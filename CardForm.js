import React, { useRef, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Animated, View, Button, Easing } from 'react-native';
import { Dimensions } from 'react-native';

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

var index = 0;
const easing = Easing.bezier(0, 0, .58, 1)
var fadeAnim = 0;

export const next = () => {

    index++;

    Animated.timing(fadeAnim, {
        toValue: window_width * index,
        duration: 200,
        useNativeDriver: false,
        easing: easing
    }).start();

    console.log(index)

};

export const prev = () => {

    index--;

    Animated.timing(fadeAnim, {
        toValue: window_width * index,
        duration: 200,
        useNativeDriver: false,
        easing: easing
    }).start();

    console.log(index)

};


const CardForm = (props) => {

    index = 0;
    const Cards = props.children.map((card) =>
        <Animated.ScrollView style={[
            styles.fadingContainer2,
            {
                right: Animated.add(Animated.multiply(2, window_width), fadeAnim),
            },
        ]}>

            {card}
        </Animated.ScrollView>
    );

    fadeAnim = useRef(new Animated.Value(0)).current;

    return (
        <>
            <Animated.ScrollView style={[
                styles.fadingContainer,
                {
                    right: fadeAnim,
                },
            ]}>

                <View style={{width: window_width, height: window_height}}>
                    {props.children[0]}
                </View>

            </Animated.ScrollView>


            <Animated.ScrollView style={[
                styles.fadingContainer2,
                {
                    right: Animated.add(Animated.multiply(-1, window_width), fadeAnim),
                },
            ]}>

                <View style={{ width: window_width}}>
                    {props.children[1]}
                </View>
                
            </Animated.ScrollView>

            <Animated.ScrollView style={[
                styles.fadingContainer3,
                {
                    right: Animated.add(Animated.multiply(-2, window_width), fadeAnim),
                },
            ]}>

                <View style={{ width: window_width}}>
                    {props.children[2]}
                </View>
                </Animated.ScrollView>


            <Animated.ScrollView style={[
                styles.fadingContainer3,
                {
                    right: Animated.add(Animated.multiply(-3, window_width), fadeAnim),
                },
            ]}>

            <View style={{ width: window_width}}>
                    {props.children[3]}
                </View>
            </Animated.ScrollView>


        </>
    );
};

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '500%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    fadingContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'powderblue',
        alignSelf: 'center',
        //position: 'absolute',
    },
    fadingContainer2: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        alignSelf: 'center',
        margin: 0,
        position: 'absolute',
    },
    fadingContainer3: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        alignSelf: 'center',
        position: 'absolute'
    },
    fadingContainer4: {
        width: '100%',
        height: '100%',
        backgroundColor: 'purple',
        alignSelf: 'center',
        position: 'absolute'
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
});

export default CardForm;

/*

<Animated.ScrollView style={[
          styles.fadingContainer2,
          {
            right: Animated.add(Animated.multiply(-1, window_width), fadeAnim),
          },
        ]}>

        </Animated.ScrollView>

        */