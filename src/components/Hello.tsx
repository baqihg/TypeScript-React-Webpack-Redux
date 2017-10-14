import * as React from 'react';
const style = require('./hello.css');
const imgX = require('../img/x.png');
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Hello extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className={style.hello}>
        <div className={style.greeting}>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        <img src={imgX} alt="imgX" />
      </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}