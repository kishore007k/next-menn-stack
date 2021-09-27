const DateFormat = (data) => {
	const string = new Date(data?.createdAt);

	Date.prototype.getMonthName = function () {
		return [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		][this.getMonth()];
	};

	const newDate = string.getDate();
	const year = string.getFullYear();
	const month = string.getMonthName();

	return { date: newDate, year, month };
};

export default DateFormat;
