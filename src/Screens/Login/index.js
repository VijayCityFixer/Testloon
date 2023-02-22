import React, {Component} from 'react';
import {View, Appearance, Image, Text, StatusBar} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import {InputText, Button} from '../../components';
import {Logo} from '../../assets';
import styles from './style';
/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen}
        />
        <View style={styles.mainView}>
          <Image
            style={{height: hp(10), width: hp(10), marginVertical: hp(3.5)}}
            source={Logo}
          />
          <Text style={styles.loginText}>Login</Text>
          <InputText
            placeholder={'Enter Username'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              width: wp(80),
            }}
          />
          <InputText
            placeholder={'Enter Password'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(10),
              width: wp(80),
            }}
          />
          <Button
            onPress={() => this.props.navigation.push('BottomTab')}
            style={{width: wp(45), marginBottom: hp(4)}}
            title={'Login'}
          />
        </View>
      </View>
    );
  }
}

export default Login;
