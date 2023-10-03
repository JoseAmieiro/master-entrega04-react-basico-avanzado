import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.MemberEntity[]): vm.MemberEntity[] =>
  data.map(mapMemberToVM);

const mapMemberToVM = (data: am.MemberEntity): vm.MemberEntity => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});
