import React from "react";
import { useDebounce } from "use-debounce";
import { MemberEntity } from "./list.vm"

export const useMembers = (filter : string) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [debouncedFilter] = useDebounce(filter, 1500);
    console.log({members})
    React.useEffect(() => {
      fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
        .then((response) => response.json())
        .then((response) => {
          Array.isArray(response) ? setMembers(response) : setMembers([]);
          })
    }, [debouncedFilter]);
    return { members, debouncedFilter }
  }