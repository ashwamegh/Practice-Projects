import React, { Component } from "react";
import { Nav, NavItem, Navbar, FormGroup, FormControl, Button } from "react-bootstrap";
import "./Titlebar.css";

export default class Titlebar extends Component {
  constructor(props){
    super(props)
    this.state ={
      searckey:''
    }
  }

  renderMusicVideos() {
    this.props.videoSearch("music videos");
  }

  handleSubmit(){
    this.props.videoSearch(this.state.searckey);
  }

  renderTvSows() {
    this.props.videoSearch("episodes");
  }

  render() {
    return (
      <div className="titlebar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <img
                  src="/images/logo.png"
                  height="50px"
                  width="100px"
                  alt="brand logo"
                  className="brand-logo"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem
                eventKey={1}
                href="#"
                onClick={this.renderMusicVideos.bind(this)}
              >
                Music Videos
              </NavItem>
              <NavItem
                eventKey={2}
                href="#"
                onClick={this.renderTvSows.bind(this)}
              >
                TV Sows
              </NavItem>
            </Nav>
            <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={(e) => this.setState({searckey: e.target.value})}/>
            </FormGroup>
            {' '}
            <Button type="submit" onClick={ this.handleSubmit.bind(this) }>Submit</Button>
          </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
