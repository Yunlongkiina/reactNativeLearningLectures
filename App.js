import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentsAScreen';
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/Imagescreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ListScreen: ListScreen,
    ImageScreen:ImageScreen,
    CounterScreen:CounterScreen,
    ColorScreen:ColorScreen,
    SquareScreen:SquareScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
