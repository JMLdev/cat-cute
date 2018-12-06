import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Progress } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Container>
            <Row style={{marginBottom: '64px', marginTop: "24px"}}>
                <Col>
                    <h1>
                        Cats, cute or crap?
                    </h1>
                </Col>
            </Row>
            <Row style={{marginBottom: '24px'}}>
                <Col>
                    <h2>
                        Status so far:
                    </h2>
                    <div>Cute</div>
                    <Progress value={70} />
                    <div>Crap</div>
                    <Progress value={20} color={"danger"} />
                </Col>
            </Row>
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
                            <Button color="primary">Vote Now</Button>
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
                            <Button color="success">View List</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default App;
