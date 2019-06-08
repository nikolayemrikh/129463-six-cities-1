import React from "react";
import PropTypes from "prop-types";

import Leaflet from "leaflet";

export default class CityMap extends React.PureComponent {
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
    this._init();
  }

  _init() {
    if (!this.props.cityOffers.length) {
      return;
    }
    const {cityLocation} = this.props.cityOffers[0];

    const city = [cityLocation.latitude, cityLocation.longitude];
    const zoom = cityLocation.zoom;

    this._map = Leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        updateWhenIdle: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._icon = Leaflet.icon({
      iconUrl: `img/another-pin.svg`,
      iconSize: [30, 30]
    });

    this._activeIcon = Leaflet.icon({
      iconUrl: `img/another-pin.svg`,
      iconSize: [30, 40]
    });
    this._addMarkersOnMap();

    this._initialized = true;
  }

  _addMarkersOnMap() {
    if (!this._markers) {
      this._markers = new Map();
    } else {
      this._markers.forEach((offerId, marker) => {
        if (this.props.activeOfferId === offerId) {
          marker.setIcon(this._activeIcon);
        } else {
          marker.setIcon(this._icon);
        }
      });
      return;
    }

    this.props.cityOffers.forEach(({id, location}) => {
      const loc = [location.latitude, location.longitude];
      const marker = Leaflet.marker(loc, {
        icon: id === this.props.activeOfferId ? this._activeIcon : this._icon
      });
      this._markers.set(marker, id);
      marker.addTo(this._map);
    });
  }

  componentDidUpdate() {
    if (!this._initialized) {
      this._init();
    }
    this._addMarkersOnMap();
  }
}

CityMap.propTypes = {
  cityOffers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.any
};
