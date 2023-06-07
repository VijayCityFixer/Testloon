import React, {Component} from 'react';
import {View, Appearance, ScrollView, Image} from 'react-native';
import {HotalDetails} from '../../components';
import {Logo, Hotal} from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import {InputText, Button} from '../../components';
import SearchInput, {createFilter} from 'react-native-search-filter';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const KEYS_TO_FILTERS = ['title'];

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          Hotal: Hotal,
          title: 'La cassa',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Hotal H',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Darshan INN',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'La cassa',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Hotal H',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Darshan INN',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
      ],
      searchText: '',
      searchData: [],
      currentCity: '1',
    };
  }
  searchData = txt => {
    var filteredData = this.state.Data.filter(
      createFilter(txt, KEYS_TO_FILTERS),
    );
    this.setState({searchData: filteredData});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.headerImage} source={Logo} />
        <View style={styles.mainView}>
          <InputText
            placeholder={'Search farmhouse,location'}
            searchlable={true}
            onChangeText={txt => this.searchData(txt)}
            inputstyle={{
              fontSize: DynamicAppStyles.fontSize.normal,
              borderWidth: 0,
              paddingLeft: wp(4),
              height: hp(5.5),
              
            }}
            placeholderTextColor={
              DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
            }
            inputtextstyle={{
              borderRadius: hp(2),
              marginHorizontal: wp(4),
              marginVertical: hp(2),
              borderWidth: 1,
              borderColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
            }}
          />
          <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#bcbcbc', '#000']}
        style={[styles.linearStyle]}
      />
          <ScrollView>
            {this.state.searchData?.length > 0 &&
              this.state.searchData.map(item => {
                return (
                  <HotalDetails
                    style={{width: wp(90), marginBottom: hp(2)}}
                    image={Hotal}
                    title={'La cassa'}
                    subTitle={'Anand,Gujarat'}
                    price={799}
                    mrp={1499}
                    discount={'50% off'}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Search;
