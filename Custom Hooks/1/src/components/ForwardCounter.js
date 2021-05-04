import useCounter from '../hooks/use-counter-with-callback-param';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter((e) => e + 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
