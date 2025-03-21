export const stateData = [
    { "state": "AL", "id": "01", "filled": false },
    { "state": "AK", "id": "02", "filled": false },
    { "state": "AS", "id": "60", "filled": false },
    { "state": "AZ", "id": "04", "filled": false },
    { "state": "AR", "id": "05", "filled": true },
    { "state": "CA", "id": "06", "filled": false },
    { "state": "CO", "id": "08", "filled": false },
    { "state": "CT", "id": "09", "filled": false },
    { "state": "DE", "id": "10", "filled": false },
    { "state": "DC", "id": "11", "filled": false },
    { "state": "FL", "id": "12", "filled": true },
    { "state": "FM", "id": "64", "filled": false },
    { "state": "GA", "id": "13", "filled": false },
    { "state": "GU", "id": "66", "filled": false },
    { "state": "HI", "id": "15", "filled": false },
    { "state": "ID", "id": "16", "filled": false },
    { "state": "IL", "id": "17", "filled": false },
    { "state": "IN", "id": "18", "filled": false },
    { "state": "IA", "id": "19", "filled": false },
    { "state": "KS", "id": "20", "filled": true },
    { "state": "KY", "id": "21", "filled": true },
    { "state": "LA", "id": "22", "filled": true },
    { "state": "ME", "id": "23", "filled": false },
    { "state": "MH", "id": "68", "filled": false },
    { "state": "MD", "id": "24", "filled": false },
    { "state": "MA", "id": "25", "filled": false },
    { "state": "MI", "id": "26", "filled": false },
    { "state": "MN", "id": "27", "filled": false },
    { "state": "MS", "id": "28", "filled": true },
    { "state": "MO", "id": "29", "filled": false },
    { "state": "MT", "id": "30", "filled": false },
    { "state": "NE", "id": "31", "filled": false },
    { "state": "NV", "id": "32", "filled": false },
    { "state": "NH", "id": "33", "filled": false },
    { "state": "NJ", "id": "34", "filled": false },
    { "state": "NM", "id": "35", "filled": false },
    { "state": "NY", "id": "36", "filled": true },
    { "state": "NC", "id": "37", "filled": true },
    { "state": "ND", "id": "38", "filled": false },
    { "state": "MP", "id": "69", "filled": false },
    { "state": "OH", "id": "39", "filled": false },
    { "state": "OK", "id": "40", "filled": false },
    { "state": "OR", "id": "41", "filled": true },
    { "state": "PW", "id": "70", "filled": false },
    { "state": "PA", "id": "42", "filled": false },
    { "state": "PR", "id": "72", "filled": false },
    { "state": "RI", "id": "44", "filled": false },
    { "state": "SC", "id": "45", "filled": false },
    { "state": "SD", "id": "46", "filled": false },
    { "state": "TN", "id": "47", "filled": false },
    { "state": "TX", "id": "48", "filled": true },
    { "state": "UM", "id": "74", "filled": false },
    { "state": "UT", "id": "49", "filled": false },
    { "state": "VT", "id": "50", "filled": false },
    { "state": "VA", "id": "51", "filled": false },
    { "state": "VI", "id": "78", "filled": false },
    { "state": "WA", "id": "53", "filled": false },
    { "state": "WV", "id": "54", "filled": false },
    { "state": "WI", "id": "55", "filled": false },
    { "state": "WY", "id": "56", "filled": false }
];

export const airportCoords = {
  LIT: [-92.5, 35],
  MFR: [-123.25, 42.5],
  RST: [-93.25, 45.2],
  MIA: [-80.35, 26],
  RDI: [-78.5, 36],
  XNA: [-94, 36],
  IAH: [-95.34, 29,99]
}

export const flightData = [
  {
    from: airportCoords.RST,
    to: airportCoords.LIT
  },
  {
    from: airportCoords.MFR,
    to: airportCoords.LIT
  },
  {
    from: airportCoords.LIT,
    to: airportCoords.MFR
  },
  {
    from: airportCoords.LIT,
    to: airportCoords.MIA
  },
  {
    from: airportCoords.XNA,
    to: airportCoords.RDI
  },
  {
    from: airportCoords.XNA,
    to: airportCoords.IAH
  },
  {
    from: airportCoords.IAH,
    to: airportCoords.XNA
  }
];
