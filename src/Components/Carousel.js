import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import * as API from './../Utilities/ApiResult';

class CatCarousel extends Component {
    constructor(props) {
    super(props);
    this.state = { testCats: [],  activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    }

    componentDidMount(){
    API.getCats().then(res => {
        this.setState({ 
            testCats : res.data 
        }, () => console.log(this.state.testCats));
    });
    }

    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
    const { activeIndex } = this.state;

    const slides = this.state.testCats.map((cat) => {
        return (
            <CarouselItem
            className="custom-tag"
            tag="div"
            key={cat.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
            >
                <img src={cat.image.url} alt={cat.image.id} />
                <CarouselCaption className="text-danger" captionText={cat.sub_id} captionHeader={cat.image.id} />
            </CarouselItem>
        )
    })

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