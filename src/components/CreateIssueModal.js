import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import * as template from './CreateIssueModal.template.html';

export class CreateIssueModal extends PolymerElement {

  static properties() {
    return {
      visible: {
        type: Boolean,
        notify: false
      },
      issueName: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.createIssue = this.createIssue.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  createIssue() {
    const event = new CustomEvent('issue-created', { detail: { issueName: this.issueName }});
    this.dispatchEvent(event);
    this.clearInput();
  }

  clearInput() {
    this.issueName = "";
  }

  static get template() {
    return template;
  }
}
