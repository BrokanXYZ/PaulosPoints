import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Popover } from '@mui/material';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import { stateData, flightData, airportCoords } from '../../utils/mapDatasets';
import RandomCurvedLine from './RandomCurvedLine';

export default function Map(props) {
  const theme = useTheme();

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState([0,0]);

  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

    return(
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
              {({ geographies }) => (
                <>
                  {geographies.map(geo => {
                    const dataset = stateData.find(data => data.id === geo.id);
                    return(
                      <Geography
                        key={geo.rsmKey}
                        stroke="#FAFAFA"
                        geography={geo}
                        fill={dataset.filled ? theme.palette.secondary.main : "#DDDDDD"}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    )
                  })}
                </>
              )}
            </Geographies>
            {flightData.map((data, index) => (
                <RandomCurvedLine
                    key={`line-${index}`}
                    from={data.from}
                    to={data.to}
                    stroke={"#90a4ae"}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            ))}
            {Object.entries(airportCoords).map(([_, coords], index) => {
                return <Marker
                    key={`marker-${index}`}
                    coordinates={coords}
                >
                  <path  
                    fill="black" 
                    d="M 0 -20 C -3.87 -20 -7 -16.87 -7 -13 c 0 5.25 7 13 7 13 s 7 -7.75 7 -13 c 0 -3.87 -3.13 -7 -7 -7 z m 0 9.5 c -1.38 0 -2.5 -1.12 -2.5 -2.5 s 1.12 -2.5 2.5 -2.5 s 2.5 1.12 2.5 2.5 s -1.12 2.5 -2.5 2.5 z" 
                  />
                </Marker>
            })}
        </ComposableMap>
    );

}

/* <Popover 
        anchorReference="anchorPosition"
        open={isPopoverOpen}
        anchorPosition={{ top: mousePosition[1], left: mousePosition[0] }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={()=>setIsPopoverOpen(false)}
      >
        The content of the Popover.
      </Popover> */