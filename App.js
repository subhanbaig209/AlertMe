import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, SafeAreaView } from 'react-native';

const App = () => {
  const [incidentList, setIncidentList] = useState([]);
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleAddIncident = () => {
    if (username && description && location) {
      const newIncident = {
        id: Math.random().toString(),
        username: username,
        description: description,
        location: location,
      };

      setIncidentList((prevList) => [...prevList, newIncident]);
      setUsername('');
      setDescription('');
      setLocation('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <Button title="Add Incident" onPress={handleAddIncident} />
      </View>

      <FlatList
        data={incidentList}
        renderItem={({ item }) => (
          <View style={styles.tweetContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  tweetContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default App;
