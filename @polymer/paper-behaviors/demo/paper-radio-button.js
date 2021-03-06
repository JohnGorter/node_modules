import '../../polymer/polymer.js';
import { PaperCheckedElementBehavior } from '../paper-checked-element-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { PaperInkyFocusBehaviorImpl } from '../paper-inky-focus-behavior.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        white-space: nowrap;
      }

      :host(:focus) {
        outline: none
      }

      #radioContainer {
        display: inline-block;
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;
        vertical-align: middle;
      }

      #offRadio {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: solid 2px;
        border-color: black;
        transition: border-color 0.28s;
      }

      #onRadio {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: red;
        -webkit-transform: scale(0);
        transform: scale(0);
        transition: -webkit-transform ease 0.28s;
        transition: transform ease 0.28s;
      }

      :host([disabled]) {
        opacity: 0.3;
        pointer-events: none;
      }

      :host([pressed]) #offRadio,
      :host([active]) #offRadio {
        border-color: red;
      }

      :host([pressed]) #onRadio,
      :host([active]) #onRadio {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      #ink {
        position: absolute;
        top: -16px;
        left: -16px;
        width: 48px;
        height: 48px;
      }
    </style>

    <div id="radioContainer">
      <div id="offRadio"></div>
      <div id="onRadio"></div>
    </div>
`,

  is: 'paper-radio-button',

  behaviors: [
    PaperCheckedElementBehavior
  ],

  hostAttributes: {
    role: 'radio'
  },

  ready: function() {
    this.toggles = true;
  },

  _createRipple: function() {
    this._rippleContainer = this.$.radioContainer;
    return PaperInkyFocusBehaviorImpl._createRipple.call(this);
  }
});
