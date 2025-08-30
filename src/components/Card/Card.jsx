import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import FaHeart icon
import { useWishlist } from '../../context/WishlistContext'; // Import useWishlist hook
import './Card.css';
export function Card(props) {
  const { id, title, image, price, rate, inStock, handleMoveToCart, handleRemoveItem } = props;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist(); // Use wishlist hook

  const isProductInWishlist = isInWishlist(id); // Check if product is in wishlist

  const handleWishlistClick = () => {
    if (isProductInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, title, image, price, rate, inStock }); // Add inStock property
    }
  };

  return (
    <div className="card grid-cols-1 grid-rows-1">
      <div
        className="
       relative flex items-center justify-center bg-[var(--secondary)] rounded-[0.5rem] w-full h-[250px]  md:h-[250px]"
      >
        <img
          className="md:w-full w-[250px] h-[250px] p-5"
          src={image}
          alt={title}
        />
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 p-2 rounded-full
           ${isProductInWishlist ? 'text-[var(--primary)]' : 'text-[var(--shadow)]'} 
           bg-white shadow-md transition-all duration-300`}
        >
          <FaHeart size={20} />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h3>{title}</h3>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <h2>${price}</h2>
            <h3 className="text-[15px] line-through opacity-50 ">
              ${price + 50.12}
            </h3>
          </div>

          <div className="flex gap-1 items-center">
            <h2>{rate}</h2>
            <FaStar />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {handleMoveToCart && (
          <button
            onClick={() => handleMoveToCart(id)}
            className={!inStock ? 'disabled-button' : 'primary-button'}
            disabled={!inStock}
          >
            {inStock ? 'Move to Cart' : 'Out of Stock'}
          </button>
        )}
        {handleRemoveItem && (
          <button
            onClick={() => handleRemoveItem(id)}
            className="secondary-button"
          >
            Remove from Wishlist
          </button>
        )}
        {!handleMoveToCart && !handleRemoveItem && (
          <Link to={`/product/${id}`} className="primary-button">
            Add to Cart
          </Link>
        )}
        <Link to={`/product/${id}`} className="secondary-button">
          View
        </Link>
      </div>
    </div>
  );
}
