export default function groceriesList() {
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
    //   obtains item keys
  const list = Array.from(Object.keys(obj));

  //   maps items to quantity
  list.map((item) => finalMap.set(item, obj[item]));
  return finalMap;
}
