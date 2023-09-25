import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const useMembers = (filter : string) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 1500);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
      .then((response) => response.json())
      .then((response) => {
        Array.isArray(response) ? setMembers(response) : setMembers([]);
        })
  }, [debouncedFilter]);
  return { members }
}

export const ListPage: React.FC = () => {
  const [filter, setFilter] = React.useState("lemoncode");
  const { members } = useMembers(filter);

  return (
    <>
      <h2>List page</h2>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member, index) => (
          <React.Fragment key={index}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
}; 



// import React from "react";
// import { Link } from "react-router-dom";
// import { useDebounce } from "use-debounce";

// interface Filter {
//   filter: string;
// }

// interface ContextModel {
//   filter: Filter;
//   setFilter: (filter: Filter) => void;
// }

// // const UserFilterContext = React.createContext<ContextModel>(null);
// const UserFilterContext = React.createContext<ContextModel>({
//   filter: { filter: "" },
//   setFilter: () => {},
// });


// interface Props  {
//   children: React.ReactNode;
// }

// const UserFilterProvider: React.FC<Props> = (props) => {
//   const [filter, setFilter] = React.useState<Filter>({ filter: "lemoncode" });

//   return (
//     <UserFilterContext.Provider value={{ filter, setFilter }}>
//       {props.children}
//     </UserFilterContext.Provider>
//   );
// };

// interface MemberEntity {
//   id: string;
//   login: string;
//   avatar_url: string;
// }


// const useMembers = (filter : string) => {
//   const [members, setMembers] = React.useState<MemberEntity[]>([]);
//   const [debouncedFilter] = useDebounce(filter, 1500);

//   React.useEffect(() => {
//     fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
//       .then((response) => response.json())
//       .then((response) => {
//         Array.isArray(response) ? setMembers(response) : setMembers([]);
//         })
//   }, [debouncedFilter]);
//   return { members }
// }

// export const ListPage: React.FC = () => {
//   const { filter, setFilter} = React.useContext(UserFilterContext)
//   React.useEffect(() => {
//     setFilter({ filter: "lemoncode" });
//   }, [setFilter]);

//   const { members } = useMembers(filter.filter);


//   return (
//     <>
//       <UserFilterProvider>
//         <h2>List page</h2>
//         <input 
//           value={filter.filter} 
//           onChange={(e) => setFilter({...filter, filter: e.target.value})} />
//         <div className="list-user-list-container">
//           <span className="list-header">Avatar</span>
//           <span className="list-header">Id</span>
//           <span className="list-header">Name</span>
//           {members.map((member, index) => (
//             <React.Fragment key={index}>
//               <img src={member.avatar_url} />
//               <span>{member.id}</span>
//               <Link to={`/detail/${member.login}`}>{member.login}</Link>
//             </React.Fragment>
//           ))}
//         </div>
//         <Link to="/detail">Navigate to detail page</Link>
//       </UserFilterProvider>
//     </>
//   );
// };


// import React from "react";
// import { Link } from "react-router-dom";
// import { useDebounce } from "use-debounce";

// interface MemberEntity {
//   id: string;
//   login: string;
//   avatar_url: string;
// }

// const useMembers = (filter : string) => {
//   const [members, setMembers] = React.useState<MemberEntity[]>([]);
//   const [debouncedFilter] = useDebounce(filter, 1000);

//   React.useEffect(() => {
//     fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
//       .then((response) => response.json())
//       .then((response) => {
//         Array.isArray(response) ? setMembers(response) : setMembers([]);
//         })
//   }, [debouncedFilter]);

//   return { members }
// }

// interface Props  {
//   children: (filter: string, onChangeFilter: (filter: string) => void) => React.ReactNode;
// }

// interface ContextModel {
//   filter: string;
//   onChangeFilter: (filter: string) => void;
// }

// const FilterAuthContext = React.createContext<ContextModel>(null);

// const FilterAuthProvider: React.FC<Props> = (props) => {
//   const [filter, setFilter] = React.useState("lemoncode");

//   return <FilterAuthContext.Provider value={{
//             filter,
//             onChangeFilter: setFilter,
//             }}>{props.children(filter, setFilter)}
//          </FilterAuthContext.Provider>
// }



// export const ListPage: React.FC = () => {
//   const [filter, setFilter] = React.useState("lemoncode");
//   const { members } = useMembers(filter);

//   return (
//     <FilterAuthProvider>
//       {(debouncedFilter, setFilter) => (
//         <div>
//           <h2>List page</h2>
//           <input value={debouncedFilter} onChange={(e) => setFilter(e.target.value)} />
//           <div className="list-user-list-container">
//             <span className="list-header">Avatar</span>
//             <span className="list-header">Id</span>
//             <span className="list-header">Name</span>
//             {members.map((member, index) => (
//               <React.Fragment key={index}>
//                 <img src={member.avatar_url} />
//                 <span>{member.id}</span>
//                 <Link to={`/detail/${member.login}`}>{member.login}</Link>
//               </React.Fragment>
//             ))}
//           </div>
//           <Link to="/detail">Navigate to detail page</Link>
//         </div>
//       )}
//     </FilterAuthProvider>
//   );
// };
