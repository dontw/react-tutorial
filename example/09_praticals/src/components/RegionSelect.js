import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIdx: 0,
    areaIdx: 0,
  }
  onChangeCity = (e) => {
    this.setState({
      cityIdx: e.target.value,
      areaIdx: 0,
    });
  }
  onChangeArea = (e) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }
  getRegion = () => {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];
    return {
      city: city.name,
      area: area.name,
      zipCode: area.zip,
    };
  }
  render() {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];
    return (
      <section>
        <div className="form-row">
          <div className="col-4">
            <label>縣市</label>
            <select className="form-control" value={cityIdx} onChange={this.onChangeCity}>
              {zipCodes.map(({ name }, idx) => <option value={idx} key={name}>{name}</option>)}
            </select>
          </div>
          <div className="col-4">
            <label>地區</label>
            <select className="form-control" value={areaIdx} onChange={this.onChangeArea}>
              {city.areas.map(({ name }, idx) => <option value={idx} key={name}>{name}</option>)}
            </select>
          </div>
          <div className="col-2">
            <label>zip</label>
            <input type="text" className="form-control" readOnly value={area.zip} />
          </div>
        </div>
      </section>
    );
  }
}
export default RegionSelect;
