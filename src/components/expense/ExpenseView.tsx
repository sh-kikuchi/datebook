import { useState } from 'react';
import FormWrap from './form/FormWrap';

function expenseView() {
  return (
    <div>
      <div className="container">
        <div className='header'>
          <h1>お買い物リスト</h1>
          <div><FormWrap /></div>
        </div>
      </div>
    </div>
  )
}

export default expenseView;
