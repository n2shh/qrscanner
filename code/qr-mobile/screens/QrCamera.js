import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Pressable, View, Dimensions, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { io } from "socket.io-client";
import { socketServer } from "../config/config.json";

export default function QrCamera({ navigation }) {
  const [scanned, setScanned] = useState(false);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const { height, width } = Dimensions.get("window");
  const maskRowHeight = Math.round((height - 300) / 17.5);
  const maskColWidth = (width - 300) / 2;

  if (!permission) {
    requestPermission();
  }

  function handleBarCodeScanned({ type, data }) {
    navigation.navigate("Home");
    console.log(data);
    const socket = io(socketServer);
    socket.on("connect", () => {
      socket.emit("message", data);
    });
    setScanned(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.chevronContainer}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.chevronImage}
            source={require("../assets/images/x.png")}
          />
        </Pressable>
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        type={BarCodeScanner.Constants.Type.back}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={(StyleSheet.absoluteFillObject, styles.camera)}
      >
        <View style={styles.maskOutter}>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
          <View style={[{ flex: 30 }, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
        </View>
      </BarCodeScanner>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  chevronContainer: {
    position: "absolute",
    zIndex: 10,
    marginTop: 40,
    marginLeft: 10,
  },
  chevronImage: {
    width: 50,
    height: 50,
    opacity: 0.8,
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  maskOutter: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  maskInner: {
    width: 300,
    height: 300,
    backgroundColor: "transparent",
    borderColor: "#2765F3",
    borderWidth: 3,
  },
  maskFrame: {
    backgroundColor: "rgba(1,1,1,0.6)",
  },
  maskRow: {
    width: "100%",
  },
  maskCenter: { flexDirection: "row" },
});
