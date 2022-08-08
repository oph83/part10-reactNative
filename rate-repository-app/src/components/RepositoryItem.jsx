import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        backgroundColor: 'white',
    },
    flexItemA: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexGrow: 0,
    },
    flexItemB: {
        flexDirection: 'column',
        flexGrow: 0,
    },
    flexItemC: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    image: {
        width: 50,
        height: 50,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemA}>
                <Image 
                style={styles.image}
                source={{uri: item.ownerAvatarUrl}}
                />
                <View style={styles.flexItemB}>
                    <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                    <Text color="textSecondary">{item.description}</Text>
                    <Text backgroundColor="primary" color="white" style={{alignSelf: 'flex-start'}}>{item.language}</Text>
                </View>
            </View>
            <View style={styles.flexItemC}>
                <Text>
                    <Text fontWeight="bold">{((item.stargazersCount)/1000).toFixed(1)} K</Text>{'\n'}  
                    Stars
                </Text>
                <Text >
                    <Text fontWeight="bold">{((item.forksCount)/1000).toFixed(1)} K</Text>{'\n'}  
                    Forks
                </Text>
                <Text >
                    <Text fontWeight="bold" >{item.reviewCount}</Text>{'\n'}
                    Reviews
                </Text>
                <Text >
                    <Text fontWeight="bold" >{item.ratingAverage}</Text>{'\n'}
                    Rating
                </Text>
            </View>
        </View>
    )
}

export default RepositoryItem