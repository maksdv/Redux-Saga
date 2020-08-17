import React from "react";

export const WelcomeComponent = ({ user }) => {
  if (!user) return null;
  return (
    <div className="welcome">
      <p className="welcomeText">{`Welcome ${user.first_name} ${user.last_name}!`}</p>
    </div>
  );
};
