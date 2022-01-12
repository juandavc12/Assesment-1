/* eslint-disable */
import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Timer from './timer';

export default function DetailButton() {
  // const [isactive, setIsactive] = useState(false);

  const blocked = () => {
    setIsactive(true);
  };
  
  return (
    <div>
      <Link to={'#'}>
      <Button variant="primary">Detail</Button>
      </Link>
      <Timer blocked={blocked} />
    </div>
  );
}


// export default function DetailButton({ ...card }) {
//   const [isactive, setIsactive] = useState(false);

//   const blocked = () => {
//     setIsactive(true);
//   };

//   return (
//     <div>
//       <Link
//         className="buttoncard"
//         to={isactive ? "#" : `/productdetail/${card.id}`}
//       >
//         Go to Detail
//       </Link>
//       <Timer blocked={blocked} />
//     </div>
//   );
// }
