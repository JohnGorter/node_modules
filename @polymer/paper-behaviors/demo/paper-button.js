import '../../polymer/polymer.js';
import '../../paper-styles/element-styles/paper-material-styles.js';
import { PaperButtonBehavior } from '../paper-button-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        background-color: #4285F4;
        color: #fff;
        border-radius: 3px;
        text-transform: uppercase;
        outline: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
      }

      .content {
        border-radius: inherit;
        padding: 16px;
      }

      :host([disabled]) {
        background-color: #888;
        pointer-events: none;
      }

      :host([active]),
      :host([pressed]) {
        background-color: #3367D6;
        box-shadow: inset 0 3px 5px rgba(0,0,0,.2);
      }
    </style>

    <!-- when using paper-material from paper-styles you must add a paper-material class -->
    <div class="content paper-material" elevation\$="[[elevation]]" animated="">
      <slot></slot>
    </div>
`,

  is: 'paper-button',

  behaviors: [
    PaperButtonBehavior
  ]
});
