import ky from "https://cdn.skypack.dev/ky?dts";

await ky.get("https://jsonplaceholder.typicode.com/todos/1")
  .json()
  .then((json) => {
    console.log(json);
  });
