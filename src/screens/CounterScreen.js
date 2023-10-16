import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = ({navigation}) => {

    let [counter, setCounter] = useState(0)

    return(
    <View>
      <Text style={styles.text}>Current Counter:{counter}</Text>
      <Button
        title="Increase"
        onPress={()=>{setCounter(counter+1)}}
      />

      <Button
        title="Decrease"
        onPress={()=>{setCounter(counter-1)}}
      />

    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
