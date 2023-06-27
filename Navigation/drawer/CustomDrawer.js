import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "react-native";
import { Image } from "react-native";
import user from "../../assets/user.png";
import { COLORS } from "../../components/colors";
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function CustomDrawer(){
    const [ selected, setSelected ] = useState("HOME");
    return(
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <MaterialCommunityIcons name="keyboard-backspace" size={22} color="black" style={{ marginLeft: 10 }} />
            </View>
            <View style={{ flexDirection: 'row', margintop: 10, marginLeft: 10, marginBottom: 10 }} >
                <Image source={user} style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 2 }} />
                <View style={{ marginLeft: 5 }} >
                    <Text>Shane</Text>
                    <Text style={{ color: COLORS.success, fontWeight: 'bold' }} >View Profile</Text>
                </View>
            </View>
            <DrawerItem icon={<SimpleLineIcons name="home" size={22} color={ selected=="HOME" ? COLORS.white : COLORS.grayDark } />} title="HOME" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<AntDesign name="user" size={22} color={ selected=="MY ACCOUNT" ? COLORS.white : COLORS.grayDark } />} title="MY ACCOUNT" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<Feather name="copy" size={22} color={ selected=="SHOWCASE" ? COLORS.white : COLORS.grayDark }/>} title="SHOWCASE" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<AntDesign name="appstore-o" size={22} color={ selected=="SERVICES" ? COLORS.white : COLORS.grayDark } />} title="SERVICES" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<AntDesign name="user" size={22} color={ selected=="PROJECTS" ? COLORS.white : COLORS.grayDark } />} title="PROJECTS" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<Feather name="mail" size={22} color={ selected=="INBOX" ? COLORS.white : COLORS.grayDark } />} title="INBOX" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<FontAwesome5 name="shopping-bag" size={22} color={ selected=="ABOUT US" ? COLORS.white : COLORS.grayDark } />} title="ABOUT US" setSelected={setSelected} selected={selected} />
            <DrawerItem icon={<AntDesign name="infocirlceo" size={22} color={ selected=="CONTACT US" ? COLORS.white : COLORS.grayDark } />} title="CONTACT US" setSelected={setSelected} selected={selected} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: 10 }} >
                <Ionicons name="power" size={24} color={COLORS.red} />
                <Text style={{color: COLORS.red, fontWeight: 'bold', marginLeft: 5 }}>LOGOUT</Text>
            </View>
            <StatusBar style="auto" />


        </View>
    );
}
function DrawerItem({icon, title, setSelected, selected }){
    return(
        <TouchableOpacity onPress={()=>{
            setSelected(title);
        }} >
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: selected==title ? COLORS.success : COLORS.white, paddingHorizontal: 18, paddingVertical: 14 }}>
            {icon}
            <Text style={{ marginLeft: 15, fontSize: 14, fontWeight: 'bold', color: selected == title ? COLORS.white : COLORS.grayDark }}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})
export default CustomDrawer;