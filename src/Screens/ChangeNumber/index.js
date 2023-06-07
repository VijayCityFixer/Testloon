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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class ChangeNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      isOtp: false,
      phoneNumber: '',
    };
  }
  handleChange = otp => this.setState({otp});
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen}
        />
        <View style={[styles.mainView,this.state.isOtp&&{justifyContent:'center'}]}>
          <View style={{marginBottom: hp(3.5), alignItems: 'center'}}>
            <Image style={{height: hp(9), width: hp(9)}} source={Logo} />
            {this.state.isOtp && (
              <Text style={styles.otpText}>
                Enter OTP sended to {this.state.phoneNumber}
              </Text>
            )}
          </View>

          {this.state.isOtp ? (
            <CodeField
              value={this.state.otp}
              onChangeText={t => this.setState({otp: t})}
              cellCount={4}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          ) : (
            <InputText
              keyboardType={'numbers-and-punctuation'}
              placeholder={'Enter your number'}
              maxlength={10}
              isPhone={true}
              onChangeText={t => this.setState({phoneNumber: t})}
              value={this.state.phoneNumber}
              inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={{
                marginBottom: hp(4),
                marginHorizontal: wp(10),
              }}
            />
          )}
          <Button
            onPress={() =>
              this.state.isOtp
                ? this.props.route?.params?.fromRegister
                  ? this.props.navigation.navigate('Registration')
                  : this.setState({isOtp: false})
                : this.setState({isOtp: true})
            }
            style={{width: wp(45), marginBottom: hp(4)}}
            title={this.state.isOtp ? 'Verify' : 'Proceed'}
          />
        </View>
      </View>
    );
  }
}

export default ChangeNumber;
