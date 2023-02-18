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
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.large,
    fontFamily: DynamicAppStyles.fontFamily.RubikExtraBold,
    marginBottom: hp(4),
  },
  container: {
    flex: 1,
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
