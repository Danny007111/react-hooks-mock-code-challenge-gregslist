import React, {useState} from "react";

function ListingCard({listingItem, onDeleteListing}) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listingItem.id}`, {
      method: "DELETE",
    })
      .then((u) => u.json())
      .then(() => {
        onDeleteListing(listingItem.id);
      });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingItem.image} alt={listingItem.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setIsFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listingItem.description}</strong>
        <span> · {listingItem.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
