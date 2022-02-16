import React, { useEffect, useRef, useState } from 'react'
import { BoardContainer, BoardTime, BoardTimeDown, CountdownDiv, SubTextTime, TextTime } from '../styles/StyledComponents'
import Icons from './Icons';
import TittleText from './TittleText';



const CountdownTimer = () => {

    const [timerDays, setTimeDays] = useState('00');
    const [timerHours, setTimeHours] = useState('00');
    const [timerMinutes, setTimeMinutes] = useState('00');
    const [timerSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();

    const startTime = () => {
        const countdownDate = new Date('Mar 5, 2022 00:00:00').getTime();
        console.log('countdownDate', countdownDate);

        interval = setInterval(() => {
            const startTime = new Date().getTime();
            /* console.log('startTime',startTime); */
            const remainingTime = countdownDate - startTime;

            /*    console.log('remainingTime', remainingTime ); */

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

            const hours = Math.floor(remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(remainingTime % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(remainingTime % (1000 * 60) / 1000);

            if (remainingTime < 0) {
                clearInterval(interval.current);
            } else {
                setTimeDays(days)
                setTimeHours(hours)
                setTimeMinutes(minutes)
                setTimeSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        startTime();
        return () => {
            clearInterval(interval.current);
        }
    }, [])


    return (
        <div>
            <TittleText/>
            <div className="Count">
                <CountdownDiv>
                    <BoardContainer>
                        <BoardTime></BoardTime>
                        <BoardTimeDown></BoardTimeDown>
                        <TextTime>{timerDays}</TextTime>
                        <div><SubTextTime>Days</SubTextTime></div>
                    </BoardContainer>
                    <BoardContainer>
                        <BoardTime></BoardTime>
                        <BoardTimeDown></BoardTimeDown>
                        <TextTime>{timerHours}</TextTime>
                        <SubTextTime>Hours</SubTextTime>
                    </BoardContainer>
                    <BoardContainer>
                        <BoardTime></BoardTime>
                        <BoardTimeDown></BoardTimeDown>
                        <TextTime>{timerMinutes}</TextTime>
                        <SubTextTime>Minutes</SubTextTime>
                    </BoardContainer>
                    <BoardContainer>
                        <BoardTime></BoardTime>
                        <BoardTimeDown></BoardTimeDown>
                        <TextTime>{timerSeconds}</TextTime>
                        <SubTextTime>Seconds</SubTextTime>
                    </BoardContainer>
                </CountdownDiv>
            </div>
            <Icons/>
        </div>

    )
}

export default CountdownTimer