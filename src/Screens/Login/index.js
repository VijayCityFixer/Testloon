import React, {Component} from 'react';
import {
  View,
  Appearance,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
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
    this.state = {
      userName: '',
      password: '',
    };
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
            placeholder={'Enter Email'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              width: wp(80),
            }}
            onChangeText={t => this.setState({userName: t})}
          />
          <InputText
            placeholder={'Enter Password'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(1),
              width: wp(80),
            }}
            onChangeText={t => this.setState({password: t})}
          />
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: wp(10)}}
            onPress={() =>
              this.props.navigation.navigate('ChangeNumber', {
                fromRegister: true,
              })
            }>
            <Text
              style={{
                fontSize: DynamicAppStyles.fontSize.xsmall,
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].NeonBlue,
                textDecorationLine: 'underline',
              }}>
              Create new account?
            </Text>
          </TouchableOpacity>
          <Button
            onPress={() =>
              this.props.navigation.push('BottomTab', {screen: 'Home'})
            }
            style={{width: wp(45), marginBottom: hp(4), marginTop: hp(8)}}
            title={'Login'}
          />
        </View>
      </View>
    );
  }
}

export default Login;
