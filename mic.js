const prompt = require('prompt-sync')();
var vtempopadrao;
var vpratoselecionado;
var prato;

function menu() {


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

        temposelecionado();
    }
}

function tempopadrao(vmenu) {

    switch (vmenu) {
        case '1':
            vtempopadrao = 10;
            break;
        case '2':
            vtempopadrao = 8;
            break;
        case '3':
            vtempopadrao = 15;
            break;
        case '4':
            vtempopadrao = 12;
            break;
        case '5':
            vtempopadrao = 8;
            break;
    }
    return vtempopadrao;
}

function pratoselecionado(vprato) {

    switch (vprato) {
        case '1':
            vpratoselecionado = 'Pipoca';
            break;
        case '2':
            vpratoselecionado = 'Macarrão';
            break;
        case '3':
            vpratoselecionado = 'Carne';
            break;
        case '4':
            vpratoselecionado = 'Feijão';
            break;
        case '5':
            vpratoselecionado = 'Brigadeiro';
            break;
        default:
            vpratoselecionado = 'Prato Inexistente';
            break;
    }
    return vpratoselecionado;
}

function temposelecionado() {

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
            executaprocessso(temposelecionado);
        }
    } else {
        console.log('Comando não programado')
    }
}

function executaprocessso(vtempocozimento) {
    console.clear();
    console.log(`Iniciando cozimento do seu prato de ${vpratoselecionado}`);

    setTimeout(function () {
        console.log('Prato pronto, bom apetite!!!');

        let executanovamente = prompt('\n Deseja cozinhar outro prato (S/N)?');

        if (executanovamente.toUpperCase() == 'S') {
            menu();
        }
        else {
            console.clear();
            console.log('Desligando o microondas');
        }
    }, vtempocozimento * 1000)
}

menu();