import print from './print';

const helloWorldComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = '<span>Hello Webpack!</span>';

  const button = document.createElement('button');
  button.innerHTML = 'Click me';
  button.onclick = print;
  element.appendChild(button);

  return element;
};

document.body.appendChild(helloWorldComponent());
