import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const origin = { latitude: 41.064534, longitude: 29.026234 };
const destination = { latitude: 41.021866, longitude: 29.009625 };

export function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialCamera={{
          center: { latitude: 41.064534, longitude: 29.026234 },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 8,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          // apikey={"GOOGLE_MAPS_APIKEY"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
