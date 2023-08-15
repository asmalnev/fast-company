export function displayDate(data) {
  const date = new Date(parseInt(data));

  const dateNow = new Date();

  const yearDiff = dateNow.getFullYear() - date.getFullYear();

  if (yearDiff === 0) {
    const dayDiff = dateNow.getDay() - date.getDay();

    if (dayDiff === 0) {
      const hourDiff = dateNow.getHours() - date.getHours();

      if (hourDiff === 0) {
        const minutesDiff = dateNow.getMinutes() - date.getMinutes();

        if (minutesDiff >= 0 && minutesDiff < 5) return "1 минуту назад";
        if (minutesDiff >= 5 && minutesDiff < 10) return "5 минут назад";
        if (minutesDiff >= 10 && minutesDiff < 30) return "10 минут назад";

        return "30 минут назад";
      }

      return `${date.getHours()}:${date.getMinutes()}`;
    }

    return `${date.getDay()} ${date.toLocaleDateString("default", {
      month: "long"
    })}`;
  }

  return (
    date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
  );
}
