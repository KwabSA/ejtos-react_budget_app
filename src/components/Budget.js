import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    const [value, setValue] = useState(budget);

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue >= 0 ? newValue : value);
      };
    

      const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
          setValue(value + 10);
          console.log('KeyUp pressed');
        } else if (event.key === 'ArrowDown' && value >= 10) {
          setValue(value - 10);
        }
      }; 

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    type="number"
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </span>
            
        </div>
    );
};
export default Budget;
