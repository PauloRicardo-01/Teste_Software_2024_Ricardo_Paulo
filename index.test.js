const updateAll = require("./index");

describe("updateAll", () => {
  it("no force", () => {
    return updateAll("TableName", ["fileName"], { compandId: "test" }).then(
      (updatedItems) => {
        let undefinedCount = 0;
        for (let item of updatedItems) {
          undefinedCount += item === undefined ? 1 : 0;
        }
        expect(undefinedCount).toBe(updatedItems.length);
      }
    );
  });

  test("force update", () => {
    return updateAll(
      "TableName",
      ["fileName"],
      { compandId: "test" },
      true
    ).then((updatedItems) => {
      let undefinedCount = 0;
      for (let item of updatedItems) {
        undefinedCount += item === undefined ? 1 : 0;
      }
      expect(undefinedCount).toBe(0);
    });
  });

  it("should not update items when force is not applied", async () => {
    const data = {
      TableName: "TableName",
      fields: ["fileName"],
      criteria: { compandId: "test" },
    };

    const updatedItems = await updateAll(
      data.TableName,
      data.fields,
      data.criteria
    );

    let undefinedCount = 0;

    for (let item of updatedItems) {
      undefinedCount += item === undefined ? 1 : 0;
    }

    expect(undefinedCount).toBe(updatedItems.length);
  });

  test("updates all items with force", async () => {
    const data = {
      TableName: "TableName",
      fields: ["fileName"],
      criteria: { compandId: "test" },
      force: true,
    };

    const updatedItems = await updateAll(
      data.TableName,
      data.fields,
      data.criteria,
      data.force
    );

    let undefinedCount = 0;

    for (let item of updatedItems) {
      undefinedCount += item === undefined ? 1 : 0;
    }

    expect(undefinedCount).toBe(0);
  });
});
