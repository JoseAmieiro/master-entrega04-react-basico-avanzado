import React from "react";
import { ProfileContext } from "@/core";


interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  const { userProfile } = React.useContext(ProfileContext);

  return (
    <div className="layout-app-container">
      <div className="layout-app-header">{userProfile.username}</div>
      {children}
    </div>
  );
};
