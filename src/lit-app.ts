import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {
    static styles = [
        css`
            .master{
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
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
                padding: 10px;
                background-color: lightblue;
                border-radius: 10px;
                font-weight: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .navinput{
                height: 20px;
                text-align: center;
            }
            .items{
                width: 100%;
            }
            .item{
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 20px;
                width: 100%;
            }
            .resumo{
                display: flex;
                width: 100%;
                justify-content: space-around;
                background-color: aliceblue;
                flex-wrap: wrap;
                margin-top: 20px;
                border-radius: 5px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .valor{
                display: flex;
                width: 100%;
                padding-left: 10px;
                padding-right: 10px;
                justify-content: space-between;
            }
            .bt{
                padding: 10px;
                border-radius: 5px;
                background-color: lightblue;
                border: none;
                width: 95vw;
            }
            .bt:hover{
                background-color: aqua;
            }
            .inqtd{
                width: 70px;
            }

            @media screen and (min-width: 900px) {         
                
                .items{
                    flex: 3;
                    flex-wrap: wrap;
                }
                .resumo{
                    flex: 1;
                }
                .btn{
                    display:flex;
                    justify-content: center;
                    width: 100%;
                    margin-top: 30px;
                    padding: 10px;
                }
            }

        `
    ];

    @property() name = 'teste';

    render() {
        return html`
        
    <div class='master'>
        <div class='navbar'>
            <p class='pnav'>HOME</p>
            <input class='navinput' placeholder='pesquisa'></input>
            <p class='pnav'>MINHA CONTA</p>
        </div>
        <div class='items'>
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
            <div class='resumo'>
                <div>
                    <span>Resumo do Pedido:</span>
                </div>
                <div class='valor'>
                    <p>item</p>
                    <p>R$50,00</p>
                </div>
                <div class='valor'>
                    <p>item</p>
                    <p>R$50,00</p>
                </div>
                <div class='valor'>
                    <p>Frete</p>
                    <p>Gr??tis</p>
                </div>
                <div class='valor'>
                    <p>Subtotal</p>
                    <p>R$100,00</p>
                </div>
                <div class='btn'>
                    <button class='bt'>
                        Finalizar compra
                    </button>
                </div>
        </div>      
    </div>
    `;
    

    
    }
}
