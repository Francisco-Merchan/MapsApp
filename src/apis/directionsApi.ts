import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: 'simplified',
    steps: false,
    access_token: "pk.eyJ1IjoibWVyY2hhbmYiLCJhIjoiY2xxcjl6bHpjNGhoOTJtcXd2MDFqcXlhdCJ9.NhCT3a2U_DmwM4CPbL38Bw"
  }
})

export default directionsApi