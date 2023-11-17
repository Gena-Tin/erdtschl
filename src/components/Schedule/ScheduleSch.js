import React, { useState, useEffect } from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import { getClass } from "../../api/Api";
import { nanoid } from "nanoid";

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
            <Accordion.Item eventKey={className}>
              <Accordion.Header>{className}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  {scheduleData.map((day, index) => (
                    <Col md={6} xl={4} xxl={3} key={nanoid()}>
                      <Card>
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
                                <ListGroup.Item key={nanoid()} as="li">
                                  {day[`lesson_${lessonNum}`]}
                                </ListGroup.Item>
                              ))}
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </>
        )}
      </Container>
    </div>
  );
}

export default ScheduleSch;
