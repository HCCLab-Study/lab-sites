import { useState } from 'react';
import Person from '../_data/Person';

export const usePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const handlePopupOpen = (person: Person) => {
        setSelectedPerson(person);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return {
        showPopup,
        selectedPerson,
        handlePopupOpen,
        handleClosePopup
    };
};
