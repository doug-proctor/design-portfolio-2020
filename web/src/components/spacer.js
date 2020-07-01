import React from 'react';

function Spacer({ mt, mb, pt, pb, children }) {
  const style = {}

  if (mt) style.marginTop = mt
  if (mb) style.marginBottom = mb
  if (pt) style.paddingTop = pt
  if (pb) style.paddingBottom = pb

  return <div style={style}>{children}</div>;
}

export default Spacer
