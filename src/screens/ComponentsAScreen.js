import React from 'react'
import { Text, StyleSheet,Button } from 'react-native'

const ComponentScreen = (props)=>{
    return <>
        <Button
            title='go to List Screen'
            onPress={()=>{props.navigation.navigate('ListScreen')}}/>
        <Text style={styles.textStyle}>This is a compoent screen!</Text>
    </>
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30
        }
    }
)

export default ComponentScreen;