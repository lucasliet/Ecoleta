import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import Map, { Marker } from 'react-native-maps';

import api from '../../services/api';
import Styles from './styles';

interface Item {
    id: number;
    title: string;
    image_url: string;
}
interface Point{
    id: number;
    name: string;
    image: string;
    latitude: number;
    longitude: number;
    items: {
        title: string;
    }[];
}

interface UfCity {
    uf: string;
    city: string;
}

export default function Points(){
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
    const [points, setPoints] = useState<Point[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as UfCity;
    const styles = Styles();

    useEffect(() => {
        api.get('items').then( response => {
            setItems(response.data);
        });
    }, []);

    useEffect(()=>{
        async function loadPosition(){
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Oops...', 'Precisamos de sua permissão para obter a localização');
                return
            }
            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            setInitialPosition( [latitude, longitude] );
        }
        loadPosition();
    });

    useEffect(() => {
        api.get('points', {
            params: {
                city: routeParams.city,
                uf: routeParams.uf,
                items: selectedItems
            }
        }).then( response => {
            setPoints(response.data);
        });
    }, []);

    function handleSelectedItem(idSelected : number){
        const alreadySelectedIndex : number = selectedItems.findIndex(idItem => idItem === idSelected);

        if(alreadySelectedIndex >= 0){
            const filteredItems : number[] = selectedItems.filter(idItem => idItem !== idSelected);
            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, idSelected]);
        }
    }

    return (
        <>
            <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#34cb79"/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Bem vindo.</Text>
                    <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                    <View style={styles.mapContainer}>
                    { initialPosition[0] !== 0 && ( //"if binário do react"
                        <Map 
                          style={styles.map}
                          loadingEnabled={initialPosition[0] === 0}
                          initialRegion={{
                            latitude: initialPosition[0],
                            longitude: initialPosition[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }}
                      >
                          {points.map(point => (
                              <Marker
                                key={String(point.id)} 
                                style={styles.mapMarker}
                                onPress={() => navigation.navigate('Detail', {point_id: point.id})}
                                coordinate={{
                                latitude: point.latitude,
                                longitude: point.longitude
                              }}
                            >
                                <View style={styles.mapMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri: point.image }}/>
                                    <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                                </View>
                            </Marker>
                          ))}
                      </Map>
                    )}
                    </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{paddingHorizontal: 20}}
                >
                    {items.map(item => (
                        <TouchableOpacity 
                          key={String(item.id)} 
                          style={[
                              styles.item,
                              selectedItems.includes(item.id) ? styles.selectedItem : {}
                          ]} 
                          onPress={() => handleSelectedItem(item.id)}
                          activeOpacity={0.6}
                        >
                            <SvgUri width={42} height={42} uri={item.image_url} />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </TouchableOpacity> 
                    ))}
                </ScrollView>
            </View>
        </>
    );
};