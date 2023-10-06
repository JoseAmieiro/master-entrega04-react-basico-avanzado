export interface MemberEntityVM {
  id: string;
  login: string;
  name: string;
  company: string;
  avatarUrl: string;
}

export const createDefaultMemberDetail = (): MemberEntityVM => ({
  id: "",
  login: "",
  name: "",
  company: "",
  avatarUrl: "",
});
