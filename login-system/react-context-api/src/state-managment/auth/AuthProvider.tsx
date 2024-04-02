import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface AddUser {
    type: "ADD";
    user: string;
}

interface DeleteUser {
    type: "DELETE";
}

export type Action = AddUser | DeleteUser;

const authReducer = (state: string, action: Action): string => {
    if (action.type === "ADD") {
        localStorage.setItem("user", action.user);
        return action.user;
    }
    if (action.type === "DELETE") {
        localStorage.removeItem("user");
        return "";
    }
    return state;
};

interface Props {
    children: ReactNode;
}

function AuthProvider({ children }: Props) {
    const savedUser = localStorage.getItem("user");
    const [user, dispatch] = useReducer(authReducer, savedUser || "");
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
