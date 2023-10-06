import { MemberEntity } from "./api.model";

export const getMember = (id: string): Promise<MemberEntity> => {
  return fetch(`https://api.github.com/users/${id}`).then(
    (response) => response.json()
  );
};

