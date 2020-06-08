import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import './styles.css';
import logo from '../../assets/logo.svg';

interface Item { id : number, title : string, image_url : string };

interface IBGEResponse { sigla : string, nome : string };

const CreatePoint = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();
    
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [formData, setFormData] = useState({
       name: '',
       email: '',
       whatsapp: '', 
    });

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);
    
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);

    const history = useHistory();
    
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

    function handleSelectUf(event : ChangeEvent<HTMLSelectElement>) {
        const uf : string = event.target.value;
        setSelectedUf(uf);
    };

    function handleSelectCity(event : ChangeEvent<HTMLSelectElement>) {
        const city : string = event.target.value;
        setSelectedCity(city);
    };

    function handleMapClick(event : LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ]);
    };

    function handleInputChange(event : ChangeEvent<HTMLInputElement>) {
        //event.target possui o parametro 'name' e 'value' de um input
        const { name, value } = event.target; 
        //passando [name] entre [] ele substitui o nome da propriedade no objeto js pelo valor da variavel
        setFormData({...formData, [name]: value}); 
    }

    function handleSelectedItem(idSelected : number){
        const alreadySelectedIndex : number = selectedItems.findIndex(idItem => idItem === idSelected);

        if(alreadySelectedIndex >= 0){
            const filteredItems : number[] = selectedItems.filter(idItem => idItem !== idSelected);
            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, idSelected]);
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, whatsapp } = formData;
        const uf : string = selectedUf;
        const city : string = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items_ids : number[] = selectedItems;
        const data = new FormData(); 
        data.append('name' , name);
        data.append('email' , email);
        data.append('whatsapp' , whatsapp);
        data.append('uf' , uf);
        data.append('city' , city);
        data.append('latitude' , String(latitude));
        data.append('longitude' , String(longitude));
        data.append('items_ids' , items_ids.join(','));
        
        if(selectedFile){
            data.append('image', selectedFile)
        }

        api.post('points', data);
        alert('Ponto de coleta registrado');

        history.push('/'); //manda o usuário de volta pra home
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/Ecoleta">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>
                    Cadastro <br />
                    pontos de coleta.
                </h1>

                <Dropzone upload={setSelectedFile}/>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade: </label>
                        <input type="text" name="name" id="name" onChange={handleInputChange} />
                    </div>

                    <div className="field-group row">
                        <div className="field col-12 col-md-6">
                            <label htmlFor="email">E-mail: </label>
                            <input type="email" name="email" id="email" onChange={handleInputChange} />
                        </div>
                        <div className="field col-12 col-md-6">
                            <label htmlFor="whatsapp">Whatsapp: </label>
                            <input type="text" name="whatsapp" id="whatsapp" onChange={handleInputChange} />
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

                    <div className="field-group row">
                        <div className="field col-12 col-md-6">
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
                        <div className="field col-12 col-md-6">
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
                                                        //Para passar parametro em função no html
                                                        //usa-se função anonima pra que ela não seja executada
                                                        //assim que carrega a página
                            <li 
                              key={item.id} 
                              onClick={() => handleSelectedItem(item.id)}
                                        //checa se o array de itens selecionados possui o id desse item dentro
                              className={selectedItems.includes(item.id) ? 'selected' : ''} 
                            > 
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>
                
                <button>Cadastrar ponto de coleta</button>
            </form>
        </div>
)}
export default CreatePoint;