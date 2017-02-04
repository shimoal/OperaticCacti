import React from 'react'

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.params.TourID}</h2>
      </div>
    );
  }
}


