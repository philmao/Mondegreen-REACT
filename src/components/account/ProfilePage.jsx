

import { Button } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import Video from './VideoComponent';

export default function ProfilePage(props) {
  const { match } = props;

  return (
    <section className="page-content">
      <div className="container">
        <div className="row">
          <Video>
            <Button color="primary" size="lg" block tag={Link} to={`/game_console/${match.params.id}`}>Start Game</Button>
          </Video>
        </div>
      </div>
    </section>
  );
}






