import {html, css, LitElement} from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cartItem')
export class LitCartItems extends LitElement{

    render(){
        return html `<p>ITEM1</p>`;
    }

    static styles = [
        css `
            :host{

            }

        `
    ];
}