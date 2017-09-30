import { Button, Jumbotron } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import Video from './VideoComponent';

export default function ProfilePage(props) {
  const { match } = props;

  return (
    <section className="page-content">
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h1 className="display-3">Mondegreen</h1>
            <p> /ˈmɒndɪɡriːn/ is a mishearing or misinterpretation of a phrase
             as a result of near-homophony, in a way that gives it a new meaning.</p>
            <hr />
          </Jumbotron>
          <Button id="start" color="secondary" size="lg" tag={Link} to={`/game_console/${match.params.id}`}>Start Playing!</Button>
          <Video />
        </div>
      </div>
    </section>
  );
}
