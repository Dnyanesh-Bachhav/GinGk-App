import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import RootStackScreen from './Navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <View style={styles.container}> */}
        {/* <Text>Hello World...!!!</Text> */}
        <NavigationContainer>
          {/* <RootStackScreen/> */}
          <AppNavigator/>
        </NavigationContainer>
        <StatusBar style="auto" />
      {/* </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
