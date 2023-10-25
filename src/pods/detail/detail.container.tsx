import React from "react";
import { useParams } from "react-router-dom";
import { getMember } from "./api/api";
import { MemberEntity } from "./api/api.model";

import { Detail } from "./detail.component";
import { mapMemberToVM } from "./detail.mappers";
import { createDefaultMemberDetail, MemberEntityVM } from "./detail.vm";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberEntityVM>(
    createDefaultMemberDetail()
  );

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getMember(id).then(member => {
      setMember(mapMemberToVM(member));
    })
  }, [])


  return <Detail member={member} />;
};
