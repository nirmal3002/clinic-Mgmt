// // src/components/ThemeModeProvider.js
// import React, { createContext, useState, useMemo, useEffect } from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import solarizedTheme from './container/Theme';

// export const ThemeModeContext = createContext();

// export const ThemeModeProvider = ({ children }) => {
//     const [mode, setMode] = useState('noctis-obscuro'); // Default to 'noctis-obscuro'

//     // Toggle between themes
//     const toggleTheme = () => {
//         setMode((prevMode) =>
//             prevMode === 'noctis-obscuro' ? 'noctis-hibernus' : 'noctis-obscuro'
//         );
//     };

//     // Memoize the theme object for performance optimization
//     const theme = useMemo(() => solarizedTheme(mode), [mode]);

//     // Log mode changes for debugging
//     useEffect(() => {
//         console.log(`Theme mode changed to: ${mode}`);
//     }, [mode]);

//     return (
//         <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 {children}
//             </ThemeProvider>
//         </ThemeModeContext.Provider>
//     );
// };