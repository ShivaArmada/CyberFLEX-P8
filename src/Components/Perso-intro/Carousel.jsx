import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
      active: typeof props.active === 'number' ? props.active : 0,
      direction: "",
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentDidMount() {
    // Commenter ou supprimer l'appel à setInterval pour désactiver le changement automatique
    // this.interval = setInterval(this.moveRight, 1000); // Change every 5 seconds
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
        <Item key={index} id={items[index].id} src={items[index].src} alt={items[index].alt} level={level} />
      );
    }
    return result;
  }

  moveLeft() {
    this.setState((prevState) => ({
      active: (prevState.active - 1 + prevState.items.length) % prevState.items.length,
      direction: "left",
    }));
  }

  moveRight() {
    this.setState((prevState) => ({
      active: (prevState.active + 1) % prevState.items.length,
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
      </div>
    );
  }
}

export default Carousel;