import { Platform, StyleSheet, Appearance } from 'react-native';
import { DynamicAppStyles } from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(6),
  },
  logoStyle: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  container: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
  },
  titleText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
  },
  normalText1: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    marginBottom: hp(1),
    width: wp(30),
  },
  normalText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    marginBottom: hp(1),
    width: wp(50),
  },
  detailsView: {
    borderWidth: 1,
    borderRadius: hp(2),
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    marginBottom: hp(2),
  },
  headerView: {
    flexDirection: 'row',
    width: wp(100),
    height: hp(9),
    alignItems: 'center',
  },
  headerText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xmiddium,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    width: wp(50),
    textAlign: 'center',
    paddingVertical: hp(1),
  },
  linearStyle: {
    height: hp(1.5),
    width: wp(100),
    marginBottom: hp(2),
  },
  btnView: {
    width: wp(60),
    alignSelf: 'center',
    paddingVertical: hp(1),
    marginVertical: hp(1),
    borderRadius: hp(2.5),
  }
});
export default styles;
