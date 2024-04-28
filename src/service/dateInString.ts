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

export function formatDate(dateString: string) {
  // Split the date string into year, month, and day
  const [year, month, day] = dateString.split("-").map(Number);

  // Create a new date object
  const date = new Date(year, month - 1, day); // Month is zero-based, so subtract 1

  // Get the day, month, and year
  const formattedDay = date.getDate();
  const formattedMonth = date.getMonth() + 1; // Month is zero-based, so add 1
  const formattedYear = date.getFullYear();

  // Return the formatted date string
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}
