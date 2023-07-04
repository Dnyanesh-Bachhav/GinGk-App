<<<<<<< HEAD
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
=======
import { View, Text } from "react-native";

function AppNavigator(){
    return(
        <View>
            <Text>Hello AppNavigator</Text>
        </View>
>>>>>>> 224d7e3b9ee9dd83e583c15803d8bf98da063d35
    );
}
export default AppNavigator;