// challenge: https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746/train/javascript

function dayAndTime(n) {
	const minutesInDay = 24 * 60;

	const minutesInWeek = 7 * minutesInDay;

	const DAYS = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const normalizedMinutes =
		((n % minutesInWeek) + minutesInWeek) % minutesInWeek;

	const dayIndex = Math.floor(normalizedMinutes / minutesInDay);

	// Calculate hours and minutes
	const remainingMinutes = normalizedMinutes % minutesInDay;
	const hours = Math.floor(remainingMinutes / 60);
	const mins = remainingMinutes % 60;

	const formattedHours = hours.toString().padStart(2, "0");
	const formattedMinutes = mins.toString().padStart(2, "0");

	return `${DAYS[dayIndex]} ${formattedHours}:${formattedMinutes}`;
}
