/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';

export default class ListPage extends Component { // eslint-disable-line react/prefer-stateless-function


  render() {

    return (
     
<div>
    
    

  <div className="container">
    <label><b>Welcome admin</b></label>

  </div>

</div>
    )
  }
}
