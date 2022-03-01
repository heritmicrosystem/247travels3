import React, { useState, useEffect } from 'react';
import { Result } from 'antd';

function ReservationResult() {

    // const [reservationResult, setReservationResult] = useState({});

    return (
        <>
            <Result
                status='success'
                title='Your Reservation was Successful'
                subTitle={`Your Reservation Id is: ${window.localStorage.getItem('reservationId')}`}
            />
        </>
    );
}

export default ReservationResult