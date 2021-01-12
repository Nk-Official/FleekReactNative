import React, {useState, useCallback} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Theme} from '../../../Utility/Theme';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import HomeScreenViewModel from './HomeScreenViewModel';
import DealsFlatList from './DealsFlatList';
import PageControl from 'react-native-page-control';
import SalonCell from './SalonCell';
const HomeScreen = () => {
  const [deals, salons] = HomeScreenViewModel();

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: Theme.primary, flex: 0.13}}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: '3%'}}>
          <View style={{flexDirection: 'row', marginLeft: 5, marginTop: 40}}>
            <Icon1 name="location-pin" size={20} color="#fff" />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: 5,
              }}>
              Ambala
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.searchView}>
            <TextInput
              placeholder="Search for salon and service"
              style={{marginLeft: 10, width: '80%', marginRight: 10}}
            />
            <Icon2
              name="search"
              size={30}
              style={{alignSelf: 'center', marginRight: 10}}
              color={Theme.primary}
            />
          </View>
        </View>
      </View>

      <View style={{marginTop: '15%', flex: 0.04}}>
        <FilterView />
      </View>
      <View style={{flex: 0.71}}>
        <ScrollView style={{flex: 1}}>
          <SalonsList json={salons} />
          <NearYou json={deals} />
        </ScrollView>
      </View>
    </View>
  );
};

const FilterView = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 30,
        alignItems: 'center',
      }}>
      <DropDown title="Category" />
      <DropDown title="Location" />
      <DropDown title="Rating" />
    </View>
  );
};

const DropDown = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{marginRight: 5, fontSize: 17, fontWeight: '300'}}>
        {props.title}
      </Text>
      <Icon2
        name="caret-down"
        size={20}
        color="black"
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

const NearYou = ({json}) => {
  if (json === undefined) {
    return null;
  }
  const dataAPi = json.data;
  const deals = dataAPi.data;
  const [currentPage, setCurrentPage] = useState(0);
  const _onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    const d = viewableItems; // viewableItems[0].index
    setCurrentPage(d[0].index);
  }, []);

  if (deals === undefined) {
    return null;
  }
  const totalItemWidth = Dimensions.get('window').width - 40;
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 20,
          marginTop: 12,
        }}>
        Salons near you
      </Text>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={DealsFlatList}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={() => {
          // console.log('scroll');
        }}
        onEndReached={() => {
          // console.log('onEndReached');
        }}
        // onScrollEndDrag={(props) => {
        //   const offsetX = props.nativeEvent.contentOffset.x;
        //   const index = offsetX / (Dimensions.get('window').width - 40);

        //   // console.log('onScrollEndDrag', index);
        // }}
        // onViewableItemsChanged={({viewableItems, changed}) => {
        //   console.log('onViewableItemsChanged', viewableItems, changed);
        // }}
        onViewableItemsChanged={_onViewableItemsChanged}
      />
      <PageControlNearBy
        numberOfPages={deals.length}
        currentPage={currentPage}
      />
    </View>
  );
};

const PageControlNearBy = (props) => {
  return (
    <PageControl
      style={{margin: 20, alignSelf: 'flex-start'}}
      numberOfPages={props.numberOfPages}
      currentPage={props.currentPage}
      hidesForSinglePage
      pageIndicatorTintColor="gray"
      currentPageIndicatorTintColor={Theme.primary}
      indicatorStyle={{borderRadius: 5}}
      currentIndicatorStyle={{borderRadius: 5}}
      indicatorSize={{width: 8, height: 8}}
      // onPageIndicatorPress={this.onItemTap}
    />
  );
};

const SalonsList = ({json}) => {
  // const responseData = json.data;
  console.log('salons api response', json);
  if (json === undefined) {
    return null;
  }
  const salonsData = json.data.data.salons;
  if (salonsData === undefined) {
    return null;
  }
  console.log('reach salons list', salonsData.length);
  return (
    <FlatList
      data={salonsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={SalonCell}
    />
  );
};

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    marginTop: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default HomeScreen;
