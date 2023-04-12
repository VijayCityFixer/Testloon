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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const COLOR_SCHEME = Appearance.getColorScheme();

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      number: '',
      password: '',
      confirmPassword: '',
      isNameError: '',
      isPhoneError: '',
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
                    <KeyboardAwareScrollView  style={{flex:1}}>
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
              onChangeText={txt => this.setState({number: txt})}
              isError={this.state.isPhoneError}
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
            <Text style={styles.textInput}>Add Image</Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.plusBtn}>
                <Entypo color={'black'} name="plus" size={20} />
              </TouchableOpacity>
            </View>
            <Button style={styles.btnStyle} title={'Submit'} />
          </ScrollView>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

export default JoinUs;
