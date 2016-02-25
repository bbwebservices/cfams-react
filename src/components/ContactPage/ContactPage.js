/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';
var $ = require ('jquery');
const title = 'Contact Us';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {dash: props.dash};
  }
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    console.log('wow');
  }

  componentDidMount() {
    this.loadFromExternalApi();
    // setInterval(this.loadFromExternalApi, this.props.pollInterval);
  }

  loadFromExternalApi() {
    $.ajax({
      url: 'http://localhost:3004',
      dataType: 'json',
      success: (data) => {
        console.log(data[0].title);
        this.setState({dash: data[0].title});
      },
      error: (xhr, status, err) => {
        console.log(xhr,status,err);
      }
    });
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>{this.state.dash}</p>
        </div>
      </div>
    );
  }

}
ContactPage.propTypes = {
  dash: React.PropTypes.string
};
ContactPage.defaultProps = {
  dash: " hey "
};
export default withStyles(ContactPage, s);
