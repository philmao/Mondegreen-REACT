import { Button } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
  const { match } = props;

  return (
    <section className="page-content">
      <div className="container">
        <div className="row">
          <Button color="primary" size="lg" block tag={Link} to={`/game_console/${match.params.id}`}>Start Game</Button>
        </div>
      </div>
    </section>
  );
}
