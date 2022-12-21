import React, { Component } from 'react';
import { View,Appearance} from 'react-native';


/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
     <View style={{flex:1,backgroundColor:'red'}}></View>
    );
  }
}

export default Profile;
