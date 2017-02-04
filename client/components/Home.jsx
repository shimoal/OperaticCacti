import React from 'react'
import ListElement from './ListElement'

window.list = [
  {
    image:  'https://i.ytimg.com/vi/fjWPyuRvWEk/hqdefault.jpg',
    title: 'Jump in to Golden Gate Bridge',
    tourGuide: 'Mark',
    price: '$125',
    time: '2 hours',
    rating: 5.0,
    numberOfReviews: 27,
    id: 1,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg',
    title: 'Find a perfect girl with me in club',
    tourGuide: 'Will',
    price: '$125',
    time: '2 hours',
    rating: 3.5,
    numberOfReviews: 43,
    id: 2,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6b/one-of-the-most-photographed.jpg',
    title: 'Swimming under the Golden Gate Bridge',
    tourGuide: 'Alison',
    price: '$125',
    time: '2 hours',
    rating: 0.2,
    numberOfReviews: 56,
    id: 3,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg',
    title: 'Visit really secret place',
    tourGuide: 'Brenner',
    price: '$400',
    time: '2 hours',
    rating: 3.1,
    numberOfReviews: 13,
    id: 4,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8x_K4HtJY_cArGL5J9W8K_lp9wAkt0W1bk-8JZ_510IOjRdObdw',
    title: 'Smoke weed with me',
    tourGuide: 'Robin',
    price: '$200',
    time: '2 hours',
    rating: 4.3,
    numberOfReviews: 65,
    id: 5,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  },
  {
    image:  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlgLESw2gqJmCdxhrITEvF0fsOnx-4MURivJHgE7BizCcvpeBeZA',
    title: 'Have a dinner with me',
    tourGuide: 'Mark',
    price: '$300',
    time: '2 hours',
    rating: 2,
    numberOfReviews: 2,
    id: 6,
    description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
  } 
];



export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tours: window.list
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container jumboText">
            <h1 >Guide me</h1>
            <p >If you want special experience in San Francisco, find a local here!</p>
          </div>
        </div>
        <div className="space">
        </div>
        <div className="row">
          { this.state.tours.map((listElement)=>
            <ListElement listElement={listElement}/> 
          )}
        </div>
      </div>
    )
  }
}