import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Button, Divider, Input } from "@rneui/themed";
import { COLORS } from "../components/colors";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.png";
import { ImageBackground } from "react-native";

function ForgotPasswordScreen() {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <Image source={ logo } style={{ width: 200, height: 200, resizeMode: "contain" }} />

      <View style={styles.cardStyle}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          FORGOT PASSWORD?
        </Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter email address"
        />
        
        <Button
          title={"Submit"}
          buttonStyle={{
            backgroundColor: COLORS.success,
            marginTop: 20,
          }}
          containerStyle={{
            width: "auto",
          }}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
        <Text>Back to</Text>
        <Text style={{ color: COLORS.success, fontWeight: 'bold', marginLeft: 5 }} >Login</Text>
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
    width: "90%",
    paddingVertical: 40,
    paddingHorizontal: 20,
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
export default ForgotPasswordScreen;
