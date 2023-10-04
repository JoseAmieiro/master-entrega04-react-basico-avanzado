import React from "react";

import { useDebounce } from "use-debounce";

import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";
import { MemberEntity } from "./list.vm"

export const useMembers = (filter : string) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [debouncedFilter] = useDebounce(filter, 1500);
    React.useEffect(() => {
      getMembers(debouncedFilter)
        .then((response) => {
          Array.isArray(response) ? setMembers(mapMembersToVM(response)) : setMembers([]);
          })
    }, [debouncedFilter]);
    return { members, debouncedFilter }
  }