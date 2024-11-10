const parent = React.createElement("div", { id: "parent", xyz: "i am dj" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am inner heading"),
    React.createElement("h1", { id: "heading1" }, "I am inner heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am inner heading"),
    React.createElement("h1", { id: "heading1" }, "I am inner heading"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "i am dj" },
  "hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
