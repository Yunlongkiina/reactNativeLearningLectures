import React from "react";
import {Text, StyleSheet,View} from 'react-native';
import Imagedetailes from "../components/ImageDetailes";

const ImageScreen =()=>{
    return(
        <View>
            <Imagedetailes
                title='Forest' 
                imagesource = {require('../../assets/forest.jpg')}
                imagescore = '3'
                />
            <Imagedetailes
                title='Beach'
                imagesource = {require('../../assets/beach.jpg')}
                imagescore = '4'
                />
            <Imagedetailes
            title='Mountain'
            imagesource = {require('../../assets/mountain.jpg')}
            imagescore = '4'
            />
        </View>
    )
}
const ImageStyle = StyleSheet.create({
    imagestyle:{

    }
})

export default ImageScreen;