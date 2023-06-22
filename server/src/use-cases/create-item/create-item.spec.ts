import { describe, it, expect } from "vitest";
import { InMemoryItemRepository } from "../../repositories/in-memory/in-memory-item-repository";
import { CreateItem } from "./create-item";

describe("Create Item", () => {
  it("should be able to create an item", async () => {
    const inMemoryItemRepository = new InMemoryItemRepository();
    const createItem = new CreateItem(inMemoryItemRepository);
    await createItem.execute({
      prod_id: 1,
      cart_id: 1,
    });
    const items = await inMemoryItemRepository.read();
    expect(items.length).toBe(1);
  });
}
);

describe("Create Item", () => {
  it("should be able to create an item with null cart id", async () => {
    const inMemoryItemRepository = new InMemoryItemRepository();
    const createItem = new CreateItem(inMemoryItemRepository);
    await expect(
      createItem.execute({
        prod_id: 1,
        cart_id: null,
      })
    );
  });
}
);

describe("Create Item", () => {
  it("should not be able to create an item with invalid product id", async () => {
    const inMemoryItemRepository = new InMemoryItemRepository();
    const createItem = new CreateItem(inMemoryItemRepository);
    await expect(
      createItem.execute({
        prod_id: -1,
        cart_id: 1,
      })
    ).rejects.toThrow();
  });
}

);

