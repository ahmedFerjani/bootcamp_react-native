import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentScreen from "./src/screens/componentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreenUseReducer";
import ColorScreen from "./src/screens/ColorScreen";
import squareScreen from "./src/screens/squareScreen";
import TextScreen from "./src/screens/TextScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: componentScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: squareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
