import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import MapView, { Marker } from 'react-native-maps';

import Styles from './styles';

export default function Points(){
    const navigation = useNavigation();
    const styles = Styles();
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
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://cafezinho.sytes.net:3333/uploads/lampadas.svg" />
                        <Text style={styles.itemTitle}>Lâmpadas</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
};