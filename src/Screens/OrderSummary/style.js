import {Platform, StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  BackIcon: {
    marginLeft: wp(6),
  },
  selectedTextStyle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.normal,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
  },
  icon: {
    marginRight: 5,
  },
  dropdown: {
    borderWidth: 0,
    height: hp(4),
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    marginLeft: wp(3),
    marginVertical: hp(1),
  },
  normalText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    width: wp(80),
    marginBottom: hp(0.7),
  },
  titleText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    marginVertical: hp(2),
  },
  detailsView: {
    borderWidth: 1,
    borderRadius: hp(2),
    paddingVertical: hp(2),
    paddingLeft: wp(10),
  },
  bookBtn: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    borderRadius: hp(1),
    marginVertical: hp(2),
    marginHorizontal: wp(4),
  },
  btnText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.normal,
  },
});
export default styles;
