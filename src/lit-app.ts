import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
            }

            .master{
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                width: 100%;
                height: auto;
            }
            .navbar{
                display: flex;
                width: 100%;
                height: 50px;
                background-color: aliceblue;
                border-radius: 5px;
                justify-content: space-around;
                align-items: center;
            }
            .pnav{
                padding: 5px;
                background-color: lightblue;
                border-radius: 10px;
                font-weight: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .navinput{
                height: 20px;
            }
            .item{
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 20px;
            }

        `
    ];

    @property() name = 'Lit App';

    render() {
        return html`
        
    <div class='master'>
    <div class='navbar'>
        <p class='pnav'>HOME</p>
        <input class='navinput' placeholder='pesquisa'></input>
        <p class='pnav'>MINHA CONTA</p>
    </div>
    
    <div class='item'>
        <div class='imagem'>
            <img src='/' width=80% height=100px/> 
        </div>
        <div class='qtd'>
            <input class='inqtd' placeholder='Quantidade'></input>
        </div>
        <div class='preco'>
            <p class='price'>R$ 50,00</p>
        </div>
    </div>
    <div class='item'>
        <div class='imagem'>
            <img src='/' width=80% height=100px/> 
        </div>
        <div class='qtd'>
            <input class='inqtd' placeholder='Quantidade'></input>
        </div>
        <div class='preco'>
            <p class='price'>R$ 50,00</p>
        </div>
    </div>
    </div>
    `;
    

    
    }
}
