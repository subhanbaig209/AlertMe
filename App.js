import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const IncidentForm = () => {
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleDetailsChange = (text) => {
    setDetails(text);
  };

  const handleSubmit = () => {
    console.log('Location:', location);
    console.log('Details:', details);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Incident Location"
        value={location}
        onChangeText={handleLocationChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Incident Details"
        value={details}
        onChangeText={handleDetailsChange}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default IncidentForm;
