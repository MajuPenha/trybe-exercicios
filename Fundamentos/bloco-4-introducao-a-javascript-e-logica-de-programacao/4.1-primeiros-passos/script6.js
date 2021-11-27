let nomeDaPeca = 'rainha'
let peca = nomeDaPeca.toLowerCase()

switch(peca){
    case 'rei':
        console.log('todas as direlçoes(1 casa)')
        break;
    case 'rainha':
        console.log('todas as direções')
        break;
    case 'bispo':
        console.log('diagonais')
        break;
    case 'cavalo':
        console.log('Movimento em L(3 casas)')
        break;
    case 'torre':s
        console.log('Horizontal e vartical')
        break;
    case 'peão':
        console.log('vertical para frente(2 casas na primeira jogada, mas as outras jogadas é apenas 1 casa)')
        break;
    default:
        console.log('Peça inválida')
        break;
        
}