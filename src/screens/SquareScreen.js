import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREASEMENT = 20
const reducer =(state, action)=>{
    // state === {red:9, green:0,blue:0}
    // acton === {colorTochange:'red'|'green'|'blue', amount:COLOR_INCREASEMENT|-COLOR_INCREASEMENT}
    switch(action.type){
        case 'change_red':
            return  state.red + action.payload >255 || state.red + action.payload < 0? state: {...state, red: state.red + action.payload}
        case 'change_green':
            return  state.green + action.payload >255 || state.green + action.payload < 0? state: {...state, green: state.green + action.payload}
        case 'change_blue':
            return  state.blue + action.payload >255 || state.blue + action.payload < 0? state: {...state, blue: state.blue + action.payload}
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
                onIncrease ={()=>dispatch({type:'change_red', payload:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({type:'change_red', payload:-1 *COLOR_INCREASEMENT})}
                color='Red' />
            <ColorCounter
                onIncrease ={()=>dispatch({type:'change_green', payload:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({type:'change_green', payload:-1 *COLOR_INCREASEMENT})}
                color='Green' />
            <ColorCounter
                onIncrease ={()=>dispatch({type:'change_blue', payload:COLOR_INCREASEMENT})}
                onDecrease ={()=>dispatch({type:'change_blue', payload:-1 *COLOR_INCREASEMENT})}
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
