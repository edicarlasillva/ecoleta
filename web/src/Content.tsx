import React from 'react';

interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = (props) => {
  return <section>{props.content}</section>;
};

export default Content;
