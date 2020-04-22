const formatDate = (date: Date): string => {
  const dateTransform = new Date(date);

  const year = dateTransform.getUTCFullYear();
  const month = `0${dateTransform.getUTCMonth() + 1}`.slice(-2);
  const day = `0${dateTransform.getUTCDate()}`.slice(-2);

  const newDate = `${day}/${month}/${year}`;
  return newDate;
};

export default formatDate;
