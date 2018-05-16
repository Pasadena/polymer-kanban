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
    this.closeDialog = this.closeDialog.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  createIssue() {
    const event = new CustomEvent('issue-created', { detail: { issueName: this.issueName }});
    this.dispatchEvent(event);
    this.clearInput();
    this.hide();
  }

  closeDialog() {
    this.clearInput();
    this.hide();
  }

  clearInput() {
    this.issueName = "";
  }

  static get template() {
    return template;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
