import React from 'react';
import {View, StyleSheet, Image, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';

const onboarding = () => {
  const [firstName, onChangeFirstName] = React.useState('');
  const [email,onChangeEmail] = React.useState('');
  const [validEmail,onEmailValidation] = React.useState(true);
  const [validName,onNameValidation] = React.useState(true);
  const onPress = () => Alert.alert('Button with adjusted color pressed');

  let onUpdatedFirstName = ( name: string ) => {

    if ( (!/[^a-zA-Z]/.test(name)) && name != '') {
      onChangeFirstName(name);
      onNameValidation(true);
    }
    else {
      onChangeFirstName(name);
      onNameValidation(false);
    }
}


  let onUpdatedEmail = ( email: string ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        onChangeEmail(email);
        onEmailValidation(true);
    }
    else {
        onChangeEmail(email);
        onEmailValidation(false);
    }
}
  return (
    <View style={{flex: 1, backgroundColor: '#CBD2D9'}}>
      <View style={{height: 175, backgroundColor: '#F1F4F7'}}>
      <View style={styles.container}>  
        <Image
          style={styles.logo}
          source={require('../../assets/images/Logo.png')}
        />
      </View>
      </View>
      <View style={{height: 200, backgroundColor: '#CBD2D9'}}>
        <View style={styles.container}>  
          <Text style={styles.headerText}>Let us get to know you</Text>
        </View>
      </View>
      <View style={{height: 400, backgroundColor: '#CBD2D9'}}>
        <View style={styles.bodyContainer}>  
          <Text style={styles.headerFirstName}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onUpdatedFirstName}
            value={firstName}
          />
          { !validName ? <Text style={styles.invalidEmail} >Invalid name contains invalid character or is empty </Text> : null }
          <Text style={styles.headerFirstName}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onUpdatedEmail}
            inputMode='email'
            value={email}
          />
          { !validEmail ? <Text style={styles.invalidEmail} >Invalid Email</Text> : null }
        </View>
        
      </View>
      <View style={{height: 150, backgroundColor: '#F1F4F7'}}>
      <View style={styles.footerContainer}>  
      <TouchableOpacity style={styles.button} onPress={onPress}  disabled={!validEmail || !validName}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  headerText:{
    fontSize: 20,
    fontWeight: 600,
    color: '#647582'
  },
  headerFirstName:{
    fontSize: 20,
    fontWeight: 600,
    color: '#647582'
  },
  invalidEmail:{
    fontSize: 10,
    fontWeight: 600,
    color: 'red'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: '#647582',
    padding: 10,
    borderRadius: 10
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  logo: {
   width: 400,
   height: 150
  },
  container: {
    justifyContent: 'center',
    alignItems:'center',
    height:150,
    paddingTop: 20
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems:'center',
    // height:150,
    paddingTop: 130
  },
  footerContainer: {
    paddingTop: 30,
    alignItems:'flex-end',
    paddingRight: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#CBD2D9',
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 600,
    color: '#647582'
  }
});
