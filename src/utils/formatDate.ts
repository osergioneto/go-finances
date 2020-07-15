const formatDate = (date: string): string => {
  const [year, month, day] = date.split('T')[0].split('-');

  return `${day}/${`0${month}`.slice(-2)}/${`${year}`}`;
};

export default formatDate;
