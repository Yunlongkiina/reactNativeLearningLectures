import React, {useState} from "react";
import {StyleSheet, View, TextInput,Text } from "react-native";

const TextScreen = () => {

    let [text, setText] = useState('')
    return(
        <View styles={styles.text}>
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={newtextValue => setText(newtextValue)}
            />
        {text.length < 5 ? <Text style={styles.warningStyle}>'Password length must greater than 5 '</Text>:null}
        <Text>{text}</Text>
        </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  inputStyle:{
    margin:15,
    borderColor:'black',
    borderWidth:1
  },
  warningStyle:{
    color:'red',
  }
});

export default TextScreen;
