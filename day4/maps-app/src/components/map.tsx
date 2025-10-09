import { AppleMaps, GoogleMaps } from "expo-maps";
import { useEffect, useState } from "react";
import { Platform, Text } from "react-native";
import * as Location from "expo-location";
import { AppleMapsMapType } from "expo-maps/build/apple/AppleMaps.types";

export function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        uiSettings={{}}
        properties={{
          isMyLocationEnabled: true,
          isTrafficEnabled: true,
          mapType: AppleMapsMapType.STANDARD,
          selectionEnabled: false,
        }}
        polylines={[
          {
            coordinates: [
              {
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
              },
              {
                latitude: 40.987826,
                longitude: 29.036858,
              },
            ],
          },
        ]}
        annotations={[
          {
            title: "MERHABA",
            backgroundColor: "red",
          },
        ]}
        onCircleClick={(event) => {
          alert(`Circle clicked: ${event.radius} meters radius`);
        }}
        // circles={[
        //   {
        //     id: "1",
        //     center: {
        //       latitude: location?.coords.latitude,
        //       longitude: location?.coords.longitude,
        //     },
        //     radius: 50000,
        //     width: 200,
        //     lineColor: "blue",
        //     lineWidth: 2,
        //   },
        // ]}
        markers={[
          // {
          //   coordinates: {
          //     latitude: location?.coords.latitude,
          //     longitude: location?.coords.longitude,
          //   },
          //   title: "You are here",
          // },
          {
            coordinates: {
              latitude: 40.987826,
              longitude: 29.036858,
            },
            title: "Fenerbahçe Şükrü Saracoğlu Stadyumu",
          },
        ]}
        cameraPosition={{
          coordinates: {
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
          },
          zoom: 4,
        }}
      />
    );
  }

  if (Platform.OS === "android") {
    return <GoogleMaps.View style={{ flex: 1 }} />;
  }
  return <Text>Maps are only available on Android and iOS</Text>;
}
