import React from "react";
import { Link } from "react-router-dom";
import { useMembers } from "@/pods/list/list.members-collection"; // Mirar donde va
import { FilterContext } from "@/pods/list/list.filter-context"; // Mirar donde va
import { routes } from "@/core";
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  const { organizationName, setOrganizationName } = React.useContext(FilterContext);
  const [, setFilter] = React.useState("");
  const { members } = useMembers(organizationName);
  

  return (
    <>
      <List members={members} />
    </>
  );
};
