import { createContext, useState, Dispatch, SetStateAction } from "react";
import PropTypes from "prop-types";

export const OpenObjectiveMenuContext = createContext({
    currentObjectiveId: '',
    setCurrentObjectiveId: ()=>{},
    isMenuOpen: false,
    setIsMenuOpen: ()=>{}
});

export default function OpenObjectiveMenuProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentObjectiveId, setCurrentObjectiveId] = useState('');
    return (
        <OpenObjectiveMenuContext.Provider
            value={{ currentObjectiveId, setCurrentObjectiveId, isMenuOpen, setIsMenuOpen }}
        >
            {children}
        </OpenObjectiveMenuContext.Provider>
    );
}