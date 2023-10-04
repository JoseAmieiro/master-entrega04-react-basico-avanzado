import React from "react";

interface FilterContext {
  organizationName: string;
  setOrganizationName: (value: string) => void;
}

interface Props {
    children?: React.ReactNode;
}

export const FilterContext = React.createContext<FilterContext>({
    organizationName: "",
    setOrganizationName: (value: string) => {},
});

export const FilterContextProvider: React.FC <Props> = (props) => {
    const [organizationName, setOrganizationName] = React.useState("lemoncode");

    return (
        <FilterContext.Provider value={{ organizationName, setOrganizationName }}>
            {props.children}
        </FilterContext.Provider>
    );
};

