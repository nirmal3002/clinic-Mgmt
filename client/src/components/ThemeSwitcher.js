// // src/components/ThemeSwitcher.js
// import React, { useContext } from 'react';
// import { ThemeModeContext } from './ThemeModeProvider';
// import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// const ThemeSwitcher = () => {
//     const { mode, toggleTheme } = useContext(ThemeModeContext);

//     return (
//         <FormControl variant="outlined" size="small" style={{ marginLeft: 'auto' }}>
//             <InputLabel>Theme</InputLabel>
//             <Select
//                 value={mode}
//                 onChange={(e) => toggleTheme(e.target.value)}
//                 label="Theme"
//             >
//                 <MenuItem value="hibernus">Noctis Hibernus</MenuItem>
//                 <MenuItem value="obscuro">Noctis Obscuro</MenuItem>
//             </Select>
//         </FormControl>
//     );
// };

export default ThemeSwitcher;