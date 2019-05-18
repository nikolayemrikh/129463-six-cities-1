import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Leaflet from "leaflet";

export default class CityMap extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }
  render() {
    return <section ref={this._mapRef} className="cities__map map"></section>;
  }

  componentDidMount() {
    if (process && process.env && process.env.NODE_ENV === `test`) { // eslint-disable-line
      return;
    }
    const city = [52.38333, 4.9];

    const icon = Leaflet.icon({
      iconUrl: `img/another-pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = Leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        updateWhenIdle: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.offers.forEach(({location}) => {
      Leaflet
        .marker(location, {icon})
        .addTo(map);
    });
  }
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
};
