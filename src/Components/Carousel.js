import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    Button
} from 'reactstrap';
import Graph from './Graph';

import * as API from './../Utilities/ApiResult';

const style = {
    position: 'absolute',
    bottom: '40px',
    voteUpLeft: '54%',
    voteDownLeft: '40%'
}

class CatCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0 
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        setTimeout(
            ()=> {
                if (this.animating) return;
                const nextIndex = this.state.activeIndex === this.props.list.length - 1 ? 0 : this.state.activeIndex + 1;
                this.setState({ activeIndex: nextIndex });
            }, 1000
        )
    }

    previous() {
        setTimeout(
            ()=> {
                if (this.animating) return;
                const nextIndex = this.state.activeIndex === 0 ? this.props.list.length - 1 : this.state.activeIndex - 1;
                this.setState({ activeIndex: nextIndex });
            }, 1000
        )
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    showVote(voteName, voteValue) {
        if (voteName === voteValue) {
            return 'focus';
        }
    }

    updateCute(catValue, value) {
        if (catValue !== value) {
            if (value === 1) {
                this.props.tally[1] = this.props.tally[1] + 1;
                this.props.tally[0] = this.props.tally[0] - 1;
            }
            else if (value === 0) {
                this.props.tally[0] = this.props.tally[0] + 1;
                this.props.tally[1] = this.props.tally[1] - 1;
            }
        }
    }

    render() {
        const { activeIndex } = this.state;
        let individualCat = -1;
        const slides = this.props.list.map((cat) => {
            individualCat++;
            return (
                <CarouselItem
                className="custom-tag"
                tag="div"
                key={cat.id}
                onExiting={this.onExiting}
                onExited={this.onExited}
                >
                    <img src={cat.image.url} alt={cat.image.id} style={{width: "100%"}} />
                    {/* Not able to view the button for voting. We need to pass parameters for the post api call */}
                    
                    <Button type="button" color={'danger'} data-tag={individualCat} 
                    onClick={(event) => {API.isCute(cat.image.id, cat.sub_id,'0'); this.updateCute(cat.value, 0);  this.props.updateVoteCount(event.target.getAttribute('data-tag'), 0); this.next();}} 
                    style={{position: style.position, left: style.voteDownLeft, bottom: style.bottom}} className={this.showVote(cat.value, 0)} >
                        Crap
                    </Button>

                    <Button type="button" color={'success'} data-tag={individualCat}
                    onClick={(event) => {API.isCute(cat.image.id, cat.sub_id, '1'); this.updateCute(cat.value, 1);  this.props.updateVoteCount(event.target.getAttribute('data-tag'), 1); this.next(); }} 
                    style={{position: style.position, left: style.voteUpLeft, bottom: style.bottom}} className={this.showVote(cat.value, 1)} >
                        Cute
                    </Button>
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
                <Graph tally={this.props.tally} />
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={false}
                >
                    {slides}
                </Carousel>
            </div>
        );
    }
}

export default CatCarousel;