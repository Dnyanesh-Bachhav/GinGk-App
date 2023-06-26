import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPassword";
import SignUpScreen from "../Screens/SignUpScreen";


const RootStack = createStackNavigator();
function RootStackScreen() {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name="Login" component={LoginScreen} options={{
        headerShown: false,
      }} /> */}
      {/* <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{
        headerShown: false,
      }} /> */}
      <RootStack.Screen name="SignUp" component={SignUpScreen} options={{
        headerShown: false,
      }} />
    </RootStack.Navigator>
  );
}
export default RootStackScreen;