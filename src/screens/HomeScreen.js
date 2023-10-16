import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return(
    <View>
      <Text style={styles.text}>爱放屁的小老弟！</Text>
      <Button
        title="Go to Component Screen"
        onPress={()=>{navigation.navigate('Components')}}
      />

      <Button
        title="Go to List Screen"
        onPress={()=>{navigation.navigate('ListScreen')}}
      />

      <Button
              title="Go to Image Screen"
              onPress={()=>{navigation.navigate('ImageScreen')}}
            />
      <Button
              title="Go to Counter Screen"
              onPress={()=>{navigation.navigate('CounterScreen')}}
            />
      <Button
              title="Go to Color Screen"
              onPress={()=>{navigation.navigate('ColorScreen')}}
            />
      <Button
              title="Go to Square Screen"
              onPress={()=>{navigation.navigate('SquareScreen')}}
            />

      {/* <TouchableOpacity onPress={()=>{props.navigation.navigate('ListScreen')}}>
        <Text>Go to List Screen</Text>
        <Text>I am TouchableOpacity</Text>
        <Text>I am TouchableOpacity</Text>
      </TouchableOpacity> */}

    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
