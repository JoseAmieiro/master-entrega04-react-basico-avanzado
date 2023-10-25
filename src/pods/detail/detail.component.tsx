import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { MemberEntityVM } from "./detail.vm";


interface Props {
  member: MemberEntityVM;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <div className="detail-component">
      <h1>Detail page</h1>
      <img src={member.avatarUrl} />
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <Link to={routes.list}>Back to list page</Link>
    </div>
  );
}
