import React from "react";
import { useParams } from "react-router-dom";

import { Detail } from "./detail.component";
import { createDefaultMemberDetail, Member } from "./detail.vm";


export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<Member>(
    createDefaultMemberDetail());
  
  const { id } = useParams<{id: string}>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(r => r.json())
    .then(setMember);
    
  }, [])

  return <Detail member={member}/> 
};
