import React from "react";
import ReactDOM from "react-dom";
import ReactImagePalette from "../lib";
import image from './fairlight.png';

// Album cover for Com Truise - Fairlight

class TestComponent extends React.Component {
  componentDidCatch(err) {
    console.log(err.message);
  }
  render() {
    const { render } = this.props;
    return React.createElement(ReactImagePalette, { image }, render);
  }
}

describe("react-image-palette", () => {
  it("should parse a palette from an image", done => {
    const container = document.createElement("div");
    const render = style => {
      expect(style.backgroundColor).to.equal("rgb(60, 16, 32)");
      expect(style.color).to.equal("#EF4E2E");
      expect(style.alternativeColor).to.equal("#D17872");
      done();
      // Return an empty div so React doesn't throw an error
      // about an empty return
      return React.createElement("div");
    };
    ReactDOM.render(React.createElement(TestComponent, { render }), container);
  });
});
