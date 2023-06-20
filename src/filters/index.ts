/* eslint-disable */
import moment from "moment";

export function datesToRuntime(premiered: string, ended: string | null): string {
  const premieredDate = moment(premiered).format("YYYY");
  const endedDate = ended ? moment(ended).format("YYYY") : false;

  return `${premieredDate}${endedDate ? ` - ${endedDate}` : ""}`;
}