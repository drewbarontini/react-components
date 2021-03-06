// *************************************
//
//   Gravatar
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import md5   from 'MD5';

// -------------------------------------
//   Base
// -------------------------------------

export default class Gravatar extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );
  }

  // ----- Is Default Gravatar ----- //

  _isDefaultGravatar( gravatar ) {
    return gravatar == 'http://www.gravatar.com/avatar/61792e37c91ef1e56ac90624e5a94f26';
  }

  // ----- Get Gravatar ----- //

  _getGravatar() {
    var gravatar = 'http://www.gravatar.com/avatar/' + md5( this.props.email );

    if ( this._isDefaultGravatar( gravatar ) ) {
      return 'https://unsplash.it/60';
    }

    return gravatar;
  }

  // ----- Render ----- //

  render() {
    return(
      <img
        className='gravatar'
        src={ this._getGravatar() }
        width='60' />
    );
  }

}
