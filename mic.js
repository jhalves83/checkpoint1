const prompt = require('prompt-sync')();

function menu() {
    var vtempopadrao;
    var vpratoselecionado;
    var prato;
    console.clear();

    console.log('1. Pipoca \n2. Macarrão\n3. Carne\n4. Feijão\n5. Brigadeiro');

    prato = prompt('Escolha seu prato?');

    vpratoselecionado = pratoselecionado(prato);

    if (vpratoselecionado == 'Prato Inexistente') {
        console.log(vpratoselecionado);
    } else {
        console.log(`Prato Selecionado: ${vpratoselecionado} `);

        vtempopadrao = tempopadrao(prato);

        console.log(`O tempo padrão para este prato é de ${vtempopadrao} segundos`);

        temposelecionado(temposelecionado, vtempopadrao);
    }
}

function tempopadrao(vmenu) {

    switch (vmenu) {
        case '1':
            var vtempopadrao = 10;
            break;
        case '2':
            var vtempopadrao = 8;
            break;
        case '3':
            var vtempopadrao = 15;
            break;
        case '4':
            var vtempopadrao = 12;
            break;
        case '5':
            var vtempopadrao = 8;
            break;
    }
    return vtempopadrao;
}

function pratoselecionado(vprato) {
    switch (vprato) {
        case '1':
            var vpratoselecionado = 'Pipoca';
            break;
        case '2':
            var vpratoselecionado = 'Macarrão';
            break;
        case '3':
            var vpratoselecionado = 'Carne';
            break;
        case '4':
            var vpratoselecionado = 'Feijão';
            break;
        case '5':
            var vpratoselecionado = 'Brigadeiro';
            break;
        default:
            var vpratoselecionado = 'Prato Inexistente';
            break;
    }
    return vpratoselecionado;
}

function temposelecionado(vtempo, vtempopadrao) {

    let tempopadrao = prompt('Deseja manter o tempo padrão (S/N)?');

    if (tempopadrao.toUpperCase() == 'S') {
        executaprocessso(vtempopadrao);
    }
    else if (tempopadrao.toUpperCase() == 'N') {
        let temposelecionado = prompt('Qual o tempo que deseja?');

        if (temposelecionado > vtempopadrao * 3) {
            console.log('Kabummmm');
        } else if (temposelecionado > vtempopadrao * 2) {
            console.log('A comida queimou');
        } else if (temposelecionado < vtempopadrao) {
            console.log('Tempo insuficiente');
        }
        else {
            executaprocessso(vtempo);
        }
    } else{
        console.log('Comando não programado')
    }

}

function executaprocessso(vtempocozimento) {
    console.log('Iniciando cozimento');

    setTimeout(function () { }, vtempocozimento)
    console.log('Prato pronto, bom apetite!!!');
}

menu();

