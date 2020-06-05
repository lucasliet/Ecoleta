import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.svg';

interface Item { id : number, title : string, image_url : string };

interface IBGEResponse { sigla : string, nome : string };

const CreatePoint = () => {
    const [items, setItems] = useState<Item[]>([]);
    
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition( [latitude, longitude] );
        })
    },[]);

    useEffect(() => {   
        api.get('items').then( response => {
            setItems(response.data);
        });
    }, []);
    
    useEffect(() => {   
        axios.get<IBGEResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then( response => {
            const ufInitials = response.data.map(uf => uf.sigla);
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if(selectedUf === '0'){return}
        axios.get<IBGEResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome);
                setCities(cityNames);
            })
    }, [selectedUf]);

    function handleSelectUf(event : ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    };

    function handleSelectCity(event : ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        setSelectedCity(city);
    };

    function handleMapClick(event : LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ]);
    };

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form>
                <h1>
                    Cadastro <br />
                    pontos de coleta.
                </h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade: </label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail: </label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp: </label>
                            <input type="text" name="whatsapp" id="whatsapp" />
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado: </label>
                            <select 
                              name="uf"
                              id="uf"
                              value={selectedUf}
                              onChange={handleSelectUf}
                            >
                                <option value="0"> Selectione um UF</option>
                                {ufs.map( uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade: </label>
                            <select 
                              name="city"
                              id="city" 
                              value={selectedCity}
                              onChange={handleSelectCity}
                            >
                                <option value="0"> Selectione um cidade</option>
                                {cities.map( city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>
                        <h2>ìtens de coleta</h2>
                    </legend>
                    <ul className="items-grid">
                        {items.map(item => (
                            <li key={item.id}>
                                <img src={item.image_url} alt={item.title}/>
                                <span>Óleo de Cozinha</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>
                
                <button>Cadastrar ponto de coleta</button>
            </form>
        </div>
)}
export default CreatePoint;