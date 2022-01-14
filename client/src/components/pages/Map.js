import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function helper_Map(){
    return (
      <GoogleMap 
        defaultZoom={15}
        defaultCenter={{ lat: 42.36046358484204, lng: -71.09451405362468}}
      />
    );
  };


  const WrappedMap = withScriptjs(withGoogleMap(helper_Map));

  export default function Map(){
    return (
        <div style= {{width: '100vw', height:'100vh'}}>
                <WrappedMap 
                  googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyD_zEpuvh12XHWTZdG2MTlcGcR92YVBOy4&v=3.exp&libraries=geometry,drawing,places'}
                  loadingElement={<div style={{height:"100%"}}/>}
                  containerElement={<div style={{height:"100%"}}/>}
                  mapElement={<div style={{height:"100%"}}/>}
                />
        </div>  
      );
  };
