import React, { Component } from 'react';
import Header from './components/layout/Header';
import WhiteMen from './components/WhiteMen';

import './App.css';

class App extends Component {
  state = {
    count: 0,
    whitemen: [
      {
        id: 1,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/US_Supreme_Court_Justice_Lewis_Powell_-_1976_official_portrait.jpg',
        name: 'Lewis Powell',
        clicked: false,
      },
      {
        id: 2,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Earl_Warren.jpg',
        name: 'Earl Warren',
        clicked: false,
      },
      {
        id: 3,
        photo: 'http://cdn.loc.gov/service/pnp/cph/3b00000/3b07000/3b07800/3b07876r.jpg',
        name: 'Harry Blackmun',
        clicked: false,
      },
      {
        id: 4,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/John_Marshall_Harlan_II_official.jpg',
        name: 'John Marshall Harlan II',
        clicked: false,
      },
      {
        id: 5,
        photo: 'https://www.senate.gov/artandhistory/history/resources/graphic/xlarge/AbeFortas.jpg',
        name: 'Abe Fortas',
        clicked: false,
      },
      // {
      //   id: 6,
      //   photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/US_Supreme_Court_Justice_Potter_Stewart_-_1976_official_portrait.jpg',
      //   name: 'Potter Stewart',
      //   clicked: false,
      // },
      {
        id: 7,
        photo: 'https://www.nysfda.org/images/PageImages/2019Additions/Justice_John_Paul_Stevens_III.jpg',
        name: 'John Paul Stevens',
        clicked: false,
      },
      {
        id: 8,
        photo: 'https://www.conservapedia.com/images/a/a2/Rehnquist.jpg',
        name: 'John William Rehnquist',
        clicked: false,
      },
      {
        id: 9,
        photo: 'https://s3.amazonaws.com/libapps/accounts/2491/images/por_11073_p2.jpg',
        name: 'Warren E Burger',
        clicked: false,
      }
    ]
  };



  handleBtnClick = (id) => {
    let foundID = (this.state.whitemen.find((whiteman) =>
      (whiteman.id === id)
    ))
    console.log(foundID);
    this.gameLogic(foundID);
    this.shuffle();


    // this.markClicked(foundID.id)
  }

  shuffle = () => {
    let c = this.state.whitemen;
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    this.setState({
      whitemen: [...c]
    })
  }


  gameLogic = (guy) => {
    if (guy.clicked === false) {
      console.log("he has not been clicked yet")
      this.markClicked(guy.id);
      this.incrementScore();
    }
    else {
      console.log("he has been clicked")
      this.resetScoreZero();
      this.resetClicked();
      alert("You lose!");
    }
  }


  // Score handling
  incrementScore = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }

  resetScoreZero = () => {
    this.setState({
      count: 0
    });
  }

  // Mark Clicked
  markClicked = (id) => {
    this.setState({

      whitemen: this.state.whitemen.map((whiteman) => {
        if (whiteman.id === id) {
          whiteman.clicked = !whiteman.clicked;
        }
        return (whiteman);
      })
    })

  }

  resetClicked = () => {
    this.setState({
      whitemen: this.state.whitemen.map((whiteman) => {
        if (whiteman.clicked === true) {
          whiteman.clicked =! whiteman.clicked;
        }
        return (whiteman);
      })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="container">
          <Header
            count={this.state.count}
          />

          <WhiteMen
            whitemen={this.state.whitemen}
            // markClicked={(this.markClicked)}
            handleBtnClick={this.handleBtnClick}
          />

        </header>
      </div>
    );
  }
}

export default App;
