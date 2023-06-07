import React, { Component } from 'react';
import { View, Appearance, Image, Text, StatusBar } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import { InputText, Button } from '../../components';
import { Logo } from '../../assets';
import styles from './style';
/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      isOtp: false,
      phoneNumber: '',
    };
  }
  handleChange = otp => this.setState({ otp });
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen}
        />
        <View style={[styles.mainView]}>
          <Image style={{ height: hp(9), width: hp(9), marginVertical: hp(4) }} source={Logo} />
          <InputText
            placeholder={'Your current password'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginHorizontal: wp(8),
            }}
            maxlength={8}
            secureTextEntry={true}
            onChangeText={txt => this.setState({ password: txt })}
            isError={this.state.isPasswordError}
          />
          <InputText
            placeholder={'Your new password'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginHorizontal: wp(8),
            }}
            maxlength={8}
            secureTextEntry={true}
            onChangeText={txt => this.setState({ confirmPassword: txt })}
            isError={this.state.isConfirmPwdError}
          />
          <InputText
            placeholder={'Your new confirm password'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginHorizontal: wp(8),
            }}
            maxlength={8}
            secureTextEntry={true}
            onChangeText={txt => this.setState({ confirmPassword: txt })}
            isError={this.state.isConfirmPwdError}
          />
          <Button
            onPress={() => this.props.navigation.goBack()}
            style={{ width: wp(45), marginBottom: hp(4) }}
            title={'Update'}
          />
        </View>
      </View>
    );
  }
}

export default ChangePassword;
