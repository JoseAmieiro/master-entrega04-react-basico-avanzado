import React from "react";
import { Link } from "react-router-dom";

import { routes, FilterContext } from "@/core";
import { useMembers } from "../list.hooks";


export const ListCharacters = () => {
    const { organizationName, setOrganizationName } = React.useContext(FilterContext);
    const { members } = useMembers(organizationName);
        console.log(members)

    return (<div className="list-characters">
        {members.map((member) => (
            <React.Fragment key={member.id}>
                <img src={member.avatarUrl} />
                <span>{member.id}</span>
                <Link to={routes.detail(member.login)}>{member.login}</Link>
            </React.Fragment>
        ))}
    </div> )
}