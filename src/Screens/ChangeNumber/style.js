import {Platform, StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  mainView: {
    width: wp(100),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    borderTopRightRadius: hp(20),
    borderTopLeftRadius: hp(7),
    borderBottomLeftRadius: hp(20),
    borderBottomRightRadius: hp(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp(60),
  },
  container: {
    flex: 1,
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: hp(5),
    height: hp(5),
    lineHeight: hp(5),
    fontSize: DynamicAppStyles.fontSize.xmiddium,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    borderWidth: 1,
    borderColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Nero,
    textAlign: 'center',
    marginRight: wp(4),
    borderRadius: 5,
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
  },
  focusCell: {
    borderColor: '#000',
  },
  otpText: {
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].DimGray,
    marginTop: hp(2),
  },
});
export default styles;
