import groceriesList from "./9-groceries_list.js";

const list = groceriesList();
for (const [k, v] of list) {
  console.log(k, v);
}
