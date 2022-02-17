import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {

    return (
      <div>
      {conteudos.map((item) => (
      <div>
        <p>{`O conteúdo é: ${item.conteudo}`}</p>
        <p>{`O status é: ${item.status}`}</p>
        <p>{`O bloco é: ${item.bloco}`}</p>
      </div>
       ) )}
    </div>
    );
  }
}

export default Content;