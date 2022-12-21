import { StyleSheet,Appearance } from "react-native";
import { DynamicAppStyles } from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].red,
    width:'100%',
    height:hp(22),
    marginVertical:hp(1)
  },
 
});
export default styles;
