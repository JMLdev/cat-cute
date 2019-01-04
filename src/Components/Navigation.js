import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
      }
      toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <Row>
                <Col>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand tag={Link} to="/"><img src={window.location.origin + '/cat-cute/images/logo.png'} alt="Cats website logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/rate">Rate</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/list">List</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}

export default Navigation;