import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import ApiResult from '../Utilities/ApiResult';

class CatCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    item : {
      src: '',
      id: 1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    activeIndex: 0,
    items: [],
   };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  cloneItem = (obj) => Object.assign({}, this.state.item, ...obj)


  componentDidMount(){
    console.log(this.props.cats)
    this.setState({ 
      items : this.props.cats
    })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, items  } = this.state;
    let slides = items.map((item) => {
      return (
        <React.Fragment>      
          {/* <ApiResult />     */}
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited} >
            <img src={item.image.url} alt={item.image_id} />
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        </React.Fragment>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default CatCarousel;