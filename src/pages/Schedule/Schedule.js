import React, { useState, useEffect } from "react";
import axios from "axios";

function Schedule() {
  const [sheetNames, setSheetNames] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    async function fetchSheetNames() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SCRIPT_URL}/sheets`
        );
        setSheetNames(response.data);
      } catch (error) {
        console.error("Ошибка при получении имен листов:", error);
      }
    }

    fetchSheetNames();
  }, []);

  const handleSheetButtonClick = async (sheetName) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SCRIPT_URL}/data?sheet=${sheetName}`
      );
      setSheetData(response.data);
      setSelectedSheet(sheetName);
    } catch (error) {
      console.error("Ошибка при получении данных листа:", error);
    }
  };

  return (
    <div>
      <h1>Названия листов в Google Таблице:</h1>
      <ul>
        {sheetNames.map((sheetName, index) => (
          <li key={index}>
            <button onClick={() => handleSheetButtonClick(sheetName)}>
              {sheetName}
            </button>
          </li>
        ))}
      </ul>

      {selectedSheet && (
        <div>
          <h2>Содержимое выбранного листа: {selectedSheet}</h2>
          <ul>
            {sheetData.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Schedule;
