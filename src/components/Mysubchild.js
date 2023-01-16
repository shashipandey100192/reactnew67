import React, { Fragment } from 'react';
import '../coreUI/global.css';

function Mysubchild(props) {
  return (
    <Fragment>
    <div>Mysubchild</div>
    <h3>{props.type}</h3>
    <h4>{props.ducat}</h4>
    </Fragment>
  )
}

export default Mysubchild