import moment from "moment";

export function formatDate(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
}

export function yesterdaysDate(value) {
  if (value) {
    console.log(value);
    let day = value.slice(0, 2) - 1;
    let rest = value.slice(2, value.length + 1);
    let yesterday = day + rest;
    console.log(moment(String(yesterday)).format("YYYY-DD-MM"));
    return moment(String(yesterday)).format("YYYY-DD-MM");
  }
}

export default formatDate;
