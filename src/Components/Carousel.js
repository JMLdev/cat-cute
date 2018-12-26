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
            listVotes: {}, 
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

    render() {
        const { activeIndex } = this.state;
        const slides = this.props.list.map((cat) => {
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
                    
                    <Button type="button" color={'danger'} onClick={() => {API.isCute(cat.image.id, cat.sub_id,'0'); this.next();}} 
                    style={{position: style.position, left: style.voteDownLeft, bottom: style.bottom}} className={this.showVote(cat.value, 0)} >Crap</Button>

                    <Button type="button" color={'success'} onClick={() => {API.isCute(cat.image.id, cat.sub_id, '1'); this.next()}} 
                    style={{position: style.position, left: style.voteUpLeft, bottom: style.bottom}} className={this.showVote(cat.value, 1)} >Cute</Button>
                </CarouselItem>
            )
        })

        return (
            <div>
                <Graph list={this.props.list}  />
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