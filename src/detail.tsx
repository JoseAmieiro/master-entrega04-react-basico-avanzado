import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetail {
  id: string;
  name: string;
  login: string;
  avatar_url: string
}



export const DetailPage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(r => r.json())
    .then(setMember);
  }, [])

  return member ? (
    <>
      <h2>Hello from Detail page</h2>
      <h3>{member.login}</h3>
        <img src={member.avatar_url} alt= {member.login} width="150px"/>
        <p>Id: {member.id}</p>
        <p>Name: {member.name} </p>
      <Link to="/list">Back to list page</Link>
    </>
  ) : (
      <p>loading...</p>
  );
};
