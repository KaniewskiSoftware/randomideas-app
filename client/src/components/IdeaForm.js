import IdeasApi from "../services/ideasApi.js";
import IdeaList from "./IdeaList.js";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._ideaList = new IdeaList();
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    //Send the idea to the server
    const newIdea = await IdeasApi.createIdea(idea);

    //Add the idea to the list
    this._ideaList.addIdeaToList(newIdea.data.data);

    //Clear the form
    this._form.reset();

    document.dispatchEvent(new Event("idea-added"));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="idea-form">
        <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
        </div>
        <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
            <label for="tag">Tag</label>
            <select name="tag" id="tag">
              <option value="">--Please choose a tag--</option>
              <option value="technology">Technology</option>
              <option value="software">Software</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="inventions">Inventions</option>
            </select>
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
    </form>`;
    this._form = document.querySelector("#idea-form");
    this.addEventListeners();
  }
}

export default IdeaForm;
