import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import * as template from './KanbanBoard.template.html';

export class KanbanBoard extends PolymerElement {

  constructor() {
    super();
    this._filterByStatus = this._filterByStatus.bind(this);
  }

  static get properties() {
    return {
      items: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true
      },
      openIssues: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true
      },
      inProgressIssues: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true
      },
      completedIssues: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true
      }
    };
  }

  static get template() {
    return template;
  }

  getIssuesInProgress() {
    return this._filterByStatus(this.issues, 'In Progress');
  }

  getCompletedIssues() {
    return this._filterByStatus(this.issues, 'Done');
  }

  _filterByStatus(issues, status) {
    if(!issues) return [];
    return issues.filter(issue => issue.status === status);
  }

  addNewIssue(issue) {
    this.push('openIssues', issue);
    this.set('openIssues', this.openIssues);
  }

  updateBoard(event) {
    console.log(event);
    const issue = event.detail.issue;
    const direction = event.detail.direction;
    switch (issue.status) {
      case 'Todo': {
        const replaceIndex = this.inProgressIssues.indexOf(issue);
        this.splice('inProgressIssues', replaceIndex, 1);
        this.addNewIssue(issue);
        break;
      }
      case 'In Progress': {
        this.push('inProgressIssues', issue);
        this.set('inProgressIssues', this.inProgressIssues);
        if(direction == 'forward') {
          const replaceIndex = this.openIssues.indexOf(issue);
          this.splice('openIssues', replaceIndex, 1);
        } else {
          const replaceIndex = this.completedIssues.indexOf(issue);
          this.splice('completedIssues', replaceIndex, 1);
        }
        break;
      }
      case 'Done': {
        this.push('completedIssues', issue);
        this.set('completedIssues', this.completedIssues);
        const replaceIndex = this.inProgressIssues.indexOf(issue);
        this.splice('inProgressIssues', replaceIndex, 1);
        break;
      }
    }
  }
}
