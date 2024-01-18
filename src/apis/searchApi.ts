import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token: "pk.eyJ1IjoibWVyY2hhbmYiLCJhIjoiY2xxcjl6bHpjNGhoOTJtcXd2MDFqcXlhdCJ9.NhCT3a2U_DmwM4CPbL38Bw"
  }
})

export default searchApi
