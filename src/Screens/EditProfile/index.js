import React, { Component, Profiler } from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Logo, Hotal, user } from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Headers } from '../../components';
import { InputText, Button } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount() { }
  onStarRatingPress = n => {
    this.setState({ starCount: n });
  };
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
            title={'Edit Profile'}
          />
          <View style={styles.editBtnView}>
            <Image source={user} style={{ height: hp(10), width: hp(10) }} />
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons color={'white'} name="edit" size={wp(5)} />
            </TouchableOpacity>
          </View>
          <InputText
            placeholder={'Enter your first name'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={t => this.setState({ firstName: t })}
          />
          <InputText
            placeholder={'Enter your last name'}
            inputstyle={{ fontSize: DynamicAppStyles.fontSize.normal }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={t => this.setState({ lastName: t })}
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle]}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChangeNumber')}>
            <View style={styles.btnView}>
              <Text style={styles.normalText}>Change number</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle]}
          />
          <Button
            style={styles.btnView}
            title={'Update'}
          />
        </View>
      </View>
    );
  }
}

export default EditProfile;
