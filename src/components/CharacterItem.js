import React from "react";

// FaHeart FaRegHeart
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CharacterItem = ({ item }) => {
  const setFavorite = (item) => {
    var previousData = JSON.parse(localStorage.getItem("favorites"));
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  const unsetFavorite = (item) => {
    var previousData = JSON.parse(localStorage.getItem("favorites"));
    var firstElement = previousData[0];
    var lastElement = previousData.pop();

    if (firstElement === lastElement) {
      localStorage.setItem("favorites", "[]");
    } else if (JSON.stringify(item) === JSON.stringify(lastElement)) {
      localStorage.setItem(
        "favorites",
        localStorage
          .getItem("favorites")
          .replace("," + JSON.stringify(item), "")
      );
    } else {
      localStorage.setItem(
        "favorites",
        localStorage
          .getItem("favorites")
          .replace(JSON.stringify(item) + ",", "")
      );
    }
  };
  return (
    <Link to="/personagem" state={item}>
      <div className="content">
        <div className="content-inner">
          <div className="content-front">
            <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
          </div>

          <li className="favorite" style={{ textAlign: "center" }}>
            {localStorage
              .getItem("favorites")
              .includes(JSON.stringify(item)) ? (
              <button
                style={{ width: "100%" }}
                type="button"
                onClick={() => unsetFavorite(item)}
              >
                <FaHeart style={{ color: "red" }}></FaHeart>
              </button>
            ) : (
              <button
                style={{ widows: "100%" }}
                type="button"
                onClick={() => setFavorite(item)}
              >
                <FaRegHeart></FaRegHeart>
              </button>
            )}
          </li>
        </div>
      </div>
    </Link>
  );
};
export default CharacterItem;
