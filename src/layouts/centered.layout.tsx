import React from "react";

interface Props extends React.PropsWithChildren {}

export const CenteredLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="layout-center">{children}</div>;
};
