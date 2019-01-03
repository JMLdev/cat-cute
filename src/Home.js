import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Heading from './Components/Heading';
import Graph from './Components/Graph';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Heading heading='Cats, cute or crap?' />
                <Graph tally={this.props.tally} />
                <Row>
                    <Col>
                        <p style={{marginBottom: '24px'}}>Cat ipsum dolor sit amet, sleep but scratch my tummy actually i hate you now fight me. Sleep everywhere, but not in my bed flop over scratch my tummy actually i hate you now fight me curl into a furry donut. Chase after silly colored fish toys around the house scratch my tummy actually i hate you now fight me and human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardImg top width="100%" src="https://placekitten.com/318/180" alt="Cat image" />
                            <CardBody>
                                <CardTitle>Cute or Not?</CardTitle>
                                <CardSubtitle>Vote on pictures of cats</CardSubtitle>
                                <CardText>Cute, or the next ugly cat meme? You be the judge. Browse through images of cats and determine which are cute and which are crap.</CardText>
                                <Link to="/rate">
                                    <Button color="primary">Vote Now</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardImg top width="100%" src="https://placekitten.com/318/181" alt="Cat image" />
                            <CardBody>
                                <CardTitle>Index of Results</CardTitle>
                                <CardSubtitle>See a list of kitties.</CardSubtitle>
                                <CardText>How did they fare? Find out now. Easily browse the kitty cats and see their ranking.</CardText>
                                <Link to="/list">
                                    <Button color="success">View List</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
export default Home;