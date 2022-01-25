import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Timer from './timer';

export default function DetailButton({ ...card }) {
  const [isactive, setIsactive] = useState(false);

  const blocked = () => {
    setIsactive(true);
  };

  return (
    <div>
      <Link to={isactive ? '/' : `/ProductDetail/${card.id}`}>
        <Button variant="primary">Detail</Button>
      </Link>
      <Timer blocked={blocked} />
    </div>
  );
}
