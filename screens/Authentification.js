import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

// Import des constants
import { images, COLORS, SIZES, FONTS, icons } from '../constants';

// Import Components
import TouchId from '../components/TouchId';


const Authentification = ({ navigation }) => {
    return (

        // Bloc Principal
        <View style={styles.container}>
            {/* Bloc du Haut */}
            <View style={{ height: '45%'}}>
                <Image 
                    source={images.plant1}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            {/* Bloc du bas */}
                <View style={{ 
                    flex: 1, 
                    marginTop: -40, 
                    backgroundColor: COLORS.lightGray,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding,
                    alignItems: 'center',
                    }}>
                {/* Title */}
                    <View style={{
                        width: '100%',
                        height: '30%',
                        alignItems: 'center'
                        
                    }}>
                        <Text style={{
                            color: COLORS.primary,
                            ...FONTS.h1,
                            marginTop: 30
                        }}>Welcome to PlanApp!</Text>
                    </View>
                {/* Bouton Google */}
                    <View style={{width:'100%',height:'100%', alignItems: 'center'}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor:COLORS.primary,
                                width: '80%',
                                height: '8%',
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => { console.log('hello Touch ID')}}
                        >   
                            {/* <Image 
                                source={icons.digital}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    marginRight: 10,
                                }}
                            /> */}
                            <Text style={{color: 'white', ...FONTS.body3}}>Sign In with Touch ID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.black,
                                width: '80%',
                                height: '8%',
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20,
                                
                            }}
                            onPress={() => { navigation.navigate("Home")}}
                        >   
                            <Image 
                            source={icons.mac}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                marginRight: 10,
                            }}
                            />
                            <Text style={{color: 'white', ...FONTS.body3}}>Sign In with Apple</Text>
                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={{
                            marginTop: 80,
                            color: COLORS.secondary,
                            ...FONTS.body3
                        }}>Vous n'avez pas de compte?</Text>
                        <Text style={{
                            color: COLORS.primary
                        }}>Sign Up </Text>
                    </View>
                    </View>
            </View>
        </View>

    
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
})

export default Authentification;