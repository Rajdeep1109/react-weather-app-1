export const DEFAULT_PLACE = {
  name: "Dhaka",
  place_id: "dhaka",
  adm_area1: "Dhaka",
  adm_area2: "Dhaka District",
  country: "Bangladesh",
  lat: "23.7104N",
  lon: "90.40744E",
  timezone: "Asia/Dhaka",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};
export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "km/h",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};
