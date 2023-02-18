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
import {Headers} from '../../components';
import {InputText, Button} from '../../components';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

const COLOR_SCHEME = Appearance.getColorScheme();

class JoinUs extends Component {
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
            title={'Join Us'}
          />
          <ScrollView>
            <InputText
              placeholder={'Enter your full name'}
              inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={styles.textInput}
              onChangeText={txt => this.setState({fullName: txt})}
              errorText={this.state.isNameError}
            />
            <InputText
              placeholder={'Enter your contact number'}
              inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={styles.textInput}
              onChangeText={txt => this.setState({email: txt})}
              isError={this.state.isEmailError}
            />
            <Dropdown
              style={[styles.dropdown]}
              data={this.state.City}
              selectedTextStyle={styles.selectedTextStyle}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={'1'}
              placeholder={'Select City'}
              itemTextStyle={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
              }}
              onChange={item => {
                this.setState({currentCity: item.value});
              }}
              renderLeftIcon={() => null}
            />
            <Dropdown
              style={[styles.dropdown]}
              data={this.state.City}
              selectedTextStyle={styles.selectedTextStyle}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={'1'}
              placeholder={'Select City'}
              itemTextStyle={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
              }}
              onChange={item => {
                this.setState({currentCity: item.value});
              }}
              renderLeftIcon={() => null}
            />
            <InputText
              placeholder={'Enter Full Address'}
              inputstyle={{fontSize: DynamicAppStyles.fontSize.normal}}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              inputtextstyle={styles.textInput}
              onChangeText={txt => this.setState({password: txt})}
              isError={this.state.isPasswordError}
            />
            <InputText
              placeholder={'Description'}
              inputstyle={{
                fontSize: DynamicAppStyles.fontSize.normal,
                height: hp(20),
                textAlignVertical: 'top',
              }}
              placeholderTextColor={
                DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              multiline={true}
              inputtextstyle={styles.textInput}
              onChangeText={txt => this.setState({confirmPassword: txt})}
              isError={this.state.isConfirmPwdError}
            />
            <Text style={{marginLeft: wp(6)}}>Add Image</Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  marginVertical: hp(2),
                  height: hp(6),
                  width: hp(6),
                  backgroundColor:
                    DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Entypo
                  style={styles.icon}
                  color={'black'}
                  name="plus"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Button
              style={{
                width: wp(45),
                marginBottom: hp(4),
                alignSelf: 'center',
                marginVertical: hp(4),
              }}
              title={'Submit'}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default JoinUs;
