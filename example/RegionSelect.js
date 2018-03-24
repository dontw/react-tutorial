import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIdx: -1,
    areaIdx: 0,
  }
  onChangeCity = (e) => {
    const { value } = e.target;
    console.log(value);
    this.setState({
      cityIdx: this.state.cityIdx === -1 ? value - 1 : value,
      // cityIdx: value,
      areaIdx: 0,
    });
  }
  onChangeArea = (e) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }
  render() {
    const { cityIdx, areaIdx } = this.state;
    const newZipCodes = [...zipCodes];
    let city = null;
    let areas = null;
    let area = { zip: '' };
    if (cityIdx === -1) {
      newZipCodes.splice(0, 0, { name: '請選擇' });
      areas = [{ name: '請選擇' }];
    } else {
      city = zipCodes[cityIdx];
      areas = city.areas; // eslint-disable-line
      area = areas[areaIdx];
    }

    return (
      <section>
        <div className="form-row">
          <div className="col-4">
            <label>縣市</label>
            <select
              className="form-control"
              value={cityIdx}
              onChange={this.onChangeCity}
            >
              {
                newZipCodes.map(({ name }, idx) =>
                  <option value={idx} key={name}>{name}</option>)
              }
            </select>

          </div>
          <div className="col-4">
            <label>地區</label>
            <select className="form-control" value={areaIdx} onChange={this.onChangeArea} disabled={cityIdx === -1}>
              {
                areas.map(({ name }, idx) => <option value={idx} key={name}>{name}</option>)
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
