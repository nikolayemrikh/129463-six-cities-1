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

    const city = [52.38333, 4.9];

    const zoom = 12;
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

    this.props.offers.forEach(({id, location}) => {
      const marker = Leaflet.marker(location, {
        icon: id === this.props.activeOfferId ? this._activeIcon : this._icon
      });
      this._markers.set(marker, id);
      marker.addTo(this._map);
    });
  }

  componentDidUpdate() {
    this._addMarkersOnMap();
  }
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.any
};
