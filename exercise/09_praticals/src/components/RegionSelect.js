import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIndex: 0,
    areaIndex: 0,
  }

  onChangeCity = (e) => {
    console.log(e.target.value);
    this.setState({
      cityIndex: e.target.value,
      areaIndex: 0,
    });
  }

  onChangeArea = (e) => {
    this.setState({
      areaIndex: e.target.value,
    });
  }

  render() {
    const { cityIndex, areaIndex } = this.state;
    const city = zipCodes[cityIndex];
    const area = city.areas[areaIndex];
    return (
      <section>
        <div className="form-row">
          <div className="col-4">
            <label>縣市</label>
            <select
              name="city"
              className="form-control"
              value={cityIndex}
              onChange={this.onChangeCity}
            >
              {
                zipCodes.map(({ name }, index) =>
                  <option value={index} key={name}>{name}</option>)
              }
            </select>
          </div>
          <div className="col-4">
            <label>地區</label>
            <select
              className="form-control"
              value={areaIndex}
              onChange={this.onChangeArea}
            >
              {
                city.areas.map(({ name }, index) =>
                  <option value={index} key={name}>{name}</option>)
              }
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
