import { MemberEntity } from "./api.model";

export const getMembers = (name: string): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${name}/members`).then(
    (response) => response.json()
  );
};
