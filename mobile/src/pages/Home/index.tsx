import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Styles from './styles';

export default function Home() {
    const navigation = useNavigation();
    const styles = Styles();
    return (
        <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{ width:274,height:368 }}
        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={() => navigation.navigate('Points')} >
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" color="#fff" size={24} />
                    </View>
                    <Text style={styles.buttonText}> Entrar </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
};