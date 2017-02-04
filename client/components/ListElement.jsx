import React from 'react'

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
        backgroundImage: 'url(' + this.props.listElement.image + ')'
    }

    const href = "/tours/" + this.props.listElement.id;

    return (
      <div className="col-md-4 listElement">
        <a href={href} target="_blank">
          <div>
            <div className="listImage center-cropped" style={divStyle}>
            </div>
          </div>
          <div className="bottomRow">
            <div className="priceAndTitle">
              <span className="price">
                {this.props.listElement.price}
              </span>
              <span className="title">
                {this.props.listElement.title}
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}