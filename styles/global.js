import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const globalStyles = StyleSheet.create({

// layout styles
  gradient: {
    flex: 1,
  },
  head: {
    flex: 1,
    padding: 10,
  },
  body: {
    padding: 10,
    alignSelf: "stretch",
  },
  searchUser: {
    flexDirection: 'row',
    padding: 5,
  },
  chitContent: {
    flexDirection: 'row',
    padding: 5,
  },
  profileLay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

// text styles
  text: {
    alignSelf: "stretch",
  },
  headingtext: {
    fontFamily: 'cursive',
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
    fontSize: 26,
    padding: 5,
    alignSelf: 'center',
  },
  headingtextUT: {
    fontFamily: 'cursive',
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
    fontSize: 26,
    padding: 5,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  nameText: {
    fontFamily: 'cursive',
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
    fontSize: 32,
    padding: 5,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  chitStamps: {
    color: '#000',
    fontSize: 13,
    padding: 5,
  },

//text input styles
  input: {
    backgroundColor: '#495978',
    color: '#fff',
    borderWidth: 0.4,
    borderColor: '#000',
    alignItems: 'center',
    alignSelf: "stretch",
  },
  searchBarHome: {
    flex: 1,
    backgroundColor: '#495978',
    color: '#fff',
    borderWidth: 0.4,
    borderColor: '#000',
    alignItems: 'center',
    alignSelf: "stretch",
  },
  chitContentHome: {
    flex: 1,
    backgroundColor: '#74CFFF',
    color: '#fff',
    borderWidth: 0.4,
    borderColor: '#000',
    alignItems: 'center',
    alignSelf: "stretch",
  },

// picture styles
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 300,
  },
  profilePic: {
    padding:5,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  chitPic: {
    padding:5,
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: '#000',
  },
  bigPic: {
    flexDirection: 'row',
    height: 180,
    width: 180,
    borderWidth: 1,
    borderColor: '#000',
  },

// button styles
  homePageButtons: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
  },
  chitButtons: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  profileButtonLay: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  topButtons: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  buttons: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    padding: 5,
  },
});
