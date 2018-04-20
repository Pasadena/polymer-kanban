import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/polymer.js';
import { PropertiesMixin } from '@polymer/polymer/lib/mixins/properties-mixin.js';
import '@polymer/polymer/lib/elements/dom-if';
import { KanbanBoard } from '../components/board/KanbanBoard.js';
import { CreateIssueButton } from '../components/CreateIssueButton.js';
import { CreateIssueModal } from '../components/CreateIssueModal.js';
import { BoardItem } from '../components/board/BoardItem.js';
import * as template from './AppLayout.template.html';

customElements.define('kanban-board', KanbanBoard);
customElements.define('create-issue-button', CreateIssueButton);
customElements.define('create-issue-modal', CreateIssueModal);
customElements.define('board-item', BoardItem);

export class AppLayout extends PolymerElement {

  constructor() {
    super();
    this.issueDialogOpen = false;
  }

  static get template() {
    return template;
  }

  static get properties() {
    return {
        issueDialogOpen: {
          type: Boolean,
        }
    }
  }

  createIssueClicked() {
    this.issueDialogOpen = true;
  }

  handleNewIssue(issue) {
    const issueName = issue.detail.issueName;
    this.$.issueBoard.addNewIssue({ name: issueName, status: 'Todo' });
  }
}
