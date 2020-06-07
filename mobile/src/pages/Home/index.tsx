import React, {useState, useEffect} from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Select from 'react-native-picker-select'
import axios from 'axios';

import Styles from './styles';

interface IBGEResponse { sigla : string, nome : string };

export default function Home() {
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    useEffect(() => {   
        axios.get<IBGEResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then( response => {
            const ufInitials : string[] = response.data.map(uf => uf.sigla);
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if(selectedUf === '0'){return}
        axios.get<IBGEResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames : string[] = response.data.map(city => city.nome);
                setCities(cityNames);
            })
    }, [selectedUf]);

    const ufOptions = ufs.map(uf =>({label:uf, value:uf}))
    const cityOptions = cities.map(city =>({label:city, value:city}))

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
            <View>
                <Select
                    style={{
                        inputAndroid:styles.select, 
                        inputIOS:styles.select,
                        iconContainer: { top: 17, right: 15, }
                    }}
                    Icon={() => (<Icon name="arrow-down" color="#ddd" size={24}/>)}
                    onValueChange={uf => setSelectedUf(uf)}
                    items={ufOptions}
                    placeholder={{label: 'Selecione um Estado', value: null}}
                />
                <Select 
                    style={{
                        inputAndroid:styles.select, 
                        inputIOS:styles.select,
                        iconContainer: { top: 17, right: 15, }
                    }}
                    Icon={() => (<Icon name="arrow-down" color="#ddd" size={24}/>)}       
                    onValueChange={city => setSelectedCity(city)}
                    items={cityOptions}
                    placeholder={{label: 'Selecione uma Cidade', value: null}}
                />
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={() => navigation.navigate('Points', {uf: selectedUf, city: selectedCity})} >
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" color="#fff" size={24} />
                    </View>
                    <Text style={styles.buttonText}> Entrar </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
};


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });