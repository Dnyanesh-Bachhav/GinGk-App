import { Text } from "react-native";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from "../colors";

function Header() {
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color={COLORS.white} />
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
