import { useEffect, useState } from "react";
import { AppointmentPicker } from "react-appointment-picker";

import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

import { Container, Row, Col } from "react-bootstrap";
import { getDay } from "date-fns";

import SlotAppointment from "./SlotAppointment";

export function BookAppointment() {
  const [lodaing, setLoading] = useState(false);
  const [date, setDate] = useState(new Date(new Date().setHours(8, 0, 0, 0)));
  const [appointment, setAppointment] = useState("");

  const modifiers = {
    disabled: (date) => getDay(date) === 0 || getDay(date) === 6, // Disables Saturdays
  };

  useEffect(() => {
    if (date != null) {
      console.log("getting appointments");
      const days = [
        [
          {
            id: 1,
            number: 1,
          },
          {
            id: 2,
            number: 2,
            isReserved: true,
          },
          {
            id: 3,
            number: 3,
          },
          {
            id: 4,
            number: 4,
            isSelected: true,
          },
          {
            id: 5,
            number: 5,
          },
        ],
      ];
      setAppointment(
        <AppointmentPicker
          addAppointmentCallback={addAppointmentCallbackContinuousCase}
          removeAppointmentCallback={removeAppointmentCallbackContinuousCase}
          initialDay={date}
          days={days}
          maxReservableAppointments={1}
          visible
          selectedByDefault
          unitTime={3600000}
          loading={lodaing}
          continuous
        />
      );
    }
  }, [date, lodaing]);

  async function addAppointmentCallbackContinuousCase({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb,
  }) {
    setLoading(true);
    if (removeCb) {
      console.log(
        `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
      );
      removeCb(params.day, params.number);
    }

    addCb(day, number, time, id);
    setLoading(false);
  }

  async function removeAppointmentCallbackContinuousCase(
    { day, number, time, id },
    removeCb
  ) {
    setLoading(true);

    removeCb(day, number);
    setLoading(false);
  }
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <DatePickerCalendar
            date={date}
            onDateChange={setDate}
            modifiers={modifiers}
          />
        </Col>
        <Col md={6}>
          <button onClick={handleClick}>BookAppointment</button>

          {isShown && <SlotAppointment />}
        </Col>
      </Row>
    </Container>
  );
}
