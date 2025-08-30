import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Card.css';
export function Card(props) {
  return (
    <div className="card grid-cols-1 grid-rows-1">
      <div
        className="
       flex items-center justify-center bg-[var(--secondary)] rounded-[0.5rem] w-full h-[250px]  md:h-[250px]"
      >
        <img
          className="md:w-full w-[250px] h-[250px] p-5"
          src={props.image}
          alt={props.title}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h3>{props.title}</h3>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <h2>${props.price}</h2>
            <h3 className="text-[15px] line-through opacity-50 ">
              ${props.price + 50.12}
            </h3>
          </div>

          <div className="flex gap-1 items-center">
            <h2>{props.rate}</h2>
            <FaStar />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link className="primary-button">Add to Cart</Link>
        <Link className="secondary-button">View</Link>
      </div>
    </div>
  );
}
