import {StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  mainTitle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    // marginRight:wp(14)
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
    marginVertical: hp(2),
  },
});
export default styles;
