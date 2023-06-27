import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Button, Divider } from "@rneui/themed";
import { COLORS } from "../components/colors";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Ionicons } from '@expo/vector-icons';


function SignUpScreen() {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20 }} >
            <TouchableOpacity style={{ backgroundColor: COLORS.white, borderRadius: 50, elevation: 4, alignSelf: 'center', padding: 8 }} >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={ logo } style={{ width: 150, height: 150, resizeMode: "contain", alignSelf: 'center', marginLeft: 50 }} />
        </View>

      <View style={styles.cardStyle}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          SIGN UP
        </Text>
        {/* Name */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Name"
        />
        {/* Mobile Number */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Mobile Number"
        />
        {/* Email ID */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email Id"
        />
        {/* Town/City */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Town/City"
        />
        {/* State */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="State"
        />
        {/* Password */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Password"
        />
        {/* Confirm Password */}
        <TextInput
          style={{...styles.textInputStyle, marginBottom: 10 }}
          placeholder="Confirm Password"
        />
        <Button
          title={"Sign up"}
          buttonStyle={{
            backgroundColor: COLORS.success,
            marginBottom: 5
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
          title={"Sign up with Facebook "}
        //   <Entypo name="facebook-with-circle" size={24} color="black" />
          icon={{
            name: 'facebook-with-circle',
            type: 'entypo',
            size: 24,
            color: 'white',
          }}
          iconContainerStyle={{
            marginRight: 5,
        }}
        buttonStyle={{
            backgroundColor: COLORS.blue,
            marginTop: 5
          }}
          containerStyle={{
            width: "auto",
          }}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
        <Text>Already have an account?</Text>
        <Text style={{ color: COLORS.success, fontWeight: 'bold', marginLeft: 5 }} >Sign In</Text>
        </View>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    // padding: 10,
    borderRadius: 10,
    elevation: 4,
  },
  textInputStyle: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 6,
    marginTop: 10,
    borderRadius: 2,
  },
});
export default SignUpScreen;
