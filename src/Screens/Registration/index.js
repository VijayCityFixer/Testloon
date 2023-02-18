import React, {Component, Profiler} from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Logo, Hotal, user} from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Headers} from '../../components';
import {InputText, Button} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.logoStyle} source={Logo} />
        <View style={styles.container}>
          <Headers
            onPress={() => this.props.navigation.goBack()}
            isBack={true}
            title={'Registration'}
          />
          <View style={styles.editBtnView}>
            <Image source={user} style={{height: hp(10), width: hp(10)}} />
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons color={'white'} name="edit" size={wp(5)} />
            </TouchableOpacity>
          </View>
          <InputText
            placeholder={'Enter your full name'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={txt => this.setState({fullName: txt})}
            errorText={this.state.isNameError}
          />
          <InputText
            placeholder={'Enter your email id'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={txt => this.setState({email: txt})}
            isError={this.state.isEmailError}
          />
          <InputText
            placeholder={'Enter Password'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={txt => this.setState({password: txt})}
            isError={this.state.isPasswordError}
          />
          <InputText
            placeholder={'Confirm Password'}
            inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={styles.textInput}
            onChangeText={txt => this.setState({confirmPassword: txt})}
            isError={this.state.isConfirmPwdError}
          />

          <Button
            style={{
              width: wp(45),
              marginBottom: hp(4),
              alignSelf: 'center',
              marginVertical: hp(4),
            }}
            title={'Register'}
          />
        </View>
      </View>
    );
  }
}

export default Registration;
