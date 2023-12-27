'use client'
import { DestinationContext } from '@/app/context/DestinationContext';
import { SourceContext } from '@/app/context/SourceContext';
import React, { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';



const InputItem = ({ type }) => {
    
    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState(null);
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);
    
    useEffect(() => {
        type == 'source' ? setPlaceholder('Pickup Loacation') : setPlaceholder('Dropoff Location');
    }, []);

    const getLatLng = (place, type) => {
        console.log(place);
        const placeId = place.value.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (place, status) => {
          if (status == "OK" && place.geometry && place.geometry.location) {
              console.log(place.geometry.location.lat());
              if (type == 'source') {
                  setSource({
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                      name: place.formatted_address,
                      label:place.name
                  });
              } else { 
                  setDestination({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    name: place.formatted_address,
                    label: place.name
                  });
              }
              
          }
        });
    };
    
    return (
      <>
        <div className="bg-slate-200 p-3 rounde-lg mt-3 flex items-center gap-2">
          <div>
            {type == "source" ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                data-baseweb="icon"
              >
                <title>search</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                data-baseweb="icon"
              >
                <title>search</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>
          {/* <div>
            <input
              type="text"
              placeholder={
                type == "source" ? "Pickup Location" : "Drop Location"
              }
              className="bg-transparent w-full outline-none"
            />
        </div> */}
          <GooglePlacesAutocomplete
            
            selectProps={{
              value,
                onChange: (place) => {
                    getLatLng(place, type);
                    setValue(place);
                },
                placeholder: placeholder,
                isClearable: true,
                className: "w-full",
                components: { DropdownIndicator: false },
                styles: {
                    control: (provided) => ({
                        ...provided,
                        backgroundColor: '#00ffff00',
                    border: 'none'})
              }
            }}
          />
        </div>
      </>
    );
}

export default InputItem
