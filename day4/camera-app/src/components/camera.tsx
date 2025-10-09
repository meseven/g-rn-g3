import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Camera() {
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [torch, setTorch] = useState<"off" | "on">("off");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  useEffect(() => {
    initialPermissionCheck();
  }, []);

  if (!cameraPermission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }

  async function initialPermissionCheck() {
    if (mediaPermissionResponse?.status !== "granted") {
      await requestMediaPermission();
    }
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    const photo = await cameraRef.current?.takePictureAsync();

    if (!photo) {
      return;
    }

    await MediaLibrary.saveToLibraryAsync(photo.uri);
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        enableTorch={torch === "on"}
        flash="on"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.takePictureButton}
          onPress={takePicture}
        />

        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>
            {facing === "back" ? "Front Camera" : "Back Camera"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setTorch((current) => (current === "off" ? "on" : "off"))
          }
        >
          <Ionicons
            name={torch === "off" ? "flash-off" : "flash"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64,
    gap: 20,
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  takePictureButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "red",
  },
});
