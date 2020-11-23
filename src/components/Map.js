import GoogleMapReact from 'google-map-react';

const Map = ({center, zoom}) => {
    return (
        <div className="Map">
            <GoogleMapReact 
              bootstrapURLKeys={{ key: "AIzaSyBRo2DisALKH71NDAxAwePifLlHH8tEs78" }}
              defaultCenter={center}
              defaultAoom={zoom}
            >


            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lang: -122.8756
    },
    zoom: 6
}

export default Map
