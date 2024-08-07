export const getNormalDate = (date: string) => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
    dateObj
  );
};
