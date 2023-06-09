
import {
    createContext,
    useState,
    useMemo,
    useReducer,
    useContext,
    useEffect,
} from "react";
import { reducer, actionTypes } from "./reducer";
import { tokens, themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { AuthProvider } from "./authContext";
import { Toaster } from "react-hot-toast";
// import { QueryClient, QueryClientProvider } from "react-query";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    // const [queryClient] = useState(() => new QueryClient());
    const router = useRouter()

    const initialState = useMemo(() => {
        return {
            theme: 'light'
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    const mode = useMemo(() => {
        return state.theme
    }, [state])
    const colors = tokens(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 600px)")
    const isMobileSmall = useMediaQuery("(max-width: 340px)")
    const isLarge = useMediaQuery("(min-width: 900px)");
    const [change, setChange] = useState(false)


    return (
        <ThemeContext.Provider
            value={{
                ...state,
                dispatch,
                actionTypes,
                colors,
                mode,
                open,
                setOpen,
                isMobile,
                isMobileSmall,
                change,

            }}
        >
            {/* <QueryClientProvider client={queryClient}> */}

            <Theme theme={theme}>
                <AuthProvider>
                    <CssBaseline />
                    {children}
                    <Toaster />
                </AuthProvider>
            </Theme>
            {/* </QueryClientProvider> */}

        </ThemeContext.Provider>
    );
};
export const useGlobalProvider = () => useContext(ThemeContext);
