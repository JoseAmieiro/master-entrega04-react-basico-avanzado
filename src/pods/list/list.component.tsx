import React from "react";
import { Link } from "react-router-dom";

import { routes, FilterContext } from "@/core";
import { useMembers } from "./list.hooks";
import { MemberEntity } from "./list.vm";
import { ListHeader } from "./components";
import { ListCharacters } from "./components"

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { organizationName, setOrganizationName } = React.useContext(FilterContext);
  const [, setFilter] = React.useState("");
  const { members } = useMembers(organizationName);
  return (
    <>
      <h1>List page</h1>
      <input
        value={organizationName}
        onChange={(e) => {
          setFilter(e.target.value);
          setOrganizationName(e.target.value);
        }}
      />
      <div className="list-user-list-container">
        <ListHeader />
        <ListCharacters />
      </div>
    </>
  )
}