import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '../../node_modules/@polymer/paper-input/paper-input.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class PolymerGoogleLoginApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
        }
        .card{
          max-width: 450px;
          max-height: 500px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          flex: 1;
          height: 100%;
        }
        .flex{
          display: -ms-flexbox;
	      display: -webkit-flex;
          display: flex;
          flex-direction: row;
          -ms-flex-align: center;
	      -webkit-align-items: center;
	      -webkit-box-align: center;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        h1 {
          font-family: 'Product Sans',arial,sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.3333;
          color: black;
          text-align: center;
        }
        h2 {
          font-family: 'Product Sans',arial,sans-serif;
          font-size: 16px;
          letter-spacing: .1px;
          line-height: 1.5;
          text-align: center;
          font-weight: 400;
        }
        .logo{
          display: block;
          margin: auto;
          margin-top: 50px;
        }
        .input{
          margin-right: 40px;
          margin-left: 40px;
          font-family: 'Product Sans',arial,sans-serif;
        }
        .link{
          font-family: 'Product Sans',arial,sans-serif;
          font-size: 14px;
          margin-left: 40px;
          font-weight: bold;
          text-decoration: none;
        }
        .link2{
          font-family: 'Product Sans',arial,sans-serif;
          font-size: 12px;
          margin-left: 40px;
          font-weight: bold;
          text-decoration: none;
          flex: 1;
          flex-grow: 1;
          margin-top: 10px;
        }
        .secondary{
          font-family: 'Product Sans',arial,sans-serif;
          font-size: 12px;
          margin-left: 40px;
        }
        .button{
          background: #4285f4;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          color: white;
          font-weight:500;
          margin-right: 40px;
          font-family: 'Product Sans',arial,sans-serif;
          letter-spacing: .25px;
          text-transform: none;
        }
        .third{
          display: flex;
          justify-content: space-between;
          flex: 1;
          flex-direction: flex-end;
          flex-flow: row;
        }
      </style>
      <body>
        <div class="flex">
            <div class="card">
                <svg class="logo" width="74" height="37" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"/></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"/></g>
                    <g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"/></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"/></g>
                    <g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"/></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"/></g>
                </svg>
                <h1>Sign in</h1>
                <h2>with your Google Account</h2>
                <paper-input label="Email or phone" class="input"></paper-input>
                <br>
                <a href="#" class="link">Forgot email?</a>
                <br><br>
                <p class="secondary">Not your computer? Use Guest mode to sign in privately. </p>
                <br><br>
                <div class="third"><a href="#" class="link2">Create account</a><paper-button class="button">Next</paper-button></div>
            </div>
        </div>
      </body>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-google-login-app'
      }
    };
  }
}

window.customElements.define('polymer-google-login-app', PolymerGoogleLoginApp);
