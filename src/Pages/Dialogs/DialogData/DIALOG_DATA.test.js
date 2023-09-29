import DIALOG_DATA, { GetDialogById } from "./DIALOG_DATA";

test("should first", () => {
  //   console.log(DIALOG_DATA[1]);
  //   expect(1).toBe(2);
  const user = GetDialogById(5);
  expect(user).toStrictEqual({
    id: 5,
    src: "https://ouch-cdn2.icons8.com/FLLwsMrNDj-zo4wGMR6cpANHh-pdnxO4KAE5VLqpntY/rs:fit:368:394/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEv/OTQ2YzRkYWMtYzYw/ZC00MDYwLWIzOGYt/NDViODI2NzBiYjcy/LnBuZw.png",
    children: "Инга",
  });
});
