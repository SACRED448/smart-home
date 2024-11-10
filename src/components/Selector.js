import React, { useState } from 'react';

// Пример данных для таблицы
const dataOptions = {
    dataFromDevices: [
        {tytle: 'Данные с устройств', descrition: 'Значение атрибутов'},
    ],
    logsOfDevices: [
        {tytle: 'Журнал', descrition: 'Ведение журнала'},
    ],
    deviceQueries: [
        {tytle: 'Запросы к устройствам', descrition1: 'Запросы', descrition2: 'Наборы запросов'},
    ],
    devicesMap: [
        {tytle: 'Карта устройств', descrition1: 'Контроллеры УСПД', descrition2: 'Протоколы связи',
            descrition3: 'Список устройств', descrition4: 'Типы устройств'
        },
    ],
    periodicTasks: [
        {tytle: 'Периодические задачи', descrition1: 'Crontab', descrition2: 'Астрономические события',
            descrition3: 'Время', descrition4: 'Интервалы', descrition5: 'Периодические задачи',
        },
    ],
    usersAndGroups: [
        {tytle: 'Пользователи и группы', descrition1: 'Группы', descrition2: 'Пользователи'},
    ],
};

function App() {
    const [selectedValue, setSelectedValue] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setTableData(dataOptions[value] || []);
    };

    // const renderValues = (value) => {
    //     switch (value) {
    //         case 'dataFromDevices':
    //             tableData.map(item => (
    //                 item.tytle,
    //                 item.descrition
    //             ))};
    //         default:
    //             return 0;
    //     }
    // }

    return (
        <div>
            <select value={selectedValue} onChange={handleSelectChange}
            style={{ width: '300px', height: '50px', fontSize: '16px', textAlign: 'center' }}>
                <option value="">-- Выберите --</option>
                <option value="dataFromDevices">Данные с устройств</option>
                <option value="logsOfDevices">Журнал</option>
                <option value="deviceQueries">Запросы к устройствам</option>
                <option value="devicesMap">Карта устройств</option>
                <option value="periodicTasks">Периодические задачи</option>
                <option value="usersAndGroups">Пользователи и группы</option>
            </select>

            {tableData.length > 0 && (
                <table>
                    {/* <thead>
                    {tableData.map(item => (
                            <tr>
                                <tr>{item.tytle}</tr>
                                <tr>{item.descrition}</tr>
                                <tr><a href='#'>Изменить</a></tr>
                                <tr><a href='#'>Добавить</a></tr>
                            </tr>
                        ))}
                    </thead> */}
                    <tbody>

                    </tbody>
                    {tableData.map(item => (
                            <tr>
                                <tr>{item.tytle}</tr>
                                <tr>{item.descrition}</tr>
                                <tr><a href='#'>Изменить</a></tr>
                                <tr><a href='#'>Добавить</a></tr>
                            </tr>
                        ))}
                </table>
            )}
        </div>
    );
}

export default App;