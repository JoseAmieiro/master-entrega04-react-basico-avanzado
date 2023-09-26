import React from "react";
import { useDebounce } from "use-debounce";


interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
  }
  
export const useMembers = (filter : string) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [debouncedFilter] = useDebounce(filter, 1500);
  
    React.useEffect(() => {
      fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
        .then((response) => response.json())
        .then((response) => {
          Array.isArray(response) ? setMembers(response) : setMembers([]);
          })
    }, [debouncedFilter]);
    return { members, debouncedFilter }
  }