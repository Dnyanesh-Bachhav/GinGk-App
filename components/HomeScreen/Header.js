import { Text } from "react-native";
import { View } from "react-native";
import user from "../../assets/user.png";
import { Image } from "react-native";
import { COLORS } from "../colors";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={user}
            style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 2 }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ color: COLORS.white }}>Welcome</Text>
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Shane
            </Text>
          </View>
        </View>
        <View>
          <FontAwesome name="bars" size={24} color={COLORS.white} />
        </View>
        {/* <Text>Header</Text> */}
      </View>
      {/* SearchBar */}
      <View style={{ flexDirection: 'row' }} >
        <View style={{ backgroundColor: COLORS.gray, marginHorizontal: 5, width: '85%', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }} >
          <Feather name="search" size={18} color={COLORS.grayDark} style={{ marginLeft: 5 }} />
          <TextInput
            placeholder="Search..."
            style={{
              backgroundColor: COLORS.gray,
              borderRadius: 5,
              paddingVertical: 8,
              paddingLeft: 8,
            }}
            />
        </View>
        <View style={{ backgroundColor: COLORS.gray, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, borderRadius: 5 }}>
        <AntDesign name="shoppingcart" size={24} color={COLORS.grayDark}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.success,
    paddingVertical: 5,
  },
});

export default Header;
