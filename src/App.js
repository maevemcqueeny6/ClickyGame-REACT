import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import WhiteMen from './components/WhiteMen';
import WhiteWomen from './components/WhiteWomen';


import './App.css';
import WomenSubhead from './components/layout/WomenSubhead';
import MenSubhead from './components/layout/MenSubhead';

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
    ],
    whitewomen: [
      {
        id: 1,
        photo: require('./components/photos/IMG_6053 3.jpg'),
        name: 'Lewis Powell',
        clicked: false,
      },
      {
        id: 2,
        photo: require('./components/photos/IMG_6053 2.jpg'),
        clicked: false,
      },
      {
        id: 3,
        photo: require('./components/photos/IMG_6053 4.jpg'),
        name: 'Harry Blackmun',
        clicked: false,
      },
      {
        id: 4,
        photo: require('./components/photos/IMG_6053 5.jpg'),
        name: 'John Marshall Harlan II',
        clicked: false,
      },
      {
        id: 5,
        photo: require('./components/photos/IMG_6053 6.jpg'),
        name: 'Abe Fortas',
        clicked: false,
      },
      {
        id: 7,
        photo: require('./components/photos/IMG_6053 7.jpg'),
        name: 'John Paul Stevens',
        clicked: false,
      },
      {
        id: 8,
        photo: require('./components/photos/IMG_6053 8.jpg'),
        name: 'John William Rehnquist',
        clicked: false,
      },
      {
        id: 9,
        photo: require('./components/photos/IMG_6053 9.jpg'),
        name: 'Warren E Burger',
        clicked: false,
      },
      {
        id: 10,
        photo: require('./components/photos/IMG_6053 10.jpg'),
        name: 'Warren E Burger',
        clicked: false,
      },
      {
        id: 11,
        photo: require('./components/photos/IMG_6053 11.jpg'),
        name: 'Warren E Burger',
        clicked: false,
      },
      {
        id: 12,
        photo: require('./components/photos/IMG_6053 12.jpg'),
        name: 'Warren E Burger',
        clicked: false,
      },
      {
        id: 13,
        photo: require('./components/photos/IMG_6053.jpg'),
        name: 'Tiffany Trump',
        clicked: false,
      },
    ]
  };

  // Men's Game

  handleBtnClick = (id) => {
    let foundID = (this.state.whitemen.find((whiteman) =>
      (whiteman.id === id)
    ))
    console.log(foundID);
    this.gameLogic(foundID);
    this.shuffle();
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
          whiteman.clicked = !whiteman.clicked;
        }
        return (whiteman);
      })
    })
  }

  // Women's Game
  femHandleBtnClick = (id) => {
    let foundID = (this.state.whitewomen.find((whitewoman) =>
      (whitewoman.id === id)
    ))
    console.log(foundID);
    this.femGameLogic(foundID);
    this.femShuffle();
  }

  femShuffle = () => {
    let c = this.state.whitewomen;
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    this.setState({
      whitewomen: [...c]
    })
  }

  femGameLogic = (gal) => {
    if (gal.clicked === false) {
      console.log("she has not been clicked yet")
      this.femMarkClicked(gal.id);
      this.incrementScore();
    }
    else {
      console.log("he has been clicked")
      this.resetScoreZero();
      this.femResetClicked();
      alert("You lose!");
    }
  }

  femMarkClicked = (id) => {
    this.setState({

      whitewomen: this.state.whitewomen.map((whitewoman) => {
        if (whitewoman.id === id) {
          whitewoman.clicked = !whitewoman.clicked;
        }
        return (whitewoman);
      })
    })
  }

  femResetClicked = () => {
    this.setState({
      whitewomen: this.state.whitewomen.map((whitewoman) => {
        if (whitewoman.clicked === true) {
          whitewoman.clicked = !whitewoman.clicked;
        }
        return (whitewoman);
      })
    })
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





  render() {
    return (
      <Router>
        <div className="App">
          <Header
            count={this.state.count}
          />
          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <MenSubhead />
              <WhiteMen
                whitemen={this.state.whitemen}
                handleBtnClick={this.handleBtnClick}
              />
            </React.Fragment>
          )} />
          <Route path="/FOX" render={(props) => (
            <React.Fragment>
              <WomenSubhead />
              <WhiteWomen
                whitewomen={this.state.whitewomen}
                femHandleBtnClick={this.femHandleBtnClick}
              />
            </React.Fragment>
          )}
          />

        </div>
      </Router>
    );
  }
}

export default App;
