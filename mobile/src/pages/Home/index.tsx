import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import Styles from './styles';

export default function Home() {
    const styles = Styles();
    return (
        <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{ width:274,height:268 }}
        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                
            </View>
        </ImageBackground>
    )
};