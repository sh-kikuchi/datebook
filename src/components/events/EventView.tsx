import { useState } from 'react';
import FormWrap from './form/FormWrap';

function EventView() {
  return (
    <div>
      <div className="container">
        <div className='header'>
          <h1>Events</h1>
          <div><FormWrap /></div>
        </div>
      </div>
    </div>
  )
}

export default EventView;
