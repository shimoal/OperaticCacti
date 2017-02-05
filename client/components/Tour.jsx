import React from 'react'
import axios from 'axios'

window.exampleTour =   {
    image:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8x_K4HtJY_cArGL5J9W8K_lp9wAkt0W1bk-8JZ_510IOjRdObdw',
    title: 'Smoke weed with me',
    tourGuide: 'Robin',
    price: '$200',
    time: '2 hours',
    rating: 4.3,
    numberOfReviews: 65,
    id: 5,
    description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
  };

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: window.exampleTour
    }
  }

  getTour() {
    axios.get('/#/tours/' + this.props.TourID)
      .then(function (response) {
        console.log('insdie then');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getTour();
  }


  render() {
    return (

      <div className="container singleTour">
      <div className="row">
        <div className="heading">
          <h2>{this.state.tour.title}</h2>
          <h3>Guide: {this.state.tour.tourGuide}</h3>
          <h4>{this.state.tour.price}</h4>

        </div>
      </div>
      <div className="row">

        <div className=" col-md-8 col-md-offset-2">
          <img src={this.state.tour.image} />
          <p>{this.state.tour.description}</p>
          <p>Rating: {this.state.tour.rating} ({this.state.tour.numberOfReviews} reviews) </p>
        </div>
      </div>

        <div className="row">
          <button className="col-md-4 col-md-offset-4">Book Now</button>
        </div>
      </div>
    );
  }
}


