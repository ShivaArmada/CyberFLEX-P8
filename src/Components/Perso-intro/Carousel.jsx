import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
      active: typeof props.active === "number" ? props.active : 0,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  generateItems() {
    const { items, active } = this.state;
    if (!Array.isArray(items) || items.length === 0) {
      return [];
    }
    let result = [];
    for (let i = active - 2; i <= active + 2; i++) {
      let index = (i + items.length) % items.length;
      let level = active - i;
      result.push(
        <Item
          key={index}
          id={items[index].id}
          src={items[index].src}
          alt={items[index].alt}
          level={level}
          rating={items[index].rating}
        />
      );
    }
    return result;
  }

  moveLeft() {
    this.setState((prevState) => ({
      active: (prevState.active + 1 + prevState.items.length) % prevState.items.length,
    }));
  }

  moveRight() {
    this.setState((prevState) => ({
      active: (prevState.active - 1 + prevState.items.length) % prevState.items.length,
    }));
  }

  render() {
    const { items } = this.state;
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.moveLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="carousel">
          {this.generateItems()}
        </div>
        <div className="arrow arrow-right" onClick={this.moveRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    );
  }
}

const Item = ({ src, alt, level, rating }) => {
  const style = useSpring({
    transform: `scale(${1 - Math.abs(level) * 0.2})`,
    opacity: 1 - Math.abs(level) * 0.3,
  });

  return (
    <animated.div className={`item level${level}`} style={style}>
      <img src={src} alt={alt} loading="lazy" />
      <Popup rating={rating} />
    </animated.div>
  );
};

const Popup = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`full-${i}`}
        icon={faStar}
        className="star full-star"
      />
    );
  }

  if (halfStar) {
    stars.push(
      <FontAwesomeIcon
        key="half-star"
        icon={faStarHalfAlt}
        className="star half-star"
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${i}`}
        icon={faStarEmpty}
        className="star empty-star"
      />
    );
  }

  return <div className="popup">{stars}</div>;
};

export default Carousel;
