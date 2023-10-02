const DIALOG_DATA = [
  {
    id: 1,
    src: "https://ouch-cdn2.icons8.com/iaSvWx81YYzXgkdlhtQ4VVYi3fojJIC9MGKvMf1yGKs/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY5/LzIyYWNhYTcwLTI4/OTAtNGUwZC04ZGFj/LTI2ZmFmZDJjNzY2/YS5wbmc.png",
    name: "Сергей",
  },
  {
    id: 2,
    src: "https://ouch-cdn2.icons8.com/XHNV1rKR-EzAzFYwXh2fWkZos4PwE48i-3FH5YotVpk/rs:fit:368:331/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUw/L2FlZGM0MGNkLTAy/YzYtNDI4OS1hYjI4/LTlmZDlmNTIyMTUw/Zi5wbmc.png",
    name: "Кирилл",
  },
  {
    id: 3,
    src: "https://ouch-cdn2.icons8.com/o7VVy0frBxTY_yRmbuc-ocHYQJ12f-Hcv_Q8daW1dLI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ3/L2YyMzZhMzFmLTZm/YjYtNDk4OC1hY2Mw/LWUzNWMwMDMyMmU4/My5wbmc.png",
    name: "Гоша",
  },
  {
    id: 4,
    src: "https://ouch-cdn2.icons8.com/kKRJ-99ZSPwUYJ2Vh0yFTBm6q-Txpjn7SLV2onmiMEg/rs:fit:368:403/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjA1/LzEwYzVjYzJhLTY4/OGUtNDAxMi04OWU5/LWU1Y2Q1NjQ4ODg0/Ny5wbmc.png",
    name: "Кристина",
  },
  {
    id: 5,
    src: "https://ouch-cdn2.icons8.com/FLLwsMrNDj-zo4wGMR6cpANHh-pdnxO4KAE5VLqpntY/rs:fit:368:394/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEv/OTQ2YzRkYWMtYzYw/ZC00MDYwLWIzOGYt/NDViODI2NzBiYjcy/LnBuZw.png",
    name: "Инга",
  },
  {
    id: 6,
    src: "https://ouch-cdn2.icons8.com/B31cMgEyXImGUeG7amjFsZvckHrJMul_sp9K9DV5Kyw/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTUw/LzI1NWJlOTUyLTQy/MmUtNGQwYy1hMzg4/LTMxMjkxNmU3OTcz/ZS5wbmc.png",
    name: "Таисия",
  },
];

// функция должна возвращать один из элементов массива id переданное в функцию должно быть таким же как в найденом элементе
// Дано массив с элементами
// Дано id элемента
// Найти элемент в котором id элемента = id
// Я создам цикл который будет переберать каждый элемент массива и сравнивать значения id.
// Цикл вернет тот элемент массива параметр id которого будет равен параметру функции, переданному функции под названием id

// export let GetDialogById = (id = "") => {
//   return DIALOG_DATA.find((i) => id == i.id);
// };

export default DIALOG_DATA;
