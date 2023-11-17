import React, { useState, useEffect } from "react";
import { Card, CardGroup, Container, ListGroup } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import { getClass } from "../../api/Api";

function ScheduleSch({ className }) {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    const fetchClass = async () => {
      const data = await getClass(className);
      setScheduleData(data);
    };
    fetchClass();
  }, [className]);

  return (
    <div>
      <Container>
        {!scheduleData && <Loader />}
        {scheduleData && (
          <>
            <h3>{className}</h3>
            <CardGroup>
              {scheduleData.map((day, index) => (
                <Card style={{ width: "18rem" }} key={index}>
                  <Card.Body>
                    <Card.Title>{day.Day}</Card.Title>
                    <ListGroup as="ol" numbered>
                      {/* [...Array(Object.keys(day).length).keys()].slice(1).... 
                      создает массив чисел от 1 до 8 (по размеру объекта day) после чего мапим каждое число
                      в элемент списка
                      */}
                      {[...Array(Object.keys(day).length).keys()]
                        .slice(1)
                        .map((lessonNum, index) => (
                          <ListGroup.Item key={index} as="li">
                            {day[`lesson_${lessonNum}`]}
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </>
        )}
      </Container>
    </div>
  );
}

export default ScheduleSch;
