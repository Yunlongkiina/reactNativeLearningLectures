import React from "react";
import {Text, StyleSheet, Image} from 'react-native';

const Imagedetailes =({title, imagesource,imagescore})=>{
    return(
        <>
        <Image source={imagesource}/>
        <Text>{title}</Text>
        <Text>ImageScore ---- {imagescore}</Text>
        </>
    )
}
const ImageStyle = StyleSheet.create({
    imagestyle:{

    }
})

export default Imagedetailes;