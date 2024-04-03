import { create } from "zustand";

interface AuthState {
    user: string;
    login: (user: string) => void;
    logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
    user: localStorage.getItem("user") || "",
    login: (user) => set(() => {
        localStorage.setItem("user", user);
        return { user };
    }),
    logout: () => set(() => {
        localStorage.removeItem("user");
        return { user: "" };
    }),
}));

export default useAuth;