import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

// Constants
import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const Home = () => {

    // Dummy Data
    const [newPlants, setNewPlants] = React.useState([
        {
            id: 0,
            name: 'Plant 1',
            img: images.plant1,
            favoris: false
        },
        {
            id: 1,
            name: 'Plant 2',
            img: images.plant1,
            favoris: true
        },
        {
            id: 2,
            name: 'Plant 3',
            img: images.plant1,
            favoris: false
        },
        {
            id: 3,
            name: 'Plant 4',
            img: images.plant1,
            favoris: false
        }
    ])

    // render

    function renderNewPlants(item, index) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Image 
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        width: SIZES.width * 0.23,
                        height: '82%',
                        borderRadius: 15
                    }}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* New Plants */}
            <View style={{ height: '30%', backgroundColor: COLORS.white}}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary
                    }}
                >

                    <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLORS.white, fontSize: 20}}>Nouvelles Plantes</Text>
                            <TouchableOpacity
                                onPress={() => {console.log('Focus on password')}}
                            >
                                <Image 
                                    source={icons.focus}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList 
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index}) => renderNewPlants(item, index)}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Today's Share */}
            <View style={{ height: '50%', backgroundColor: COLORS.lightGray}}>

            </View>

            {/* Added Friend */}
            <View style={{ height:'20%', backgroundColor: COLORS.lightGray }}></View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
})

export default Home;