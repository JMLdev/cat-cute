import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    Button
} from 'reactstrap';

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
            theCats: [],listCats: {},
            listVotes: {}, 
            activeIndex: 0 
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentWillMount() {
        API.getCats().then(res => {
            this.setState({ 
                theCats : res.data,
                listCats: res.data
            });
        });
        API.getVotes().then(res => {
            this.setState({
                listVotes: res.data
            });
        }).then(() => {
            let catList = Object.assign({}, this.state.listCats)
            // loop the top level objects
            for (let key in this.state.listVotes) {
                // loop each key
                for (let subkey in this.state.listVotes) {
                    if (this.state.listVotes.hasOwnProperty(subkey)) {
                        if (typeof this.state.listVotes[key].value !== 'undefined') {
                            let id = this.state.listVotes[key].image_id;
                            let vote = this.state.listVotes[key].value;
                            for (let key in catList) {
                                for (let subkey in catList) {
                                    if (catList[key].image_id === id) {
                                        catList[key].value = vote;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.setState({ listCats : catList })
        })
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
                const nextIndex = this.state.activeIndex === this.state.theCats.length - 1 ? 0 : this.state.activeIndex + 1;
                this.setState({ activeIndex: nextIndex });
            }, 1000
        )
    }

    previous() {
        setTimeout(
            ()=> {
                if (this.animating) return;
                const nextIndex = this.state.activeIndex === 0 ? this.state.theCats.length - 1 : this.state.activeIndex - 1;
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
        const slides = this.state.theCats.map((cat) => {
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
                    interval={false}
                >
                    {slides}
                </Carousel>
                {/* The below is just for testing if the post api call works. this will be removed once we have our 
                voting button set */}
                {/* <Button color="success" onClick={() => API.isCute('bod','imfm4j','1')}>Cute</Button>
                <Button color="danger" onClick={() => API.isCute()}>Crap</Button> */}
            </div>
        );
    }
}

export default CatCarousel;