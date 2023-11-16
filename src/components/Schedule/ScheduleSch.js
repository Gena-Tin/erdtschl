import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import { getClass } from "../../api/Api";

function ScheduleSch({ classParam }) {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    const fetchClass = async () => {
      const data = await getClass(classParam);
      setScheduleData(data);
    };
    fetchClass();
  }, [classParam]);

  return (
    <div>
      <Container>
        {!scheduleData && <Loader />}

        {scheduleData && (
          <>
            <h3>{classParam}</h3>
            <table>
              <thead>
                <tr>
                  <th>Day\Lesson</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((daySchedule, index) => (
                  <tr key={index}>
                    <td>{daySchedule.Day}</td>
                    <td>{daySchedule["1"]}</td>
                    <td>{daySchedule["2"]}</td>
                    <td>{daySchedule["3"]}</td>
                    <td>{daySchedule["4"]}</td>
                    <td>{daySchedule["5"]}</td>
                    <td>{daySchedule["6"]}</td>
                    <td>{daySchedule["7"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </Container>
    </div>
  );
}

export default ScheduleSch;
