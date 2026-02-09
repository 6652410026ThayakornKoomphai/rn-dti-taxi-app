import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const taxilogo = require("@/assets/images/taxi.png");

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/calculator");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={taxilogo} style={styles.taxilogo} />
        <Text style={styles.taxiheader}>TAXI METER</Text>
        <Text style={styles.appnameen}>THAI FARE CALCULATOR</Text>
        <ActivityIndicator
          size="large"
          color="#346324"
          style={{ marginTop: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e0dec3",
  },
  appnameen: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    color: "#346324",
  },
  taxiheader: {
    fontFamily: "Kanit_700Bold",
    fontSize: 60,
    fontWeight: "bold",
    color: "#2e2d2d",
  },
  taxilogo: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#ecdf2b",
    alignItems: "center",
    justifyContent: "center",
  },
});
