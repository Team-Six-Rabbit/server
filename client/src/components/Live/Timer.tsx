import { useState, useEffect, useRef } from "react";

interface TimerProps {
	duration: number; // 타이머의 전체 시간(초)
	onTimeOver: () => void; // 타이머가 끝났을 때 호출되는 함수
}

function Timer({ duration, onTimeOver }: TimerProps) {
	const [timeLeft, setTimeLeft] = useState(duration);
	const intervalRef = useRef<number | null>(null);

	useEffect(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = window.setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime <= 1) {
					if (intervalRef.current !== null) {
						clearInterval(intervalRef.current);
					}
					return 0;
				}
				return prevTime - 1;
			});
		}, 1000);

		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		};
	}, [duration]);

	useEffect(() => {
		if (timeLeft === 0) {
			onTimeOver();
		}
	}, [timeLeft, onTimeOver]);

	const formatTime = (seconds: number) => {
		const hrs = Math.floor(seconds / 3600);
		const mins = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
	};

	return (
		<div className="absolute top-20 left-3">
			<div className="ms-3">{formatTime(timeLeft)}</div>
		</div>
	);
}

export default Timer;
