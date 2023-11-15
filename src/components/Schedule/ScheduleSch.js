import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";

const apiSchedule = axios.create({
  baseURL: process.env.REACT_APP_SCHEDULE_KEY,
});

function ScheduleSch({ classParam }) {
  const [scheduleData, setScheduleData] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiSchedule.get("", {
          params: { class: classParam },
        });
        setScheduleData(response.data.schedule);
        setIsloading(false);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchData();
  }, [classParam]);

  return (
    <div>
      <Container>
        {isLoading && <Loader />}

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
