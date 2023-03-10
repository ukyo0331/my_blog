import { FC } from 'react';
import { Node } from 'unist';

export type H2Props = {
  node?: Node;
  children?: React.ReactNode;
}

const H2Block: FC<H2Props> = ({ node, children = '' }) => {
  return (
    <div className='block'>
      <h3
        className='text-xl border-l-4 m-4 pl-4'
        id={node?.position?.start.line.toString()}
      >
        {children}
      </h3>
    </div>
  );
};

export default H2Block;
