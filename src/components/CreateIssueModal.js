import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-input/paper-input.html'; //TODO revisit this when you can import html / find workaround for that
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
    console.log(this);
  }

  createIssue() {
    const event = new CustomEvent('issue-created', { detail: { issueName: this.issueName }});
    console.log(this.issueName);
    this.dispatchEvent(event);
  }

  static get template() {
    return template;
  }
}
