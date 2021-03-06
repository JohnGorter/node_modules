import '../../polymer/polymer.js';
import { IronA11yKeysBehavior } from '../iron-a11y-keys-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        position: relative;
      }

      pre {
        color: #3367d6;
      }

      .keys {
        line-height: 25px;
      }

      .keys span {
        cursor: default;
        background-color: #f5f5f5;
        border: 1px solid #e0e0e0;
        padding: 1px 5px;
        border-radius: 5px;
      }
    </style>

    <h4>Press any of these keys</h4>
    <input type="checkbox" checked="{{preventDefault::change}}"> prevent default = {{preventDefault}}
    <p class="keys">
      <template is="dom-repeat" items="[[boundKeys]]">
        <span>{{item}}</span>
      </template>
    </p>
    <pre>[[pressed]]</pre>
`,

  is: 'x-key-aware',

  behaviors: [
    IronA11yKeysBehavior
  ],

  properties: {
    pressed: {
      type: String,
      readOnly: true,
      value: ''
    },

    boundKeys: {
      type: Array,
      value: function() {
        return Object.keys(this.keyBindings).join(' ').split(' ');
      }
    },

    preventDefault: {
      type: Boolean,
      value: true,
      notify: true
    },

    keyEventTarget: {
      type: Object,
      value: function() {
        return document.body;
      }
    }
  },

  keyBindings: {
    '* pageup pagedown left right down up home end space enter @ ~ " $ ? ! \\ + : # backspace': '_updatePressed',
    'a': '_updatePressed',
    'shift+a alt+a': '_updatePressed',
    'shift+tab shift+space': '_updatePressed'
  },

  _updatePressed: function(event) {
    console.log(event.detail);

    if (this.preventDefault) {
      event.preventDefault();
    }
    this._setPressed(
      this.pressed + event.detail.combo + ' pressed!\n'
    );
  }
});
