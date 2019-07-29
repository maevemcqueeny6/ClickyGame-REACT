import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

let clickedPeople = [];
let score = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  handleClick = id => {
    console.log('The link was clicked');
      const clicked = this.state.friends.filter(friend=> friend.id === id);
      console.log(clicked);
      clickedPeople.push(clicked);
      console.log(clickedPeople);
      score += 1;
      console.log(score);
      // gameFunctionality(clickedPeople);
  }

  // gameFunctionality = clickedPeople => {
  //   if (this.clickedPeople){
  //     console.log('You Lose!');
  //   }
  //   else{
  //     score =+ 1;
  //   }
  // }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <span>{score}</span>
        <span>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </span>
      </Wrapper>
    );
  }
}

export default App;
