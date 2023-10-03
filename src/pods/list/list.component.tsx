import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core";

import { useMembers } from "./list.members-collection"; // Mirar donde va
import { FilterContext } from "./list.filter-context"; // Mirar donde va
import { MemberEntity } from "./list.vm";
import { ListHeader } from "./components";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { organizationName, setOrganizationName } = React.useContext(FilterContext);
  const [, setFilter] = React.useState("");
  const { members } = useMembers(organizationName);
  const {} = props;
  return (
    <>
      <h2>List page</h2>
      <input
        value={organizationName}
        onChange={(e) => {
          setFilter(e.target.value);
          setOrganizationName(e.target.value);
        }}
      />
      <div className="list-user-list-container">
      <ListHeader />
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  )
}