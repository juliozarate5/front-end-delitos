import React, {
  Component
} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({
  text
}) => < div style = {
  {
    color: "red",
    background: "white"
  }
} > {
  text
} < /div>;

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

const locations = [{
    lat: -31.56391,
    lng: 147.154312
  },
  {
    lat: -33.718234,
    lng: 150.363181
  },
  {
    lat: -33.727111,
    lng: 150.371124
  },
  {
    lat: -33.848588,
    lng: 151.209834
  },
  {
    lat: -33.851702,
    lng: 151.216968
  },
  {
    lat: -34.671264,
    lng: 150.863657
  },
  {
    lat: -35.304724,
    lng: 148.662905
  },
  {
    lat: -36.817685,
    lng: 175.699196
  },
  {
    lat: -36.828611,
    lng: 175.790222
  },
  {
    lat: -37.75,
    lng: 145.116667
  },
  {
    lat: -37.759859,
    lng: 145.128708
  },
  {
    lat: -37.765015,
    lng: 145.133858
  },
  {
    lat: -37.770104,
    lng: 145.143299
  },
  {
    lat: -37.7737,
    lng: 145.145187
  },
  {
    lat: -37.774785,
    lng: 145.137978
  },
  {
    lat: -37.819616,
    lng: 144.968119
  },
  {
    lat: -38.330766,
    lng: 144.695692
  },
  {
    lat: -39.927193,
    lng: 175.053218
  },
  {
    lat: -41.330162,
    lng: 174.865694
  },
  {
    lat: -42.734358,
    lng: 147.439506
  },
  {
    lat: -42.734358,
    lng: 147.501315
  },
  {
    lat: -42.735258,
    lng: 147.438
  },
  {
    lat: -43.999792,
    lng: 170.463352
  },
];

class MapView extends Component {
  state = {
    map: null,
    maps: null,
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
  };

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(this.myRef)
    console.log(maps);
    console.log(map)
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
    this.setState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  }

  componentDidMount = () => {
    this.getLocation();
  }

  render() {
    return ( <
      >

      <
      div style = {
        {
          height: '100vh',
          width: '100%'
        }
      } >
      <
      GoogleMapReact bootstrapURLKeys = {
        {
          key: process.env.REACT_APP_GOOGLE_MAPS_KEY
        }
      }
      defaultCenter = {
        this.state.center
      }
      defaultZoom = {
        this.state.zoom
      }
      draggable = "true"
      yesIWantToUseGoogleMapApiInternals = {
        true
      }
      onGoogleApiLoaded = {
        ({
          map,
          maps
        }) => this.handleApiLoaded(map, maps)
      } >
      {
        locations.map((l, i) => {
          return <AnyReactComponent
          key = {
            i
          }
          lat = {
            l.lat
          }
          lng = {
            l.lng
          }
          text = {
            `marker ${i}`
          }
          /> 
        })
      } <
      /GoogleMapReact> <
      /div> <
      />
    );
  }
}

export default MapView;