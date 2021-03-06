import React, { Component } from 'react';

class ImagePreview extends Component {
  state = {
    img: '',
    file: null,
  }
  onFileSelected = (e) => {
    const file = e.target.files.item(0);
    const reader = new FileReader();
    reader.addEventListener('load', this.onImageLoad);
    reader.readAsDataURL(file);
    this.setState({ file });
  }
  onImageLoad = (e) => {
    this.setState({ img: e.target.result });
  }
  render() {
    return (
      <section>
        <input accept="image/*" type="file" onChange={this.onFileSelected} />
        <br />
        <img src={this.state.img} width="300" alt="preview" />
      </section>
    );
  }
}
export default ImagePreview;
