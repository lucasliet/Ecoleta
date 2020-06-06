import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import MapView, { Marker } from 'react-native-maps';

import api from '../../services/api';
import Styles from './styles';

interface Item {
    id: number,
    title: string,
    image_url: string
}

export default function Points(){
    const [items, setItems] = useState<Item[]>([]);
    const navigation = useNavigation();
    const styles = Styles();

    useEffect(() => {
        api.get('items').then( response => {
            setItems(response.data);
        });
    }, []);

    return (
        <>
            <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#34cb79"/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Bem vindo.</Text>
                    <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                    <View style={styles.mapContainer}>
                    <MapView 
                      style={styles.map}
                      initialRegion={{
                          latitude: -23.5686549,
                          longitude: -46.7159466,
                          latitudeDelta: 0.014,
                          longitudeDelta: 0.014
                      }}
                    />
                    <Marker 
                      style={styles.mapMarker}
                      onPress={() => navigation.navigate('Detail')}
                      coordinate={{
                        latitude: -23.5686549,
                        longitude: -46.7159466
                      }}
                    >
                        <View style={styles.mapMarkerContainer}>
                           <Image style={styles.mapMarkerImage} source={{ uri: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }}/>
                           <Text style={styles.mapMarkerTitle}>Buteco</Text>
                        </View>
                    </Marker>
                    </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{paddingHorizontal: 20}}
                >
                    {items.map(item => (
                        <TouchableOpacity key={String(item.id)} style={styles.item} onPress={() => {}}>
                            <SvgUri width={42} height={42} uri={item.image_url} />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </TouchableOpacity> 
                    ))}
                </ScrollView>
            </View>
        </>
    );
};