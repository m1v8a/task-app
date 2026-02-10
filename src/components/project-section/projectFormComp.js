export default function projectFormComp() {
  const container = document.createElement("div");
  container.id = "project-form-div";

  container.innerHTML = `
    <form action="">
      <input 
        type="text" 
        placeholder="Meme Generator"
        name="project-name-input" 
        class="project-name-input"/>
      <button data-name="project-create-submit">+</button>
    </form>
  `;

  return container;
}
