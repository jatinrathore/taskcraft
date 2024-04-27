export const getDateInString = (isModified: Boolean): string => {
  const currentDate = new Date();
  let addition = 0;

  if (isModified) {
    addition = 1;
  }
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1 + addition;
  const currentYear = currentDate.getFullYear();

  const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

  return formattedDate;
};
