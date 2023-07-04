import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Header from "../components/HomeScreen/Header";
// import { StatusBar } from "expo-status-bar";

function HomeScreen(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})

export default HomeScreen;