import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Welcome from '../components/Welcome';
import Search from '../components/Search';
import Category from '../components/Category';
import Categories from '../components/Categories';
import Post from '../components/Post';
import HeaderTitle from '../components/HeaderTitle';
import assetsObject from '../components/assets';

const Feed = () => {
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
      <ScrollView style={styles.container}>
        <Welcome text={"Hashim"} date={"May 22"}/>
        <Search />
        <Categories/>
        <HeaderTitle text={"Posts"} date={"May 18 - May 22"}/>
        <Post image={assetsObject.biohazard} title={"COVID-19 Outbreak?"} description={"BRAINS...."}/>
        <Post image={assetsObject.alert} title={"UCD Lab Leak"} description={"UCD Bioengineering Lab has reported a leak in one of their facilities. Clean up crews on standby."}/>
      </ScrollView> 
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      width: "100%"
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
  
  export default Feed;