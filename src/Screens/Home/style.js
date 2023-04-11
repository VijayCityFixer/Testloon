import {Platform, StyleSheet, Appearance} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    width: wp(40),
    height: hp(4),
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    marginLeft: wp(3),
    marginVertical: hp(1),
  },
  selectedTextStyle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.normal,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
  },
  icon: {
    marginRight: 5,
  },
  exploreBtn: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.normal,
    textAlign: 'center',
    alignSelf: 'center',
    padding: hp(1),
    paddingHorizontal: wp(10),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    borderRadius: hp(5),
    marginVertical: hp(2),
  },
  mainView: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(5),
  },
  headerImage: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  subTitle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    paddingHorizontal: wp(6),
  },
});
export default styles;
