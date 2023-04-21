function updateTime() {
  const timeElement = document.querySelector(".time");
  const formatElement = document.querySelector(".format");
  const zoneElement = document.querySelector(".zone");
  const dayElement = document.querySelector(".day");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const isAM = hours < 12;
  const format = getFormat(isAM);

  if (format === "12") {
    hours = hours % 12 || 12;
  } else {
    hours = addLeadingZero(hours);
  }

  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  formatElement.textContent = format === "12" ? (isAM ? "AM" : "PM") : "";
  zoneElement.textContent = `Strefa czasowa: ${getTimezoneAbbreviation(now)}`;
  dayElement.textContent = `Dzień tygodnia: ${getWeekdayName(now)}`;
}

function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

function getFormat(isAM) {
  return isAM ? "12" : "24";
}

function getTimezoneAbbreviation(date) {
  const timezone = date.toString().match(/\(([\w\s]+)\)/)[1];
  return timezone;
}

function getWeekdayName(date) {
  const weekdayNames = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];
  const weekdayIndex = date.getDay();
  return weekdayNames[weekdayIndex];
}

setInterval(updateTime, 1000);
