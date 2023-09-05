import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const profileImage = require('./assets/icon.png');

const App = () => {
  const profileData = {
    fullName: 'Marlon S. Carbonilla',
    course: 'Bs Information Technology 3',
  };

  const classList = [
    { code: 'ELEC 2', description: 'Web Development/Web Enterprise', units: 'Units: 3' },
    { code: 'ELEC 3', description: 'Mobile Application', units: 'Units: 3' },
    { code: 'IT 311', description: 'Software Engineering', units: 'Units: 3' },
    { code: 'IT 312', description: 'Information Assurance and Security 2', units: 'Units: 3' },
    { code: 'IT 313', description: 'Quantitative', units: 'Units: 3' },
  ];

  const renderClassItem = ({ code, description, units }) => (
    <View style={styles.subContainer} key={code}>
      <View style={styles.subCode}>
        <Text style={styles.txt}>{code}</Text>
      </View>
      <View style={styles.codeMean}>
        <Text style={styles.subtxt}>{description}</Text>
        <Text style={styles.subtxt}>{units}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={profileImage} style={styles.image} />
          <Text style={styles.name}>{profileData.fullName}</Text>
          <Text style={styles.course}>{profileData.course}</Text>
        </View>
      </View>
      <View style={styles.subject}>
        <Text>My Subjects</Text>
      </View>
      <View>{classList.map((item) => renderClassItem(item))}</View>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Click here to see more</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 25,
  },
  header: {
    height: '25%',
    backgroundColor: '#75DDDD',
    marginBottom: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  profile: {
    margin: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  subject: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  subContainer: {
    backgroundColor: '#d7d9d7',
    padding: 6,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  subCode: {
    padding: 10,
    width: '20%',
  },
  txt: {
    fontWeight: 'bold',
  },
  codeMean: {
    width: '75%',
    padding: 10,
  },
  subtxt: {
    fontSize: 12,
  },
  footer: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  footerTxt: {
    color: 'blue',
  },
});

export default App;
