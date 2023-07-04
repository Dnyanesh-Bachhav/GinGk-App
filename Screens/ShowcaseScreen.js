import { View, Text, StyleSheet } from "react-native";
import Header from "../components/HomeScreen/Header";

function ShowcaseScreen(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>Show case Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})

export default ShowcaseScreen;