import { MemberEntity } from "./api.model";

export const getMembers = (): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
    (response) => response.json()
  );
};
