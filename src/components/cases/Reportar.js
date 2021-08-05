import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {AuthContext} from '../../auth/AuthContext';
import { DelitoService } from '../../services/public/DelitoService';
import { CasoService } from '../../services/private/CasoService';
import Swal from 'sweetalert2';
import { messages } from '../../utils/messages';
let marker = null;

export default function Reportar() {

 const {user: {user}} = useContext(AuthContext);

 const [delitos, setDelitos] = useState([]);

  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [center, setCenter] = useState( {
    lat: 6.2440159,
    lng: -75.5762419
  });
  const [zoom] = useState(11);

  const [errors, setErrors] = useState({
    mapa:'',
    descripcion: '',
    delito: ''
  });

  const [caso, setCaso] = useState({
    latitud: 0,
    longitud: 0,
    altitud: 0,
    visible: true,
    descripcion: '',
    urlMap: '',
    rmiUrl: '',
    usuario:{
        id: user.id_usuario,
    },
    delito:{
        id: 0,
    }
  });

  useEffect(() => {
    getLocation();
    async function cargarDelitos() {
        const response = await DelitoService.obtenerTodos();
        const body = await response.data;
        setDelitos(body);   
    }
    cargarDelitos();
  }, []);

  const handleApiLoaded = (map, maps) => {
    setMap(map);
    setMaps(maps);
  }

  const _onClickMap = e => {
    const location = {lat: e.lat, lng: e.lng};
    const map = new maps.Map(e.event.target, {
      zoom: 11,
      center: location,
    });
    setMap(map)
    console.log(map)
    if(marker){
        marker.setPosition(location);
        marker.setLabel(location.lat + ", " + location.lng);
        setCaso({
        ...caso,
            'latitud': location.lat,
            'longitud': location.lng,
            'urlMap':''
        });
    }else{
        marker = new maps.Marker({
            position: location,
            draggable: true,
            label: location.lat + ", " + location.lng,
            map: map,
            streetViewControl: true
        });
        
    }
  }

const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
 const showPosition = (position) => {
    console.log('ejecutando showposition')
    let center = {};
    center['lat'] = position.coords.latitude;
    center['lng'] = position.coords.longitude;
    setCenter({...center});
  };

  const handleValidation = () => {
    let errors = {};
    let isValid = true;
    if(!caso.descripcion){
        isValid = false;
        errors["descripcion"] = "Descripción requerida";
    }else{
        errors["descripcion"] = "";
    }
    //mapa
    if(!user.urlMap){
        isValid = false;
        errors["mapa"] = "Ubique un punto en el mapa";
    }else{
        errors["mapa"] = "";
    }
   // delito
   if(!caso.delito){
        isValid = false;
        errors["delito"] = "Seleccione delito";
    }else{
        errors["delito"] = "";
    }
   setErrors({...errors});
   return isValid;
}
  const sendRegister = e => {
    e.preventDefault();
    if(handleValidation()){
        CasoService.crear(caso)
        .then(r => {
            console.log(r);
            setCaso({
                latitud: 0,
                longitud: 0,
                altitud: 0,
                descripcion: '',
                urlMap: '',
                rmiUrl: '',
                delito:{
                    id: 0,
                }
            });
            return Swal.fire('OK', messages.REG_EXITOSO, 'success');
        })
        .catch(e => {
            console.log(e);
            return Swal.fire('Error', messages.ERROR_REGISTRO, 'error');
        });   
    } 
  };

  const handleChange = e => {
    setCaso({
        ...caso,
        [e.target.name]: e.target.value
    });
  };
    return (
    <div className="container">
      <div className="col-md-12 col-lg-12 my-1">
        <h1 className="d-none">1</h1>
        <h2 className="d-none">2</h2>
        <h3 className="d-none">3</h3>
        <h4 className="mb-3">Reportar caso</h4>
        <form 
         className="needs-validation" 
         onSubmit={sendRegister}
        >
        <div className="row">
        <div className="col-12">
            <div className="invalid-feedback d-block">
                {errors.mapa}
            </div>
          <div style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
            draggable={true}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded( map, maps)}
            onClick={_onClickMap}
            >
            </GoogleMapReact>
        </div>
          <div className="invalid-feedback d-block">
            {errors.mapa}
           </div>
        </div>
        </div>
        <div className="row g-3">
            <div className="col-sm-6 col-lg-6">
                <label htmlFor="delito" className="form-label">Delito<span className="text-muted">*</span></label>
                <select 
                    className="form-control" 
                    id="delito" 
                    required=""
                    name="delito"
                    onChange={handleChange}
                >
                    <option value=""> -- Selecciona delito -- </option>
                    {delitos.map((d) => <option key={d.id+1} value={d.id}>{d.nombre}</option>)}
                </select>
                <div className="invalid-feedback d-block">
                {errors.delito}
                </div>
            </div>
            <div className="col-sm-6">
            <label htmlFor="nombre" className="form-label">Descripción<span className="text-muted">*</span></label>
            <input 
                type="text" 
                className="form-control" 
                id="descripcion"
                placeholder="Descripción breve" 
                required=""
                name="descripcion"
                value={caso.descripcion}
                onChange={handleChange}
                />
                <div className="invalid-feedback d-block">
                {errors.descripcion}
                </div>
            </div>
            <hr className="my-4"/>

            <button 
                className="w-50 btn btn-primary btn-lg"
                type="submit"
            >
            Enviar
            </button>
        </div>
        </form>

        </div>
      </div>
    );

}