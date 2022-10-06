import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import { ME } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

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
  const [user, setUser] = useState(null)
  console.log(user)

  const authStorage = useAuthStorage()

  const accessToken = authStorage.getAccessToken()

  const { data } = useQuery(ME, {
    authorization: `Bearer ${accessToken}`,
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    setUser(data)
  }, [data]);

  const signOut = useSignOut()
  
  return <View style={styles.container}>
           <ScrollView horizontal >
              <Pressable >
                <Link to="/">
                  <Text style={styles.bigText}>Repositories  </Text>
                </Link>
              </Pressable>
            {user?.me ?
              <Pressable onPress={signOut}>
                <Text style={styles.bigText}>Sign Out  </Text>
              </Pressable>
              :
              <Pressable >
              <Link to="/signIn">
                <Text style={styles.bigText}>Sign In  </Text>
              </Link>
            </Pressable>
            }
            </ScrollView>
         </View>;
};

export default AppBar;