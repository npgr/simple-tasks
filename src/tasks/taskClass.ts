import taskType from "./taskType.t";

const alphabeticalOrder = (a: taskType, b: taskType): number => {
  if (a.name < b.name) {
    return -1;
  }
  if (b.name > a.name) {
    return 1;
  }
  return 0;
};

export default class Tasks {
  data: taskType[] = [];

  constructor(initialData: taskType[]) {
    this.data = initialData;
  }

  setData(data: taskType[]) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getProcessedData() {
    return this.data
      .reduce<taskType[]>((acc, cur) => {
        if (cur.group === 0) {
          return [...acc, cur];
        }
        const index = acc.findIndex(task => task.group === cur.group);
        if (index === -1) {
          return [...acc, cur];
        } else {
          acc[index] = {
            name: acc[index].name.includes(cur.name)
              ? acc[index].name
              : `${acc[index].name}, ${cur.name}`,
            group: cur.group,
            price: acc[index].price + cur.price
          };
          return acc;
        }
      }, [])
      .sort(alphabeticalOrder);
  }
}
