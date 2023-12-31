import React, { useEffect, useState } from 'react'
import { SourceContext } from '../../context/SourceContext'; 
import { useContext } from 'react';
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import { DestinationContext } from '../../context/DestinationContext';

const GoogleMapSection = () => {

  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const containerStyle = {
    width: "100%",
    height:window.innerWidth*0.37
  };

  const [center ,setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [directionRoutePoints,setDirectionRoutePoints]= useState([])
  useEffect(() => {
    if (source?.length!=[] && map)
    {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng
      });
    }
    if (source.length != [] && destination.length != []) {
      directionRoute()
    }
    
  }, [source]);
   useEffect(() => {
     if (destination?.length != [] && map) {
       
       map.panTo({
         lat: source.lat,
         lng: source.lng,
       });
       setCenter({
         lat: destination.lat,
         lng: destination.lng,
       });
     }
     if (source.length != [] && destination.length != []) {
       directionRoute();
     }
   }, [destination]);

  const directionRoute = () => { 
    const DirectionService = new google.maps.DirectionsService();

    DirectionService.route({
      origin: { lat: source.lat, lng: source.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode:google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirectionRoutePoints(result)
      } else {
        console.error("Error")
      }
    });
  }
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "311400266b9695aa" }}
    >
      {source.length != [] ? (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: "/source-tree.svg",
            scaledSize: {
              width: 30,
              height: 30,
            },
          }}
        >
          <OverlayView
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px]">{source.label}</p>
            </div>
          </OverlayView>
        </MarkerF>
      ) : null}
      {destination.length != [] ? (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: "/destination.svg",
            scaledSize: {
              width: 30,
              height: 30,
            },
          }}
        >
          <OverlayView
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px]">{destination.label}</p>
            </div>
          </OverlayView>
        </MarkerF>
      ) : null}

      <DirectionsRenderer directions={directionRoutePoints}
        options={{
          polylineOptions: {
            strokeColor: '#000',
            strokeWeight:5
            
          },
        suppressMarkers: true,
      }}>

      </DirectionsRenderer>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ); 
}

export default GoogleMapSection
