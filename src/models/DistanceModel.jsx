import { nanoid } from 'nanoid';

export default class DistanceModel {
  constructor({date, distance}) {
    this.id = nanoid();
    this.date = date;
    this.date_obj = new Date(date);
    this.distance = parseFloat(distance);
  }
}
