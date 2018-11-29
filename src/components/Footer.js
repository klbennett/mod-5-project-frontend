import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <div>
        <nav class="footer is-fixed-bottom">
          <div class="content has-text-centered">
            <p>
              <strong>WhatTheySaid</strong> by <a href="https://google.com">
                Kay Bennett
              </a>. Built with React, Redux, Javascript, Rails and Bulma.
            </p>
          </div>
        </nav>
      </div>;
  }
}