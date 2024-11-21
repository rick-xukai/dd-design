import React from 'react';
import { ReactSVG } from 'react-svg';

const SVGRender = ({
  classProps,
  src,
}: {
  classProps: string;
  src: string;
}) => (
  <div className={classProps}>
    <ReactSVG src={src} />
  </div>
);

export default SVGRender;
