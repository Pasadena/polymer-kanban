import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import * as template from './KanbanBoard.template.html';

export class KanbanBoard extends PolymerElement {

  static get properties() {
    return {
      items: {
        type: Array,
        value: function() {
          return [];
        }
      }
    };
  }

  static get template() {
    return template;
  }

  addNewIssue(issue) {
    this.push('items', issue);
  }
}
