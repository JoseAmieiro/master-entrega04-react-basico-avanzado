export interface MemberEntity {
  id: number;
  login: string;
  avatarUrl: string;
}

export interface FilterContext {
  organizationName: string;
  setOrganizationName: (value: string) => void;
}