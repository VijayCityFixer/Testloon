import React, { Component, Profiler } from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Logo, user } from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Headers } from '../../components';
import { InputText, Button } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import checkAllFields from '../../utils/checkValidation';
import { strings } from '../../localization';
import { emailRegex } from '../../theme/regex';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isNameError: '',
      isEmailError: '',
      isPasswordError: '',
      isConfirmPwdValid: '',
      errorText: {}
    };
  }

  componentDidMount() { }
  getValidationFiled(type) {
    switch (type) {
      case strings.email:
        return {
          value: this.state.email,
          rules: { required: true, regex: emailRegex },
          name: strings.email,
          error: '',
        };
      case strings.fullName:
        return {
          value: this.state.fullName,
          rules: { required: true },
          name: strings.fullName,
          error: '',
        };
      case strings.confirmPassword:
        return {
          value: this.state.confirmPassword,
          rules: { required: true },
          name: strings.confirmPassword,
          error: '',
        };
      case strings.password:
        return {
          value: this.state.password,
          rules: { required: true },
          name: strings.password,
          error: '',
        };
    }
  }
  validateHandler = () => {
    checkAllFields({
      formData: {
        fullName: this.getValidationFiled(strings.fullName),
        email: this.getValidationFiled(strings.email),
        password: this.getValidationFiled(strings.password),
        confirmPassword: this.getValidationFiled(strings.confirmPassword),
      },
    }).then(async (response) => {
      if (response.valid && this.state.password == this.state.confirmPassword) {
        var details = {
          fulllname: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
        }
        this.props.navigation.navigate('ChangeNumber', { data: details })
      }
      else {
        if (
          this.state.password !== '' &&
          this.state.confirmPassword !== '' &&
          this.state.password !== this.state.confirmPassword
        ) {
          this.setState({
            error: {
              ...this.state.error,
              ...response.error,
              confirmPassword: 'The value should be the same.',
            },
          });
        } else {
          this.setState({ error: { ...response.error } });
        }

      }
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.logoStyle} source={Logo} />
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Headers
              onPress={() => this.props.navigation.goBack()}
              isBack={true}
              title={'Registration'}
            />
            <View style={styles.editBtnView}>
              <Image source={user} style={{ height: hp(12), width: hp(12) }} />
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => this.props.navigation.goBack()}>
                <MaterialIcons color={'white'} name="edit" size={wp(5)} />
              </TouchableOpacity>
            </View>
            <InputText
              placeholder={'Enter your full name'}
              inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={{
                marginBottom: hp(1),
                marginHorizontal: wp(10),
              }}
              onChangeText={txt => this.setState({ fullName: txt })}
              errorText={this.state.error?.fullName}
            />
            <InputText
              placeholder={'Enter your email id'}
              inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={{
                marginBottom: hp(1),
                marginHorizontal: wp(10),
              }}
              onChangeText={txt => this.setState({ email: txt })}
              errorText={this.state.error?.email}
            />
            <InputText
              placeholder={'Enter Password'}
              inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={{
                marginBottom: hp(1),
                marginHorizontal: wp(10),
              }}
              onChangeText={txt => this.setState({ password: txt })}
              errorText={this.state.error?.password}
            />
            <InputText
              placeholder={'Confirm Password'}
              inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={styles.textInput}
              onChangeText={txt => this.setState({ confirmPassword: txt })}
              errorText={this.state.error?.confirmPassword}
            />

            <Button onPress={() => this.validateHandler()} style={styles.btnStyle} title={'Register'} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Registration;
