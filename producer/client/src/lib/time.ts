export default function convertToIST(date:Date, hours:number, minutes:number) {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
  }