import { View, Text,SafeAreaView, ScrollView, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import FeaturedCard from './components/FeaturedCard';
import PopularCard from './components/PopularCard';

const HomeScreen = ({route}) => {
  const { name, email} = route.params
  const featureData = [
    { id: '1', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '2', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '3', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '4', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '5', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    // ... more data
  ];

  const popularData = [
    { id: '1', image: require('./assets/burgerKing.png'), job: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '2', image: require('./assets/burgerKing.png'), job: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '3', image: require('./assets/burgerKing.png'), job: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '4', image: require('./assets/burgerKing.png'), job: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '5', image: require('./assets/burgerKing.png'), job: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
  ];

  return (
   <SafeAreaView style={styles.container}>
<ScrollView>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      </View>
      <TextInput style={styles.search} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featureData}
        renderItem={({ item }) => <FeaturedCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularData}
        renderItem={({ item }) => <PopularCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.verticalList}
      />
    </ScrollView>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#6C757D',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  search: {
    height: 50,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    marginBottom: 20,
  },
  verticalList: {
    flex: 1,
  },
});

export default HomeScreen;

