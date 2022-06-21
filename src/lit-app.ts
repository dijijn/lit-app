import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
            }
            div{
                display: flex;
                width: 100%;
                height: 50px;
                background-color: aliceblue;
                border-radius: 5px;
                justify-content: space-around;
                align-items: center;
            }
            p{
                padding: 5px;
                background-color: lightblue;
                border-radius: 10px;
                font-weight: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            input{
                height: 20px;
            }
        `
    ];

    @property() name = 'Lit App';

    render() {
        return html`<div>
        <p>HOME</p>
        <input placeholder='pesquisa'></input>
        <p>MINHA CONTA</p>
    </div>`;
    }
}
