import { Button, Jumbotron } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/react.scss';

export default function ProfilePage(props) {
  const { match } = props;

  return (
    <section className="page-content">
      <div className="container">
        <Jumbotron>
          <h1 className="display-3">Mondegreen Game!</h1>
          <p> /ˈmɒndɪɡriːn/ is a mishearing or misinterpretation of a phrase as a result of near-homophony, in a way that gives it a new meaning.</p>
          <hr />
          <p>Play the game and guess the correct lyrics from the misheard lyrics.</p>
        </Jumbotron>
        <Button color="primary" size="lg" block tag={Link} to={`/game_console/${match.params.id}`}>Start Game</Button>
      </div>
    </section>
  );
}
