import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function Console() {
  return (
    <div className="container">
      <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
    </div>
  );
}

