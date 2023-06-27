import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import ShowcaseScreen from "../../Screens/ShowcaseScreen";
import MarketplaceScreen from "../../Screens/MarketplaceScreen";
import ServicesScreen from "../../Screens/ServicesScreen";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../../components/colors";
import { Text } from "react-native";
import { View } from "react-native";

const Bottom = createBottomTabNavigator();

function BottomNavigator(){
    return(
        <Bottom.Navigator screenOptions={{
            tabBarShowLabel: false,
        }} >
            <Bottom.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused })=>{
                    return(
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Entypo name="home" size={24} color={ focused ? COLORS.success : COLORS.gray }/>
                            {/* <Feather name="copy" size={24} color={focused ? COLORS.success : COLORS.gray}/> */}
                            <Text style={{ fontSize: 10, color: focused ? COLORS.success : COLORS.gray}}>HOME</Text>
                        </View>
                    );
                }
            }}
            />
            <Bottom.Screen
            name="Showcase"
            component={ShowcaseScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused })=>{
                    return(
                        // <Entypo name="home" size={24} color="black" />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Feather name="copy" size={24} color={focused ? COLORS.success : COLORS.gray}/>
                            <Text style={{ fontSize: 10, color: focused ? COLORS.success : COLORS.gray}}>SHOWCASE</Text>
                        </View>

                    );
                }

                
            }}
            />
            <Bottom.Screen
            name="Marketplace"
            component={MarketplaceScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused })=>{
                    return(
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Entypo name="shop" size={24} color={focused ? COLORS.success : COLORS.gray}/>
                            <Text style={{ fontSize: 10, color: focused ? COLORS.success : COLORS.gray}}>MARKETPLACE</Text>
                        </View>
                        // <Entypo name="home" size={24} color="black" />
                    );
                }
            }}
            />
            <Bottom.Screen
            name="Services"
            component={ServicesScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused })=>{
                    return(
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AntDesign name="appstore-o" size={24} color={focused ? COLORS.success : COLORS.gray}/>
                            <Text style={{ fontSize: 10, color: focused ? COLORS.success : COLORS.gray}}>SERVICES</Text>
                        </View>
                    );
                }
            }}
            />
            
        </Bottom.Navigator>
    );
}

export default BottomNavigator;