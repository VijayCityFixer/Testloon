import {Platform, StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(6),
  },
  titleText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.normal,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    marginVertical: hp(2),
  },
  detailText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
  },
  btn: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.large,
    textAlign: 'center',
    padding: hp(1),
    paddingHorizontal: wp(10),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    borderRadius: hp(1),
    marginVertical: hp(2),
    overflow:'hidden'
  },
  mainTitle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
  },
  viewBtn: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.normal,
    textAlign: 'center',
    alignSelf: 'center',
    padding: hp(1.4),
    paddingHorizontal: wp(15),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    borderRadius: hp(2.8),
    overflow:'hidden'
  },
  container: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
  },
  logoImage: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  priceText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikSemiBold,
    marginRight: wp(2),
  },
  mrpText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikSemiBold,
    textDecorationLine: 'line-through',
    marginRight: wp(2),
  },
  offText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikLight,
  },
  mrpView: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginLeft: wp(5),
  },
});
export default styles;
