import React from 'react';
import Button from './button.jsx';

const helloWorld = () => (<section>
  <h1>Hello from React!</h1>
  <Button
    text="CLICK!"
    onclick={() => console.log('This is a super silly function')} />
</section>);

export default helloWorld;
