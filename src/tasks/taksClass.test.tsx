import { taskClass, data } from "./";

describe("Task Class", () => {
  const taskObj = new taskClass(data);

  it("process data correct", () => {
    const expectedData = taskObj.getProcessedData();
    expect(expectedData).toContainEqual({
      group: 1,
      name: "AA, BB",
      price: 170
    });
    expect(expectedData).toContainEqual({ name: "AA", group: 0, price: 100 });
    expect(expectedData).toContainEqual({ name: "AA", group: 0, price: 20 });
    expect(expectedData).toContainEqual({
      name: "CC, BB",
      group: 2,
      price: 230
    });
  });
});
