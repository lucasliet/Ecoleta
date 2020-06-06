import React from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const styles = Styles();
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#34cb79"/>
                </TouchableOpacity>

                <Image style={styles.pointImage} source={{uri: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}/>
                <Text style={styles.pointName}>Buteco do Nuriega</Text>

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>
                    <Text style={styles.addressContent}>São Paulo, SP</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <RectButton 
                  style={styles.button}
                  onPress={() => {}}
                >
                    <FontAwesome name="whatsapp" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton 
                  style={styles.button}
                  onPress={() => {}}
                >
                    <Icon name="mail" size={20} color="#fff" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
};