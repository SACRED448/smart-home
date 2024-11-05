import React, { useState } from 'react';

const Selector = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select 
                value={selectedOption} 
                onChange={handleChange} 
                style={{ width: '300px', height: '50px', fontSize: '16px' }} // Увеличение размера селектора
            >
                <option value="">-- Выберите --</option>
                <option value="option1">Данные с устройств</option>
                <option value="option2">Журнал</option>
                <option value="option3">Запросы к устройствам</option>
                <option value="option4">Карта устройств</option>
                <option value="option5">Периодические задачи</option>
                <option value="option5">Пользователи и группы</option>
            </select>
            {/* {selectedOption && <p>Вы выбрали: {selectedOption}</p>} */}
        </div>
    );
};

export default Selector;