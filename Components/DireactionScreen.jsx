import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

export const DirectionsScreen = ({ route }) => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState(null);

  const { startLocation, endLocation } = route.params;

  useEffect(() => {
    // Call the Google Maps Directions API
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation.latitude},${startLocation.longitude}&destination=${endLocation.latitude},${endLocation.longitude}&key=AIzaSyBKPYoMWGdRfZsZlYwwFC00xx0LAr8snyo`;
    
    axios.get(apiUrl)
      .then(response => {
        setDirections(response.data.routes[0].legs[0].steps);
      })
      .catch(error => {
        setError('Error fetching directions',error);
      });
    // console.log("Direactions ==>",startLocation,"End Location==>",endLocation)
    console.log("url",apiUrl);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: startLocation.latitude,
          longitude: startLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Render polyline for each step */}
        {directions.map((step, index) => (
          <Polyline
            key={index}
            coordinates={[
              { latitude: step.start_location.lat, longitude: step.start_location.lng },
              { latitude: step.end_location.lat, longitude: step.end_location.lng },
            ]}
            strokeWidth={4}
            strokeColor="#00F"
          />
        ))}
        {/* Render start and end markers */}
        <Marker coordinate={startLocation} title="Start" />
        <Marker coordinate={endLocation} title="End" />
      </MapView>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});