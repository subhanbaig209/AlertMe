import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, KeyboardAvoidingView, Platform } from 'react-native';
import * as Location from 'expo-location';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ReportHazard from '../components/ReportHazard';

export default function Map() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [pinLocation, setPinLocation] = useState(null);
  const [addingPin, setAddingPin] = useState(false);
  const [pinnedLocations, setPinnedLocations] = useState([]);
  const [incidentText, setIncidentText] = useState('');
  const [streetName, setStreetName] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 5000,
          distanceInterval: 50,
        },
        (newLocation) => {
          setCurrentLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        }
      );
    })();
  }, []);

  const handleAddPin = () => {
    setAddingPin(true);
  };

  const handleConfirmPin = () => {
    if (pinLocation && incidentText.trim() !== '') {
      console.log('Pin location:', pinLocation);
      console.log('Incident:', incidentText);
      console.log('street name', streetName);
      setPinnedLocations([...pinnedLocations, { ...pinLocation, incidentText, streetName }]);
    }
    setPinLocation(null);
    setIncidentText('');
    setAddingPin(false);
  };

  const handleCancelPin = () => {
    setPinLocation(null);
    setIncidentText('');
    setAddingPin(false);
  };

  const handleMapPress = async (event) => {
    if (addingPin) {
      const { latitude, longitude } = event.nativeEvent.coordinate;
      setPinLocation({ latitude, longitude });

      try {
        const address = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (address.length > 0) {
          const { street } = address[0];
          setStreetName(street);
        }
      } catch (error) {
        console.log('Error getting street name:', error);
      }
    } else {
      setPinLocation(null);
      setIncidentText('');
      setStreetName('');
    }
  };

  const handleIncidentTextChange = (text) => {
    setIncidentText(text);
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : -500; // Adjust the value as needed

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={styles.container}>
        {currentLocation && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            showsUserLocation={true}
            onPress={handleMapPress}
          >
            {pinnedLocations.map((location, index) => (
              <Marker key={index} coordinate={location}>
                <Entypo name="location-pin" size={40} color="red" />
                <Callout style={styles.calloutContainer}>
                  <View style={styles.calloutTextContainer}>
                    <Text style={styles.calloutText}>Incident: {location.incidentText}</Text>
                    <Text style={styles.calloutText}>Location: {location.streetName}</Text>
                    <View style={styles.calloutIconsContainer}>
                      <TouchableOpacity>
                        <FontAwesome name="thumbs-up" size={24} color="green" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesome name="thumbs-down" size={24} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Callout>
              </Marker>
            ))}
            {pinLocation && <Marker coordinate={pinLocation} />}
          </MapView>
        )}
        {addingPin && (
          <View style={styles.pinContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Pin a Location & Enter Incident"
              value={incidentText}
              onChangeText={handleIncidentTextChange}
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmPin}
              disabled={!incidentText.trim()}
            >
              <Entypo name="check" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPin}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        {!addingPin && (
          <TouchableOpacity style={styles.addButton} onPress={handleAddPin}>
            <ReportHazard />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022442',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  pinContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    marginRight: 10,
  },
  cancelButton: {
    marginLeft: 10,
  },
  calloutTextContainer: {
    padding: 3,
  },
  calloutContainer: {
    boxRadius: 5,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'white',
    minWidth: 200,
  },
  calloutText: {
    fontSize: 14,
  },
  calloutIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});