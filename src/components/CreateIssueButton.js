import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';

export class CreateIssueButton extends PolymerElement {

  static get template() {
    return `
      <button id="createIssue" on-click="[[_onCreateIssue]]" class="button-primary">Create Issue</button>
      <style>
        .button-primary {
          color: white;
          background-color: blue;
          border-radius: 2px;
          padding: 6px;
          font-size: 1.1em;
          font-weight: 600;
          margin: 24px;
        }
        .button-primary:hover {
          cursor: pointer;
          background-color: lightblue;
          color: black;
        }
      </style>
    `;
  }

  static get properties() {
    return {
      onClick: Object,
    }
  }

  constructor() {
    super();
  }

  _onCreateIssue(event) {
    event.preventDefault();
    this.onClick.apply();
  }
}
