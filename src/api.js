const base_url = "https://www.land.mlit.go.jp/webland/api/CitySearch?area=";

const getCityUrl = (city_id) => base_url + city_id;

export default getCityUrl;
