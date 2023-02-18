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
import StarRating from 'react-native-star-rating';
import {Headers} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      listData: [],
    };
  }

  componentDidMount() {}
  onStarRatingPress = n => {
    this.setState({starCount: n});
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
          <Headers title={'Profile'} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={user}
              style={{height: wp(15), width: wp(15), marginStart: wp(5)}}
            />
            <View>
              <Text style={styles.normalText}>Vishal Parmar</Text>
              <Text style={styles.normalText}>8460300912</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChangeNumber')}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle]}
          />
          <TouchableOpacity>
            <View style={styles.btnView}>
              <Text style={styles.normalText}>Join us</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle, {height: hp(0.5)}]}
          />
          <TouchableOpacity>
            <View style={styles.btnView}>
              <Text style={styles.editText}>Logout</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle, {height: hp(0.5)}]}
          />
          <TouchableOpacity>
            <View style={styles.btnView}>
              <Text style={styles.normalText}>Rate Us</Text>
            </View>
          </TouchableOpacity>
          <View style={{marginHorizontal: wp(4), marginTop: hp(2)}}>
            <StarRating
              disabled={false}
              maxStars={5}
              starSize={hp(4)}
              rating={this.state.starCount}
              containerStyle={{width: wp(70), alignSelf: 'center'}}
              fullStarColor={DynamicAppStyles.colorSet[COLOR_SCHEME].Black}
              emptyStarColor={DynamicAppStyles.colorSet[COLOR_SCHEME].Silver}
              selectedStar={rating => this.onStarRatingPress(rating)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
