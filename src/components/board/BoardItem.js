import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/polymer.js';
import { getNextStateFor, Directions } from '../../utils/states.js';
import * as template from './BoardItem.template.html';

export class BoardItem extends PolymerElement {

  constructor() {
    super();
    this._isLeftArrowEnabled = this._isLeftArrowEnabled.bind(this);
    this._isRightArrowEnabled = this._isRightArrowEnabled.bind(this);
    this.moveToPreviousState = this.moveToPreviousState.bind(this);
    this.moveToNextState = this.moveToNextState.bind(this);
    this._dispatchStateChangeEvent = this._dispatchStateChangeEvent.bind(this);
  }

  static get is() {
    return 'board-item';
  }

  static get template() {
    return template;
  }

  static get properties() {
    return {
      item: {
        type: Object
      }
    }
  }

  _isLeftArrowEnabled() {
    this.item.status !== 'TODO';
  }

  _isRightArrowEnabled() {
    this.item.status !== 'Done';
  }

  moveToPreviousState() {
    this.item.status = getNextStateFor(this.item, Directions.BACK);
    this._dispatchStateChangeEvent(Directions.BACK);
  }

  moveToNextState() {
    this.item.status = getNextStateFor(this.item, Directions.FORWARD);
    this._dispatchStateChangeEvent(Directions.FORWARD);
  }

  _dispatchStateChangeEvent(direction) {
    const event = new CustomEvent('item-state-changed', {
      detail: {
        issue: this.item,
        direction
      }
    });
    this.dispatchEvent(event);
  };
}
