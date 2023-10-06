import { MemberEntity }  from "./api/api.model";
import {MemberEntityVM } from "./detail.vm";

export const mapMemberToVM = (data: MemberEntity): MemberEntityVM => ({
  id: data.id.toString(),
  login: data.login,
  avatarUrl: data.avatar_url,
  name: data.name,
  company: data.company,
});