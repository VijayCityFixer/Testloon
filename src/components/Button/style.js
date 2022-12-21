import { StyleSheet,Appearance } from "react-native";
import { DynamicAppStyles } from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    paddingVertical: wp(2.5),
    borderRadius: wp(2.6),
  },
  TxtTitle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikExtraBold,
  }
});
export default styles;
