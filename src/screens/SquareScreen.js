import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREASEMENT = 20
const reducer =(state, action)=>{
    // state === {red:9, green:0,blue:0}
    // acton === {colorTochange:'red'|'green'|'blue', amount:COLOR_INCREASEMENT|-COLOR_INCREASEMENT}
    switch(action.colorTochange){
        case 'red':
            return  state.red + action.amount >255 || state.red + action.amount < 0? state: {...state, red: state.red + action.amount}
        case 'green':
            return  state.green + action.amount >255 || state.green + action.amount < 0? state: {...state, green: state.green + action.amount}
        case 'blue':
            return  state.blue + action.amount >255 || state.blue + action.amount < 0? state: {...state, blue: state.blue + action.amount}
        default:
            return state
    }
}

const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    const [state, dispatch] = useReducer(reducer, {red:9, green:0,blue:0})

    // const setColor=(color, change)=>{
    //     switch(color){
    //         case 'red':
    //             red + change >255 || red + change < 0? null:setRed(red+change);
    //             return;
    //         case 'green':
    //             green + change >255 || green + change < 0? null:setGreen(red+change);
    //             return;
    //         case 'blue':
    //             blue + change >255 || blue + change < 0? null:setBlue(red+change);
    //             return;
            
    //         }
    // }

    return(
        <View>
            <Text style={styles.text}>Color Screen</Text>
            <ColorCounter
                // inside dispatch, just pass action in reduce function
                onIncrease ={()=>dispatch({colorTochange:'red', amount:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({colorTochange:'red', amount:-1 *COLOR_INCREASEMENT})}
                color='Red' />
            <ColorCounter
                onIncrease ={()=>dispatch({colorTochange:'green', amount:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({colorTochange:'green', amount:-1 *COLOR_INCREASEMENT})}
                color='Green' />
            <ColorCounter
                onIncrease ={()=>dispatch({colorTochange:'blue', amount:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({colorTochange:'blue', amount:-1 *COLOR_INCREASEMENT})}
                color='Blue' />
            <View style={{
                height:100,
                width:100,
                backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
                }}/>

        </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;
