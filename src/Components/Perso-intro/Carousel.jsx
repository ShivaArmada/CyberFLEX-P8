import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      direction: "",
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
      direction: "left",
    }));
  }

  moveRight() {
    this.setState((prevState) => ({
      active: (prevState.active - 1 + prevState.items.length) % prevState.items.length,
      direction: "right",
    }));
  }

  render() {
    const { items } = this.state;
    if (!Array.isArray(items) || items.length === 0) {
      return null; // Return null if there are no items
    }

    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.moveLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <TransitionGroup className={`carousel ${this.state.direction}`}>
          {this.generateItems().map((item) => (
            <CSSTransition key={item.key} timeout={500} classNames="carousel-item">
              {item}
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={this.moveRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    const className = `item level${this.props.level}`;
    return (
      <div className={className}>
        <img src={this.props.src} alt={this.props.alt} />
        <Popup rating={this.props.rating} />
      </div>
    );
  }
}

const Popup = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  // Ajouter les étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`full-${i}`}
        icon={faStar}
        className="star full-star"
      />
    );
  }

  // Ajouter la demi-étoile s'il y en a une
  if (halfStar) {
    stars.push(
      <FontAwesomeIcon
        key="half-star"
        icon={faStarHalfAlt}
        className="star half-star"
      />
    );
  }

  // Ajouter les étoiles vides
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
