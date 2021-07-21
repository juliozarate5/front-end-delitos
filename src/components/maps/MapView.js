import React, {
  Component
} from 'react';
import GoogleMapReact from 'google-map-react';
import { MapService } from '../../services/public/MapService';

const AnyReactComponent = ({
  text, url
}) =>
(<div style = {{color: "red", background: "white"}}>
  {<a href={url} target={`_blank`}>{text}</a>}
</div>
);
class MapView extends Component {
  state = {
    map: null,
    maps: null,
    center: {
      lat: 6.2440159,
      lng: -75.5762419
    },
    zoom: 11,
    locations: [],
  };

  handleApiLoaded = (map, maps) => {

    this.setState({
      map
    });
    this.setState({
      maps
    });

  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition = (position) => {
    console.log(position)
    this.setState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  }

  componentDidMount = () => {
    this.getLocation();
    MapService.getAllCasos()
    .then(c => {
      console.log(c.data);
      this.setState({locations: c.data});
    })
    .catch(e => {
      console.log(e);
    });
    
  }

  render() {
    return (
    <>
    <div style = {
        {
          height: '100vh',
          width: '100%'
        }
      }>
      <GoogleMapReact 
        bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
        defaultCenter = {this.state.center}
        defaultZoom = {this.state.zoom}
        yesIWantToUseGoogleMapApiInternals = {true}
        onGoogleApiLoaded = {({map,maps}) => 
        this.handleApiLoaded(map, maps)} 
      >
      {
      this.state.locations.map((l, i) => {
          return( 
          <AnyReactComponent
            key = {i}
            lat = {l.latitud}
            lng = {l.longitud}
            text = {l.descripcion}
            url = {l.urlMap}
          />) 
        })
      }
      </GoogleMapReact> 
      </div> 
      </>
    );
  }
}

export default MapView;