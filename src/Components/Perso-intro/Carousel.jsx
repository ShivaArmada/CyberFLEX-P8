import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

const Item = ({ src, alt, level }) => {
  const style = useSpring({
    transform: `scale(${1 - Math.abs(level) * 0.2})`,
    opacity: 1 - Math.abs(level) * 0.3,
  });

  return (
    <animated.div className={`item level${level}`} style={style}>
      <img src={src} alt={alt} loading="lazy" />
    </animated.div>
  );
};

export default Carousel;