import { Platform, StyleSheet, Appearance } from 'react-native';
import { DynamicAppStyles } from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  backicon: {
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
  radioView: {
    height: hp(3), width: hp(3), borderRadius: hp(1.5), borderColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black, alignItems: 'center', justifyContent: 'center', borderWidth: 2.5
  },
  logo: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  containerView: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
  },
  titleText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.normal,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    marginVertical: hp(2),
  },
  editText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
  },
  guestView: {
    padding: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: hp(2),
    marginTop: hp(1)
  },
  subText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    marginVertical: hp(0.5),
  },
  paymentlabel: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    width: wp(52)
  }
});
export default styles;
