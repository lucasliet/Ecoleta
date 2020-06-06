import React from 'react';
import { View, Image } from 'react-native';

import Styles from './styles';

const Home = () => {
    const styles = Styles();
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
        </View>
    )
};
export default Home;