import React, { Component } from 'react';
import { View,Appearance,Image,Text,StatusBar} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import { InputText,Button } from "../../components";
import { Logo } from "../../assets";
/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
     <View style={{flex:1,backgroundColor:DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,alignItems:'center',justifyContent:'center'}}>
       <StatusBar
          backgroundColor={DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen}
        />
      <View style={{
        width:wp(100),
        backgroundColor:DynamicAppStyles.colorSet[COLOR_SCHEME].White,
        borderTopRightRadius:hp(20),
        borderTopLeftRadius:hp(7),
        borderBottomLeftRadius:hp(20),
        borderBottomRightRadius:hp(2),
        justifyContent:'center',
        alignItems:'center'
        }}>
          <Image style={{height:hp(10),width:hp(10),marginVertical:hp(3.5)}}
          source={Logo} />
          <Text 
          style={{
            color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
            fontSize: DynamicAppStyles.fontSize.large,
            fontFamily: DynamicAppStyles.fontFamily.RubikExtraBold,
            marginBottom:hp(4)
          }}>Login</Text>
          <InputText
          placeholder={"Enter Username"}
          inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal}}
          placeholderTextColor={DynamicAppStyles.colorSet[COLOR_SCHEME].Silver}
          inputtextstyle={{marginBottom:hp(4),marginLeft:wp(12),marginRight:wp(6)}}
          />
           <InputText
          placeholder={"Enter Password"}
          inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal}}
          placeholderTextColor={DynamicAppStyles.colorSet[COLOR_SCHEME].Silver}
          inputtextstyle={{marginBottom:hp(10),marginLeft:wp(12),marginRight:wp(6)}}
          />
          <Button
            style={{width:wp(45),marginBottom:hp(4)}}
            title={'Login'}
          />
      </View>
     </View>
    );
  }
}

export default Login;
