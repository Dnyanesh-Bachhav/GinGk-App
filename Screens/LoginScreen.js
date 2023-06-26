import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Button, Divider, Input } from "@rneui/themed";
import { COLORS } from "../components/colors";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.png";
import { ImageBackground } from "react-native";

function LoginScreen() {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <Image source={ logo } style={{ width: 200, height: 200, resizeMode: "contain" }} />

      <View style={styles.cardStyle}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          Login
        </Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Username or Email"
        />
        <TextInput style={styles.textInputStyle} placeholder="Password" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 0,
            }}
          >
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={"checkbox-blank-outline"}
              containerStyle={{
                padding: 0,
                marginLeft: 0,
              }}
            />

            <Text>Remember Me</Text>
          </View>
          <Text style={{ color: COLORS.cyan, fontWeight: "bold" }} >Forgot Password</Text>
        </View>
        <Button
          title={"Login"}
          buttonStyle={{
            backgroundColor: COLORS.success,
          }}
          containerStyle={{
            width: "auto",
          }}
        />
        <Divider style={{
            // width: "100%",
            marginVertical: 8
        }} width={1} inset={false} insetType="middle"  />
        <Button
          title={"Login with Facebook "}
        //   <Entypo name="facebook-with-circle" size={24} color="black" />
          icon={{
            name: 'facebook-with-circle',
            type: 'entypo',
            size: 24,
            color: 'white',
          }}
          iconContainerStyle={{
            marginRight: 5
          }}
          buttonStyle={{
            backgroundColor: COLORS.blue,
          }}
          containerStyle={{
            width: "auto",
          }}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
        <Text>Don't have an account?</Text>
        <Text style={{ color: COLORS.success, fontWeight: 'bold', marginLeft: 5 }} >Sign Up</Text>
        </View>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    elevation: 4,
  },
  textInputStyle: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 8,
    marginTop: 15,
    borderRadius: 2,
  },
});
export default LoginScreen;
