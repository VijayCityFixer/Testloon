import React, { Component } from 'react';
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
import { DynamicAppStyles } from '../../theme';
import { InputText, Button } from '../../components';
import { Logo } from '../../assets';
import styles from './style';
import { UserController } from '../../controller';
/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: "",
      EmailError: ""
    };
  }
  validate = () => {
    var isValid = true
    if (this.state.email == "") {
      isValid = false
      this.setState({ EmailError: "Email is required." })
    } else {
      this.setState({ EmailError: "" })
    }
    if (this.state.password == "") {
      isValid = false
      this.setState({ passwordError: "Password is required." })
    } else {
      this.setState({ passwordError: "" })
    }
    if (isValid) {
      this.loginUser()
    }
  }
  loginUser = () => {
    var details = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      UserController.userLogin(details)
        .then(response => {
          this.setState({ email: "", password: "" })
          this.props.navigation.push('BottomTab', { screen: 'Home' })
          console.log('response==============>', response);
        })
        .catch(error => {
          console.log('error==============>', error);
          this.setState({ isLoading: false });
        });
    } catch (error) {
      console.log('error==============>', error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen}
        />
        <View style={styles.mainView}>
          <Image
            style={{ height: hp(10), width: hp(10), marginVertical: hp(3.5) }}
            source={Logo}
          />
          <Text style={styles.loginText}>Login</Text>
          <InputText
            placeholder={'Enter Email'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              width: wp(80),
            }}
            onChangeText={t => this.setState({ email: t })}
            errorText={this.state.EmailError}
          />
          <InputText
            placeholder={'Enter Password'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(1),
              width: wp(80),
            }}
            onChangeText={t => this.setState({ password: t })}
            errorText={this.state.passwordError}
          />
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginRight: wp(10) }}
            onPress={() =>
              this.props.navigation.navigate('Registration')
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
              this.validate()
            }
            style={{ width: wp(45), marginBottom: hp(4), marginTop: hp(8) }}
            title={'Login'}
          />
        </View>
      </View>
    );
  }
}

export default Login;
