import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line
} from "react-simple-maps";
import { stateData, flightData } from '../../utils/mapDatasets';

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
            {flightData.map(data => (
                <Line
                    from={data.from}
                    to={data.to}
                    stroke={theme.palette.primary.main}
                    strokeWidth={3}
                    strokeLinecap="round"
                />
            ))}
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