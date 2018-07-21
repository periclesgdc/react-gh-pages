import React, { Component } from 'react';

import Message from './Message.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 0,
            messages: [
                '<===================================>',
                'Eu te amo, meu bem!',
                'Obrigado por estar comigo nas horas difíceis',
                'Nas fáceis e nas tantas outras.',
                'Obrigado por me permitir estar ao seu lado e por me dar uma segunda chance.',
                'Por fim eu só quero dizer que é um sonho real viver ao teu lado.',
                'S2 Com amor, para Carolayne Vandejane S2'
            ]
        };
    }

    appendMessage() {
        this.setState({item: this.state.item + 1});
    }



    render() {
        return(
            <div className="content">
                <Message content="Clique no botão e surpreenda-se: " />
                <button style={{
                    marginLeft: 10+'px'
                }} onClick={this.appendMessage.bind(this)}>Clique aqui</button>

                {React.createElement(
                    'div',
                    {id: 'result'},
                    <Message content={this.state.messages[this.state.item]} color="#ff0000" />
                )}
            </div>
        );
    }
}

export default App;