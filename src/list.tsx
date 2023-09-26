import React from "react";
import { Link } from "react-router-dom";
import { useMembers } from "./members-collection";
import { FilterContext } from "./filter-context";



export const ListPage: React.FC = () => {
  const { organizationName, setOrganizationName } = React.useContext(FilterContext);
  const [, setFilter] = React.useState("");
  const { members } = useMembers(organizationName);
  
  return (
    <>
      <h2>List page</h2>
      <input value={organizationName} onChange={(e) => {
        setFilter(e.target.value)
        setOrganizationName(e.target.value)
        }
      }/>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member, index) => (
          <React.Fragment key={index}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
}; 

