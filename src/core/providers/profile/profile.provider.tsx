import { LoginScene } from "@/scenes";
import React from "react";
import { UserProfile } from "./profile.vm";

interface ProfileContextModel {
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

export const ProfileContext = React.createContext<ProfileContextModel>(null);

export const ProfileProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState<UserProfile>(null);

  const handleLogin = (username: string) => {
    setUserProfile({ username });
  };

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {!userProfile ? <LoginScene onLogin={handleLogin} /> : <>{children}</>}
    </ProfileContext.Provider>
  );
};
