import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerContent={ props=> <CustomDrawer/> } >
            <Drawer.Screen
            name="Main"
            component={Main}
            options={{
                headerShown: false
            }}
            />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;