import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carousel.css"; // Assurez-vous d'avoir les styles nécessaires

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} id={this.state.items[index].id} src={this.state.items[index].src} alt={this.state.items[index].alt} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
        </div>
        <TransitionGroup className={`carousel ${this.state.direction}`}>
          {this.generateItems().map((item) => (
            <CSSTransition key={item.key} timeout={500} classNames="carousel-item">
              {item}
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    const className = "item level" + this.props.level;
    return (
      <div className={className}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default Carousel;