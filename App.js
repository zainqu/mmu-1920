import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import { globalStyles } from '../Chittr/styles/global'

const Stack = createStackNavigator();

export default class ChittrApp extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     isLoading: true,
  //     chitData:[]
  //   }
  // }

  getChitData = () => {
    return fetch("http://10.0.2.2/api/v0.0.5/user",
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        chitData: responseJson,
      });
    })
    .catch((error) =>{
      console.log(error);
    });
  }

  // componentDidMount(){
  //  this.getChitData();
  // }

  // componentDidMount () {
  //   return fetch('http://localhost:3333/api/v0.0.5/chits')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({
  //       isLoading: false,
  //       chitContentSource: responseJson.chit_content,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     given_name: '',
  //     family_name: '',
  //     email: '',
  //     password: ''
  //   };
  //   this.createUser = this.createUser.bind(this);
  // }

  createUser = () => {
    return fetch("http://10.0.2.2/api/v0.0.5/user",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert("Successfully created user!");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="logIn" component={logIn} />
          <Stack.Screen name="signUp" component={signUp} />
          <Stack.Screen name="homePage" component={homePage} />
          <Stack.Screen name="searchResults" component={searchResults} />
          <Stack.Screen name="ownProfile" component={ownProfile} />
          <Stack.Screen name="userProfile" component={userProfile} />
          <Stack.Screen name="following" component={following} />
          <Stack.Screen name="followers" component={followers} />
          <Stack.Screen name="updateProfile" component={updateProfile} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

function logIn ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.body}>
          <View style={globalStyles.text}>
            <Text style={globalStyles.headingtext}> Email Address: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Tap to enter Email" />
            </View>
            <Text style={globalStyles.headingtext}> Password: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Tap to enter Password" />
            </View>
          </View>
        </View>
        <View style={globalStyles.body}>
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="Login!"
              onPress={() => navigation.navigate('homePage')} />
          </View>
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="New User? Click here to sign up!"
              onPress={() => navigation.navigate('signUp')} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

function signUp ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.body}>
          <View style={globalStyles.text}>
            <Text style={globalStyles.headingtext}> Input Given Name: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Given Name" />
            </View>
            <Text style={globalStyles.headingtext}> Input Family Name: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Family Name" />
            </View>
            <Text style={globalStyles.headingtext}> Input Email Address: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Email" />
            </View>
            <Text style={globalStyles.headingtext}> Input Password: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Password" />
            </View>
          </View>
        </View>
        <View style={globalStyles.body}>
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="Create Account!"
              onPress={() => navigation.navigate('logIn')} />
          </View>
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="Existing User? Click here to log in!"
              onPress={() => navigation.navigate('logIn')}  />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

