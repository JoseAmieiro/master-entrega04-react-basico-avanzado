import React from "react";

import { useMembers } from "./list.hooks"; 
import { FilterContext } from "@/core/"; 
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  const { organizationName,  } = React.useContext(FilterContext);
  const { members } = useMembers(organizationName);

  return (
    <>
      <List members={members} />
    </>
  );
};
