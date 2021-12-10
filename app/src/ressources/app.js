import moment from "moment";

function formatDate(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
}

export default formatDate;
