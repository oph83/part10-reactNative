import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#24292e',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white'
  },
});

const AppBar = () => {
  return <View style={styles.container}>
           <ScrollView horizontal >
              <Pressable >
                <Link to="/">
                  <Text style={styles.bigText}>Repositories  </Text>
                </Link>
              </Pressable>
              <Pressable >
                <Link to="/signIn">
                  <Text style={styles.bigText}>Sign In  </Text>
                </Link>
              </Pressable>
            </ScrollView>
         </View>;
};

export default AppBar;