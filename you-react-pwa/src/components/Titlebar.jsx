import React, { Component } from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import "./Titlebar.css";

export default class Titlebar extends Component {
  renderMusicVideos() {
    this.props.videoSearch("music videos");
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
