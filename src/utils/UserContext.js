import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext"; // this is used for debugging in React Components

export default UserContext;
