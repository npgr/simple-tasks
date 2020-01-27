import { taskType } from "./typesV2.t";

const testTask: taskType = {
  article: {
    name: "test",
    style: {
      bold: true
    }
  },
  group: {
    id: 1,
    groupable: false
  },
  price: {
    price: 100,
    currency: "EUR"
  }
};

export default testTask;
