import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import { AppLayout } from './layouts/AppLayout.js';

customElements.define('app-layout', AppLayout);

export class KanbanApp extends PolymerElement {
  static get template() {
    return `
      <div>
        <app-layout></app-layout>
      </div>
    `;
  }
}

customElements.define('kanban-app', KanbanApp);