function homePage ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.searchUser}>
          <TextInput style={globalStyles.searchBarHome} placeholder="Search for User" />
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="Search!"
              onPress={() => navigation.navigate('searchResults')} />
          </View>
        </View>
        <View style={globalStyles.searchUser}>
          <Image
            style={globalStyles.profilePic}
            source={require('./ownpic.png')}
            resizeMode="contain" />
          <TextInput style={globalStyles.searchBarHome} placeholder="Create Post..." />
        </View>
        <View style={globalStyles.homePageButtons}>
          <Button color="#C7C7C7" title="Profile"
            onPress={() => navigation.navigate('ownProfile')} />
          <Button color="#C7C7C7" title="Log Out"
            onPress={() => navigation.navigate('logIn')} />
          <Button color="#C7C7C7" title="Attach Photo"
            onPress={() => navigation.navigate('logIn')} />
          <Button color="#C7C7C7" title="Post!"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <Text style={globalStyles.headingtext}> Latest Chits: </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function searchResults ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="Back to homepage"
            onPress={() => navigation.navigate('homePage')} />
          <Button color="#C7C7C7" title="Profile"
            onPress={() => navigation.navigate('ownProfile')} />
        </View>
        <Text style={globalStyles.headingtextUT}> Result for 'search term': </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function ownProfile ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <View style={globalStyles.profileLay}>
          <Image
            style={globalStyles.bigPic}
            source={require('./ownpic.png')}
            resizeMode="contain" />
          <View style={globalStyles.profileButtonLay}>
            <Button color="#C7C7C7" title="Update Profile"
              onPress={() => navigation.navigate('updateProfile')} />
            <Button color="#C7C7C7" title="Homepage"
              onPress={() => navigation.navigate('homePage')} />
            <Button color="#C7C7C7" title="Followers"
              onPress={() => navigation.navigate('followers')} />
            <Button color="#C7C7C7" title="Following"
              onPress={() => navigation.navigate('following')} />
          </View>
        </View>
        <Text style={globalStyles.nameText}> First Name Second Name </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./ownpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./ownpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function userProfile ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <View style={globalStyles.profileLay}>
          <Image
            style={globalStyles.bigPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <View style={globalStyles.profileButtonLay}>
            <Button color="#C7C7C7" title="Unfollow"
              onPress={() => navigation.navigate('logIn')} />
            <Button color="#C7C7C7" title="Homepage"
              onPress={() => navigation.navigate('homePage')} />
            <Button color="#C7C7C7" title="Followers"
              onPress={() => navigation.navigate('followers')} />
            <Button color="#C7C7C7" title="Following"
              onPress={() => navigation.navigate('following')} />
          </View>
        </View>
        <Text style={globalStyles.nameText}> First Name Second Name </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.chitContentHome}> Chit Content... </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Text style={globalStyles.chitStamps}> Location and TimeStamp </Text>
          <Button color="#C7C7C7" title="View Pic"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function following ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.topButtons}>
          <Button color="#C7C7C7" title="Homepage"
          onPress={() => navigation.navigate('homePage')} />
        <Button color="#C7C7C7" title="Back to Profile"
          onPress={() => navigation.navigate('userProfile')} />
        </View>
        <Text style={globalStyles.headingtextUT}> Following "First Name": </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function followers ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <Image
          style={globalStyles.logo}
          source={require('./logo.png')}
          resizeMode="contain" />
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="Homepage"
            onPress={() => navigation.navigate('homePage')} />
          <Button color="#C7C7C7" title="Back to Profile"
            onPress={() => navigation.navigate('userProfile')} />
        </View>
        <Text style={globalStyles.headingtextUT}> Followers of "First Name": </Text>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
        <View style={globalStyles.chitContent}>
          <Image
            style={globalStyles.chitPic}
            source={require('./userpic.png')}
            resizeMode="contain" />
          <Text style={globalStyles.headingtext}> First Name Last Name </Text>
        </View>
        <View style={globalStyles.chitButtons}>
          <Button color="#C7C7C7" title="View User"
            onPress={() => navigation.navigate('userProfile')} />
          <Button color="#C7C7C7" title="Follow/Unfollow"
            onPress={() => navigation.navigate('logIn')} />
        </View>
      </View>
    </LinearGradient>
  );
}

function updateProfile ({ navigation }) {
  return (
    <LinearGradient colors={['#2A4B6D', '#01BDFF', '#B8E7FF']} style={globalStyles.gradient}>
      <View style={globalStyles.head}>
        <View style={globalStyles.profileLay}>
          <Image
            style={globalStyles.bigPic}
            source={require('./ownpic.png')}
            resizeMode="contain" />
          <View style={globalStyles.profileButtonLay}>
            <Button color="#C7C7C7" title="Update Picture"
              onPress={() => navigation.navigate('logIn')} />
            <Button color="#C7C7C7" title="View Profile"
              onPress={() => navigation.navigate('ownProfile')} />
          </View>
        </View>
        <View style={globalStyles.body}>
          <View style={globalStyles.text}>
            <Text style={globalStyles.headingtext}> Input New Given Name: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Given Name" />
            </View>
            <Text style={globalStyles.headingtext}> Input New Family Name: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Family Name" />
            </View>
            <Text style={globalStyles.headingtext}> Input New Email: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Email" />
            </View>
            <Text style={globalStyles.headingtext}> Input New Password: </Text>
            <View style={globalStyles.input}>
              <TextInput placeholder="Enter Password" />
            </View>
          </View>
        </View>
        <View style={globalStyles.body}>
          <View style={globalStyles.buttons}>
            <Button color="#C7C7C7" title="Click here to commit changes!"
              onPress={() => navigation.navigate('homePage')} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
