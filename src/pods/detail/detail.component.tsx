import React from "react";
import { Link } from "react-router-dom";
import { Member } from "./detail.vm";
import { routes } from "@/core";


interface Props {
  member: Member;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <div>
      <img src={member.avatar_url} />
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <Link to={routes.list}>Back to list page</Link>
    </div>
  );
}
