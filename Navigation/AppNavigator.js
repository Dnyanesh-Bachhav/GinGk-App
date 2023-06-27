import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Parent from "./normal/Parent";

function AppNavigator(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>

        <Stack.Screen
        name="Parent"
        component={Parent}
        options={{
            headerShown: false
        }}
        />
        </Stack.Navigator>
    );
}
export default AppNavigator;