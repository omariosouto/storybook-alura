import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Nome do Componente", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add("heading example 2", () => {
    const template = document.createElement("tpl");

    template.innerHTML = /*html*/ `
      <h1>Hello World</h1>
    `;

    return template;
  })
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Hello Button";
    button.addEventListener("click", e => console.log(e));
    return button;
  });
