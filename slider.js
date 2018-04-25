import { LitElement, html } from './node_modules/@polymer/lit-element/lit-element.js'
import { createEvent } from './util.js';

class MySlider extends LitElement {
  static get tag() { return 'my-slider' }

  // Public property API that triggers re-render (synched with attributes)
  static get properties() {
    return {
      width: String,
      height: String,
      thumbDiameter: String,
      trackColor: String,
      trackFillColor: String,
      thumbColor: String,
      value: Number,
      min: Number,
      max: Number,
    }
  }

  constructor() {
    super();
    this.width = '12.5em'
    this.height = '.25em'
    this.thumbDiameter = '1.5em'
    this.trackColor = '#ccc'
    this.trackFillColor = '#95a'
    this.thumbColor = '#f90'
    this.value = 50
    this.max = 100
    this.min = 0
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  render({ foo, whales }) {
    return html`
      <style>
        :host {
          display: block;
        }
      
        [type='range'],
        [type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
        }
      
        [type='range'] {
          --range: calc(var(--max) - var(--min));
          --ratio: calc((var(--val) - var(--min))/var(--range));
          --sx: calc(0.5*var(--thumb-diameter, 1.5em) + var(--ratio)*(100% - var(--thumb-diameter, 1.5em)));
          margin: 0;
          padding: 0;
          width: var(--track-width, 12.5em);
          height: var(--thumb-diameter, 1.5em);
          background: transparent;
          font: 1em/1 arial, sans-serif;
        }
      
        [type='range']::-webkit-slider-runnable-track {
          box-sizing: border-box;
          border: none;
          width: var(--track-width, 12.5em);
          height: var(--track-height, 0.25em);
          background: var(--track-color, #ccc);
          background: linear-gradient(var(--fill-color, #95a), var(--fill-color, #95a)) 0/ var(--sx) 100% no-repeat var(--track-color, #ccc);
        }
      
        [type='range']::-moz-range-track {
          box-sizing: border-box;
          border: none;
          width: var(--track-width, 12.5em);
          height: var(--track-height, 0.25em);
          background: var(--track-color, #ccc);
        }
      
        [type='range']::-ms-track {
          box-sizing: border-box;
          border: none;
          width: var(--track-width, 12.5em);
          height: var(--track-height, 0.25em);
          background: var(--track-color, #ccc);
        }
      
        [type='range']::-moz-range-progress {
          height: var(--track-height, 0.25em);
          background: var(--fill-color, #95a);
        }
      
        [type='range']::-ms-fill-lower {
          height: var(--track-height, 0.25em);
          background: var(--fill-color, #95a);
        }
      
        [type='range']::-webkit-slider-thumb {
          margin-top: calc(.5*(var(--track-height, 0.25em) - var(--thumb-diameter, 1.5em)));
      
          box-sizing: border-box;
          border: none;
          width: var(--thumb-diameter, 1.5em);
          height: var(--thumb-diameter, 1.5em);
          border-radius: 50%;
          background: var(--thumb-color, #f90);
        }
      
        [type='range']::-moz-range-thumb {
          box-sizing: border-box;
          border: none;
          width: var(--thumb-diameter, 1.5em);
          height: var(--thumb-diameter, 1.5em);
          border-radius: 50%;
          background: var(--thumb-color, #f90);
        }
      
        [type='range']::-ms-thumb {
          margin-top: 0;
      
          box-sizing: border-box;
          border: none;
          width: var(--thumb-diameter, 1.5em);
          height: var(--thumb-diameter, 1.5em);
          border-radius: 50%;
          background: var(--thumb-color, #f90);
        }
      
        [type='range']::-ms-tooltip {
          display: none
        }
      </style>
      <input
        type="range"
        min$=${this.min}
        max$=${this.max}
        value$=${this.value}
        style="--min:${this.min};--max:${this.max};--val:${this.value};--thumb-diameter:${this.thumbDiameter};--track-height:${this.height};--track-width:${this.width};--fill-color:${this.trackFillColor};--track-color:${this.trackColor};--thumb-color:${this.thumbColor};"
        on-input=${e => {
          this.value = e.target.valueAsNumber
          e.target.style.setProperty('--val', e.target.value)
          this.dispatchEvent(createEvent('value', e.target.valueAsNumber))
        }}
        on-change=${e => {
          this.dispatchEvent(createEvent('change', e.target.valueAsNumber))
        }}>
    `;
  }

}
customElements.define(MySlider.tag, MySlider);
