import React, { useState, useEffect } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';
import Styles from './styles';

interface Params{
    point_id : number;
}

interface Data {
    point: {
        image: string;
        name: string;
        email: string;
        whatsapp: string;
        city: string;
        uf: string;
    };
    items : {
        title: string;
    }[];
}

export default function Detail(){
    const [data, setData] = useState<Data>({} as Data);

    const navigation = useNavigation();
    const route = useRoute();
    const styles = Styles();

    const routeParams = route.params as Params ; //forçar tipagem com "as"

    useEffect(() => {
        api.get(`points/${routeParams.point_id}`).then( response => {
            setData(response.data);
        });
    });

    return (
        <SafeAreaView style={{flex: 1, paddingVertical:25}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#34cb79"/>
                </TouchableOpacity>

                <Image style={styles.pointImage} source={{uri: data.point.image}}/>
                <Text style={styles.pointName}>{data.point.name}</Text>
                <Text style={styles.pointItems}>
                    {data.items.map(item => item.title).join(', ')}
                </Text>

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>
                    <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
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