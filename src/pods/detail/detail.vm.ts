export interface Member {
  id: string;
  login: string;
  name: string;
  company: string;
  avatar_url: string;
}

export const createDefaultMemberDetail = (): Member => ({
  id: "",
  login: "",
  name: "",
  company: "",
  avatar_url: "",
});
