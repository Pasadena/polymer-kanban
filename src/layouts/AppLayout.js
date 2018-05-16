import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';

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
    this.isCreateIssueDialogOpen = this.isCreateIssueDialogOpen.bind(this);
  }

  static get template() {
    return template;
  }

  static get properties() {
    return {
        issueDialogOpen: {
          type: Boolean,
          notify: true
        }
    }
  }

  createIssueClicked() {
    this.issueDialogOpen = true;
  }

  isCreateIssueDialogOpen() {
    return this.issueDialogOpen;
  }

  handleNewIssue(issue) {
    const issueName = issue.detail.issueName;
    this.$.issueBoard.addNewIssue({ name: issueName, status: 'Todo' });
  }
}
