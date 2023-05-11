
const MapView = () => {
    const map =
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/105.804817,21.028509,11,5/700x700?access_token=pk.eyJ1IjoiamFqYWphamF1IiwiYSI6ImNsaDJyNzUydjAzazgzcnFtc3R5enE4eXgifQ.FmwGbD5cLVub495LlJUlbw';
  return <img src={map} alt='Map' />;
};

export default MapView;
