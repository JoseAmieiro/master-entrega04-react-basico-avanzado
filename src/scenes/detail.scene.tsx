import React from "react";
import { Link, useParams } from "react-router-dom";

import { routes } from "@/core";
import { AppLayout } from "@/layouts";


interface MemberDetail {
  id: string;
  name: string;
  login: string;
  avatarUrl: string
}

export const DetailScene: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(r => r.json())
    .then(setMember);
  }, [])

  return member ? (
    <AppLayout>
      <h2>Hello from Detail page</h2>
      <h3>{member.login}</h3>
        <img src={member.avatarUrl} alt= {member.login} width="150px"/>
        <p>Id: {member.id}</p>
        <p>Name: {member.name} </p>
      <Link to={routes.list}>Back to list page</Link>
    </AppLayout>
  ) : (
      <p>loading...</p>
  );
};
