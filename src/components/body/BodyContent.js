import { Component } from "react";

import { dataContent } from "../helpers/mockData";
import ImageContainer from "./ImageContainer";
import DescriptionContainer from "./DescriptionContainer";
import MangaOne from "../../static/manga-one.jpeg";
import TandemDrift from "../../static/tandem.jpeg";

export default class BodyContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [...dataContent],
    };
  }

  render() {
    return (
      <div className="body-content-container">
        <div className="main-content-wrapper">
          <DescriptionContainer data={this.state.data[0]} />
        </div>

        <div className="grid-layout-wrapper">
          <div className="grid-item">
            <DescriptionContainer data={this.state.data[2]} />
            <ImageContainer image={MangaOne} />
          </div>

          <div className="grid-item">
            <ImageContainer image={TandemDrift} />
            <DescriptionContainer data={this.state.data[4]} />
          </div>
        </div>

        <div className="final-content-wrapper">
          <DescriptionContainer data={this.state.data[5]} />
        </div>
      </div>
    );
  }
}
