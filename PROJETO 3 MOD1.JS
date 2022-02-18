
console.clear();
var prompt = require(`prompt-sync`)();

do{

var decisaoManha;
var decisaoTarde1;
var decisaoTarde2;
var decisaoNoite;
var encerrar = false;
var periodo;

var VoceStatus = {
    Saude: true,

};

var tempo = {
    Dia: 1,
    Hora: 9,
}

let conseqmanha;
let conseqtarde;
let conseqtarde1;
let conseqtarde2;
let conseqtarde3;
let conseqFinal;
let conseqFinal2;

// OBJETO PARA MUDAR A COR DO TEXTO
colors = {
    reset: '\033[0m',

    //text color

    black: '\033[30m',
    red: '\033[31m',
    green: '\033[32m',
    yellow: '\033[33m',
    blue: '\033[34m',
    magenta: '\033[35m',
    cyan: '\033[36m',
    white: '\033[37m',

    //background color

    blackBg: '\033[40m',
    redBg: '\033[41m',
    greenBg: '\033[42m',
    yellowBg: '\033[43m',
    blueBg: '\033[44m',
    magentaBg: '\033[45m',
    cyanBg: '\033[46m',
    whiteBg: '\033[47m'
}

// FUNÇÃO PARA PROSSEGUIR.

function continuar() {
    console.clear(prompt('\033[36mENTER PARA CONTINUAR..\033[0m'));
}

// FUNÇÃO PARA VALIDAR O NOME.
function validar(validacao) {

    do {
        console.clear();
        console.log('\n\033[36mESCREVA SEU NOME PARA COMEÇAR O JOGO:\033[0m\n');
        VoceStatus.nome = prompt(` `).toUpperCase();

    } while (!isNaN(VoceStatus.nome));

    return VoceStatus.nome;
}

// FUNÇÃO PARA VARIAR O TEMPO E O PERÍODO.
function temporizador(VariarTempo) {
    tempo.Hora += 3;
    if (tempo.Hora >= 5 && tempo.Hora <= 11) {
        periodo = `HORAS DA MANHÃ`;
    } if (tempo.Hora >= 12 && tempo.Hora <= 18) {
        periodo = `HORAS DA TARDE`;
    } if (tempo.Hora >= 19 && tempo.Hora <= 24) {
        periodo = `HORAS DA NOITE`;
    }
    console.log(` ${tempo.Dia}º DIA, ${tempo.Hora} ${periodo} `);

    if (tempo.Hora >= 24) {
        tempo.Hora = tempo.Hora - 24
        tempo.Dia++
    }
}
// FUNÇÃO PARA RANDOMIZAR SITUAÇÕES.
function random() {
    computer = 0;
    computer = Math.floor(Math.random() * 100);
    return computer;
}
// FUNÇÃO PARA ENCERRAR O JOGO EM BATALHAS
function GameOver() {

        VoceStatus.Saude = false;
        console.log(computer);     
}
// FUNÇÃO PARA LUTAR PODENDO GANHAR E CONTINUAR OU PERDER E ENCERRAR O JOGO.
function vitoria() {
        random();
    if (computer <= 50) {

        VoceStatus.Força = true;
        VoceStatus.Respeito = true;        
        console.log(computer);        
        return VoceStatus;

    } else {

        GameOver();
    }

}


//==========================================================================================================================================
//CRIEI ESTA FUNÇÃO PARA DECIDIR O DESTINO DAS PERGUNTAS FEITAS DURANTE OS PERIODOS DA MANHÃ,TARDE,NOITE.

function ConseqPeriodo(receber, resposta) {


    //PARTE DA MANHÃ//
    if (tempo.Hora >= 9 && tempo.Hora <= 11) {

        conseqmanha = [``,
            `\n---> DURANTE TODA A CONVERSA COM O DETENTO VOCÊ DESCOBRIU QUE ELE SE CHAMAVA ADAM E FOI O PRIMEIRO PRISIONEIRO TRANSFERIDO PARA PRISÃO DE ALCATRAZ. <-----\n`,
            `\n---> VOCÊ NÃO DEU A MÍNIMA PARA O DETENTO, FICANDO CADA UM DO SEU LADO. AFIM DE SE PROTEGER DECIDIU COMEÇAR A TREINAR DENTRO DA CELA. <-----\n`,
            `\n---> VOCÊ CONFRONTOU O DETENTO SEM MOTIVOS E ACABOU SE ENVOLVENDO EM UMA BRIGA COM ELE ! AGORA AGUENTE AS CONSEQUÊNCIAS! <-----\n`,
        ];
        // SAÚDE
        if (decisaoManha == 1) {

            console.clear();
            console.log(conseqmanha[1]);
            VoceStatus.Respeito = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mRESPEITO\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoManha == 2) {

            console.clear();
            console.log(conseqmanha[2]);
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mFORÇA\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoManha == 3) {

                console.clear();
                console.log(conseqmanha[3]);
                temporizador();
                console.log();
                vitoria();

                if (VoceStatus.Saude == false ) {
                    console.log('\n---> \033[31mGAME OVER!! VOCÊ FOI BRUTALMENTE ASSASSINADO PELO SEU COLEGA DE CELA QUE GUARDAVA UMA FACA FEITA DE ESCOVA E GILETE EMBAIXO DO TRAVESSEIRO \033[0m <---\n');
                    temporizador();
                    console.table(VoceStatus);
                    encerrar = true;
                    
                } else if (VoceStatus.Saude == true){
                    console.log('\n\033[0mVOCÊ GANHOU O CONFRONTO E COM ISSO OBTEVE ALGUNS ATRIBUTOS: \033[34mRESPEITO E FORÇA\033[0m');
                    console.table(VoceStatus);
                    console.log('\n----> \033[34mAPESAR DE TER GANHADO A BRIGA QUE VOCÊ CAUSOU E TER GANHADO MAIS RESPEITO DO DETENTO, VOCÊS PARECEM TEREM SE ENTENDIDO...\033[0m <---- \n');
                }

            

        }

    }

    //===================================================================================================================================
    //PERÍODO DA TARDE 1//
    else if (tempo.Hora >= 12 && tempo.Hora < 15) {
        //CONFIANÇA 

        conseqtarde = [``,
            `\n---> VOCÊ E ADAM VÃO A QUADRA MAS NINGUÉM TE CONHECE E VOCÊS FICAM DE FORA DO JOGO APENAS ASSISTINDO <-----\n`,
            `\n---> VOCÊ FOI A QUADRA DE BASQUETE MESMO COM DOR DEVIDO AO TREINO E SEM ALMOÇAR..  AO ENTRAR NA QUADRA UM DETENTO JOGA A BOLA DE BASQUETE NA SUA CABEÇA, VOCÊ DESMAIA COM A PANCADA E É LEVADO AS PRESSAS PARA A ENFERMARIA. <-----\n`,
            `\n---> VOCÊ DECIDE IR JOGAR BASQUETE, ADAM TE ACOMPANHA E ACABAM FICANDO EM TIMES OPOSTOS, VOCÊ ENTÃO PERCEBE QUE ADAM AINDA NÃO SUPEROU A BRIGA ENTRE VOCÊS <-----\n`,
        ];


        if (decisaoTarde1 == 1 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde[1]);
            VoceStatus.Confiança = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde1 == 1 && decisaoManha == 2) {

            console.clear();
            console.log(conseqtarde[2]);
            VoceStatus.Confiança = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();


        } else if (decisaoTarde1 == 1 && decisaoManha == 3 && VoceStatus.Força == true) {

            console.clear();
            console.log(conseqtarde[3]);
            VoceStatus.Confiança = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();
        }

        //LEALDADE

        conseqtarde1 = [``,
            `\n---> AO CHEGAR NO REFEITÓRIO ADAM DIZ PARA TOMAR CUIDADO COM A GANGUE  "LATIN KINGS"  QUE COSTUMAM ENVENENAR OS NOVATOS... DITO ISSO, UM DOS NOVATOS CAI SOBRE A MESA EM QUE VOCÊS ESTAVAM, JÁ SEM VIDA.. <-----\n`,
            '\n---> VOCÊ FOI SOZINHO BUSCAR SUA REFEIÇÃO E QUANDO CHEGA NA FILA PERCEBE UMA MOVIMENTAÇÃO DE DETENTOS PRÓXIMO A DUAS BANDEJAS DE COMIDA,ESCOLHA A \033[32m1ª\033[0m BANDEJA OU A \033[32m2ª\033[0m BANDEJA: <-----\n',
            '\n---> \033[32mPARABÉNS VOCÊ CONSEGUIU SOBREVIVER AO PRIMEIRO DIA EM ALCATRAZ!! ADAM COMEÇA A AGIR ESTRANHO E DEIXA VOCÊ IR NA FRENTE PEGAR A COMIDA, QUANDO NA FILA UM DOS GUARDAS PEDE PARA TE REVISTAR E ENCONTRA DROGAS NO BOLSO DE SUA BLUSA E VOCÊ É COLOCADO NA SOLITÁRIA ATÉ O PRÓXIMO DIA..\033[0m <-----\n',
        ];


        if (decisaoTarde1 == 2 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde1[1]);
            VoceStatus.Lealdade = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde1 == 2 && decisaoManha == 2) {

            do {
                console.clear();
                console.log(conseqtarde1[2]);
                var escolha = prompt('');

                if (escolha == 1) {
                    console.log(`\n VOCÊ ESCOLHEU A BANDEJA CERTA E NÃO FOI ENVENENADO.. CUIDADO!! \n`)
                    VoceStatus.Lealdade = true;
                    VoceStatus.Persuasão = true;
                    console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m E \033[34mPERSUASÃO\033[0m\n');


                } else if (escolha == 2) {
                    console.clear();
                    console.log('\n---> \033[31mGAME OVER!!!! A MAIOR GANGUE CHAMADA "LATIN KINGS" COMANDA TODA A PRISÃO E FOI A RESPONSÁVEL POR ENVENENAR ESSA BANDEJA DE COMIDA QUE VOCÊ ESCOLHEU.. PASSADO ALGUMAS HORAS.. VOCÊ FOI ENCONTRADO JÁ SEM VIDA SENTADO COM A CABEÇA ENCOSTADA SOBRE A MESA.\033[0m <---\n');
                    encerrar = true;

                }
            } while (isNaN(escolha) || escolha < 1 || escolha > 2);

            temporizador();
            console.table(VoceStatus);
            console.log();


        } else if (decisaoTarde1 == 2 && decisaoManha == 3) {

            console.clear();
            console.log(conseqtarde1[3]);
            encerrar = true;

        }

        //===================================================================================================================================
        //PERÍODO DA TARDE 2// 

    }

    else if (tempo.Hora >= 15 && tempo.Hora < 18) {
        // - CONFIANÇA     

        conseqtarde2 = [``,
            `\n---> ADAM CONTOU TODA SUA TRAJETÓRIA NAS PRISÕES QUE JA PASSOU E DISSE QUE O MELHOR JEITO DE FUGIR É TENDO O MÁXIMO RESPEITO DOS GUARDAS, TER LEALDADE, CONFIANÇA E PERSUASÃO.. <-----\n`,
            `\n---> ADAM ENCONTRA UMA DOSE DE ADRENALINA ENQUANTO A ENFERMEIRA NÃO CHEGA E DIZ QUE SE VOCÊS TOMASSEM CONSEGUIRIAM FUGIR JUNTOS AMARRANDO OS LENÇÓIS DAS CAMAS E DESCENDO PELA JANELA... <-----\n`,
            `\n---> VOCÊ PERCEBE QUE ADAM ESTA DISTRAÍDO E QUE OS GUARDAS ESTÃO TROCANDO DE TURNO, VOCÊ DESCANSA UM POUCO DEITANDO NA QUADRA ENQUANTO OBSERVA O MOVIMENTO DO AMBIENTE.. <-----\n`,
            `\n---> VOCÊ E ADAM APROVEITAM O TUMULTO EM VOLTA DO CORPO E PENSAM EM LIGAR AS SIRENES DE EMERGÊNCIA PARA TIRAR OS GUARDAS DOS POSTOS E VERIFICAR SE POSSUI ALGUMA SAÍDA PRÓXIMA PARA FUGIR.. <-----\n`,
            `\n---> VOCÊ PERCEBEU QUE TINHA MUITA INDIFERENÇA ENTRE AS GANGUES E COMEÇA A PLANEJAR UMA GRANDE REBELIÃO NO PRESIDIO.. <-----\n`,
        ];

        if (decisaoTarde2 == 1 && decisaoTarde1 == 1 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde2[1]);
            delete VoceStatus.Confiança;
            console.log(`\n VOCÊ PERDEU CONFIANÇA`);
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 1 && decisaoTarde1 == 1 && decisaoManha == 2) {

            console.clear();
            console.log(conseqtarde2[2]);
            delete VoceStatus.Confiança;
            console.log(`\n VOCÊ PERDEU CONFIANÇA`);
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 1 && decisaoTarde1 == 1 && decisaoManha == 3 && VoceStatus.Força == true) {

            console.clear();
            console.log(conseqtarde2[3]);
            delete VoceStatus.Confiança;
            console.log(`\n VOCÊ PERDEU CONFIANÇA`);
            temporizador();
            console.table(VoceStatus);
            console.log();


        } else if (decisaoTarde2 == 1 && decisaoTarde1 == 2 && decisaoManha == 2) {

            console.clear();
            console.log(conseqtarde2[5]);
            delete VoceStatus.Confiança;
            console.log(`\n VOCÊ PERDEU CONFIANÇA`);
            VoceStatus.Lealdade;
            VoceStatus.Persuasão;
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 1 && decisaoTarde1 == 2 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde2[4]);
            delete VoceStatus.Confiança;
            console.log(`\n VOCÊ PERDEU CONFIANÇA`);
            VoceStatus.Lealdade;    
            temporizador();
            console.table(VoceStatus);
            console.log();

        }

        // PERSUASÃO

        conseqtarde3 = [``,
            '\n---> \033[31mGAME OVER!!! VOCÊS NÃO POSSUEM OS REQUISITOS PARA REALIZAREM A FUGA DA PRISÃO DE ALCATRAZ POIS NÃO PLANEJARAM COMO SAÍRIAM, POR ONDE SAÍRIAM  E COMO CONVENCERIAM OS GUARDAS...\033[0m <-----\n',
            `\n---> VOCÊ ESTÁ MUITO FRACO PARA CONSEGUIR EXECUTAR UMA FUGA, AINDA MAIS SEM SE PREPARAR ANTES.. DESEJA CONTINUAR TENTANDO? (S/N) <-----\n`,
            `\n---> VOCÊ TENTA ESCAPAR ATÉ UMA GRADE ABERTA DA QUADRA DURANTE  A TROCA DE TURNO DOS GUARDAS...
                        ADAM TE CONFRONTA NO MEIO DO CAMINHO E PROMETE QUE VAI TE FAZER SE ARREPENDER POR TER FEITO ELE SE SENTIR HUMILHADO. <-----\n`,
            `\n---> VOCÊ E ADAM APROVEITAM O TUMULTO EM VOLTA DO CORPO E LIGAM AS SIRENES DE EMERGÊNCIA O QUE GERA UM ENORME CAOS E TODOS OS GUARDAS SAEM DE SEUS POSTOS PARA CONTER O MOTIM. <-----\n`,
            `\n---> VOCÊ ENCONTROU UMA FACA NO BOLSO DO DETENTO QUE ESTAVA MORTO E COMO O GUARDA QUE PROTEGE A SAÍDA PELOS FUNDOS DA COZINHA ESTAVA SOZINHO VOCÊ NÃO PENSOU DUAS VEZES E SEGUIU CORRENDO, MAS TINHAM MUITOS DETENTOS TE ATRAPALHANDO A CHEGAR LA. <-----\n`,
        ];

        if (decisaoTarde2 == 2 && decisaoTarde1 == 1 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde3[1]);
            encerrar = true;
            


        } else if (decisaoTarde2 == 2 && decisaoTarde1 == 1 && decisaoManha == 2) {
            do {
                console.clear();
                console.log(conseqtarde3[2]);
                var escolher = prompt('').toLocaleUpperCase();

                if (escolher == 'S' || escolher == 'SIM') {
                    console.log('\n---> \033[31mGAME OVER!!!!! VOCÊ CONTINUOU TENTANDO EXECUTAR UMA FUGA PELA ALA MÉDICA SEM SABER A ALTURA DA JANELA E ACABOU CAINDO ENQUANTO ADAM PROCURAVA PELA ENFERMEIRA...\033[0m <---\n');
                    encerrar = true;

                }
                else if (escolher == 'N' || escolher == 'NAO' || escolher == 'NÃO') {
                    console.log('\n \033[32mPARABÉNS!!!! VOCÊ PERCEBEU QUE PRECISAVA DE UM PLANO PARA CONSEGUIR FUGIR E POR ESTAR FRACO ACABOU CONQUISTANDO A COMPAIXÃO DE MARY A ENFERMEIRA, QUE O DEIXOU PASSAR A NOITE NA ALA MÉDICA EM TOTAL SEGURANÇA!!\033[0m \n');
                    VoceStatus.Persuasão = true;
                    VoceStatus.Lealdade = true;
                    encerrar = true;
                    
                }

            } while (escolher != 'S' && escolher != 'N' && escolher != 'SIM' && escolher != 'NAO' && escolher != 'NÃO'); 

            console.log('\nVOCÊ ADQUIRIU \033[34mPERSUASÃO\033[0m E \033[34mLEALDADE\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 2 && decisaoTarde1 == 1 && decisaoManha == 3) {

            console.clear();
            console.log(conseqtarde3[3]);
            vitoria();

            if (VoceStatus.Saude == false) {
                console.log('\n---> \033[31mGAME OVER!! VOCÊ FOI BRUTALMENTE ASSASSINADO PELO SEU COLEGA DE CELA QUE GUARDAVA UMA FACA FEITA DE ESCOVA E GILETE\033[0m <---\n');                
                temporizador();
                console.table(VoceStatus);
                console.log();
                encerrar = true;

            } else if (VoceStatus.Saude == true){
                console.log('VOCÊ CONSEGUIU SOBREVIVER AO ATAQUE DE ADAM QUE ESTAVA COM UMA FACA FEITA DE ESCOVA E GILETE');
                VoceStatus.Persuasão = true;
                console.log('\nVOCÊ ADQUIRIU \033[34mPERSUASÃO\033[0m\n');
                temporizador();
                console.table(VoceStatus);
                console.log();
            }


        } else if (decisaoTarde2 == 2 && decisaoTarde1 == 2 && decisaoManha == 3 && VoceStatus.Força == true) {

            console.clear();
            console.log(conseqtarde3[4]);
            VoceStatus.Persuasão = true;
            VoceStatus.Lealdade = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mPERSUASÃO\033[0m E \033[34mLEALDADE\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 2 && decisaoTarde1 == 2 && decisaoManha == 2) {

            console.clear();
            console.log(conseqtarde3[5]);
            VoceStatus.Persuasão == true;
            console.log('\nVOCÊ ADQUIRIU \033[34mPERSUASÃO\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        } else if (decisaoTarde2 == 2 && decisaoTarde1 == 2 && decisaoManha == 1) {

            console.clear();
            console.log(conseqtarde3[4]);
            VoceStatus.Persuasão == true;
            console.log('\nVOCÊ ADQUIRIU \033[34mPERSUASÃO\033[0m\n');
            temporizador();
            console.table(VoceStatus);
            console.log();

        }


    }
    //==================================================================================================================================================================================================================
    // PERÍODO DA NOITE//
    else if (tempo.Hora >= 18 && tempo.Hora <= 24) {
        // CONFIANÇA E FORÇA


        conseqFinal = [``,
            `\n---> VOCÊ ACREDITA QUE POSSUI TODOS OS REQUISITOS NECESSÁRIOS PARA ESCAPAR SOZINHO, DEIXOU ADAM PARA TRÁS E SEGUIU ATÉ A REDE DE ESGOTO DA PRISÃO QUE JOGA OS DEJETOS PARA O MAR <-----\n`,
            `\n---> VOCÊ NÃO QUIS ESPERAR POR ADAM E TENTOU A SORTE SEM CONFERIR SE OS LENÇÓIS ESTAVA BEM PRESOS E SE TERIA TODA A FORÇA NECESSÁRIA PARA SUPORTAR UMA POSSÍVEL QUEDA <-----\n`,
            `\n---> VOCÊ NÃO CONFIA EM ADAM E RAPIDAMENTE CORRE SOZINHO ATÉ A GRADE ANTES QUE OS GUARDAS E O PRÓPIO ADAM PERCEBAM.. <-----\n`,
            `\n---> SOZINHO VOCÊ NÃO CONSEGUIU SUBIR ATÉ A SAÍDA PELOS DUTOS DE AR DA COZINHA QUE FICA NOS FUNDOS DO REFEITÓRIO..
                    O LÍDER DA GANGUE "LATIN KINGS" FOI ATRÁS DE VOCÊ... AGORA É TUDO OU NADA... <-----\n`,
            `\n---> VOCÊ PENSOU EM ORQUESTRAR UMA REVOLUÇÃO ESPALHANDO PARA TODAS AS GANGUES QUE O ASSASSINO FOI UM DOS GUARDAS QUE PROTEGEM A SAÍDA PELOS FUNDOS DA COZINHA <-----\n`,
            `\n---> ADAM ENTÃO ACABOU NÃO RESISTINDO AOS FERIMENTOS CAUSADOS POR VOCÊ E MORREU PRÓXIMO A GRADE QUE VOCÊ FUGIRIA... <-----\n`,
            `\n---> VOCÊ DECIDIU AGIR POR CONTA PRÓPRIA E ABANDONOU ADAM SEM OLHAR PARA TRAS.. <-----\n`,
            `\n---> VOCÊ ACABA DECIDINDO AGIR POR CONTA PRÓPRIA E AGORA CONFIANDO EM SUAS HABILIDADES ADQUIRIDAS AO LONGO DO DIA VAI TENTAR ULTRAPASSAR O GUARDA QUE ESTA NO SEU CAMINHO PARA A FUGA.. <-----\n`,
        ];


        if (decisaoManha == 1 && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[1]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAME OVER!! VOCÊ NÃO CONSEGUIU FUGIR SOZINHO DE ALCATRAZ. ADAM DEIXOU AVISADO AO GUARDA QUE CASO VOCÊ TENTASSE ENGANÁ-LO TE MATARIA ANTES MESMO DE CHEGAR A SAÍDA DA PRISÃO..\033[0m <---\n');
            encerrar = true;



        } else if (decisaoManha == 2 && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[2]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAME OVER!! MESMO ADAM TE AJUDANDO VOCÊ NÃO RESISTIU A QUEDA, POIS NÃO OBTEVE TODOS OS REQUISITOS PARA SUPORTAR TODA A DECIDA PELA JANELA DA ALA MÉDICA E CHEGAR AO BARCO DE UM DOS MÉDICOS DA PRISÃO.. \033[0m <---\n');
            encerrar = true;


        } else if (decisaoManha == 3 && VoceStatus.Força == true && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[3]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAME OVER!! VOCÊ ESTAVA CANSADO E DOLORIDO AINDA DO JOGO POIS NÃO DESCANSOU.. ADAM TE ALCANÇOU E PRENDEU VOCÊ GRITANTO PELOS GUARDAS QUE AO PERCEBEREM A SITUAÇÃO COMEÇARAM A ATIRAR E VOCÊS DOIS NÃO SOBREVIVERAM...\033[0m <---\n');
            encerrar = true;


        } else if (decisaoManha == 1 && decisaoTarde1 == 2 && decisaoTarde2 == 1 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[4]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS VOCÊ CONSEGUIU DERROTAR O LÍDER DA GANGUE MAIS PERIGOSA DE ALCATRAZ E ASSIM UM DOS PRÓPRIOS PRISIONEIROS TE AJUDOU A SUBIR ATÉ OS DUTOS DE AR DA COZINHA E SUA FUGA FOI UM SUCESSO!\033[0m <---\n');
            encerrar = true;
            

        } else if (decisaoManha == 2 && decisaoTarde1 == 2 && decisaoTarde2 == 1 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[5]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS!!! AS SUAS HABILIDADES DE PERSUAÇÃO E MANIPULAÇÃO ESTÃO AFIADOS... VOCÊ CONSEGUIU ESCAPAR DA PRISÃO DE ALCATRAZ CONVENCENDO TODOS OS DETENTOS, CAUSANDO UMA REBELIÃO E FUGINDO PELOS FUNDOS DA COZINHA ENQUANTO OS GUARDAS ERAM ATACADOS..\033[0m <---\n');
            encerrar = true;
            

        } else if (decisaoManha == 3 && decisaoTarde1 == 1 && decisaoTarde2 == 2 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[6]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS!!! VOCÊ ADQUIRIU DESTREZA E CORAGEM O SUFICIENTE PARA CONTINUAR CORRENDO MESMO COM OS GUARDAS ATIRANDO ... POR SORTE NENHUMA BALA O ACERTOU E VOCÊ CONSEGUIU ESCAPAR PULANDO DO PENHASCO AO MAR ABERTO...\033[0m <---\n');
            encerrar = true;

        } else if (decisaoManha == 1 && decisaoTarde1 == 2 && decisaoTarde2 == 2 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[7]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS!!! VOCÊ POSSUI LEALDADE POR ADAM E JUNTOS CONSEGUIRAM SAIR DA PRISÃO ENQUANTO OS GUARDAS NÃO VIGIAVAM BEM AS SAÍDAS...\033[0m <---\n');
            encerrar = true;
            

        } else if (decisaoManha == 2 && decisaoTarde1 == 2 && decisaoTarde2 == 2 && decisaoNoite == 1) {

            console.clear();
            console.log(conseqFinal[8]);
            VoceStatus.Confiança = true;
            VoceStatus.Força = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mCONFIANÇA\033[0m E \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS!!! VOCÊ ESTAVA FORTE E COM DESTREZA O SUFICIENTE PARA PODER AMEAÇAR O GUARDA A LIBERAR A PASSAGEM SEM TE ATACAR, AINDA ASSIM VOCÊ O ATACA E NINGUÉM MAIS OUVE FALAR DE VOCÊ DENTRO DA PRISÃO DE ALCATRAZ..\033[0m <---\n');
            encerrar = true;            
        }

        // LEALDADE, CONFIANÇA, PERSUAÇÃO, -FORÇA


        conseqFinal2 = [``,
            `\n---> VOCÊ E ADAM ACREDITAM QUE POSSUEM TODOS OS REQUISITOS NECESSÁRIOS PARA ESCAPAREM DA PRISÃO E SEGUIRAM ATÉ A REDE DE ESGOTO DA PRISÃO QUE JOGA OS DEJETOS PARA O MAR <-----\n`,
            `\n---> VOCÊ ESPEROU POR ADAM QUE SEGUROU FORTE OS LENÇÓIS PARA QUE VOCÊ ESCAPASSE COM SEGURANÇA <-----\n`,
            `\n---> VOCÊ PERCEBEU QUE NÃO CONSEGUIRIA FUGIR SOZINHO E NÃO QUIS ARRISCAR, ACABOU CONFIANDO EM ADAM QUE PROMETEU NÃO FAZER NADA CASO O LEVASSE JUNTO <-----\n`,
            `\n---> VOCÊ SOZINHO NÃO CONSEGUIRIA SUBIR ATÉ A SAÍDA PELOS DUTOS DE AR DA COZINHA, FOI ENTÃO QUE ADAM COMEÇOU A TE EMPURRAR PARA CORRER E TE LEVANTOU ATÉ OS DUTOS DE AR DA COZINHA E VOCÊ PUXOU ELE PARA SEGUIREM JUNTOS COM A FUGA... <-----\n`,
            `\n---> VOCÊ CHAMOU SEU COMPANHEIRO DE CELA E EXPLICOU PARA ELE O PLANO: VAMOS ORQUESTRAR UMA REVOLUÇÃO ESPALHANDO PARA TODAS AS GANGUES QUE O ASSASSINO FOI UM DOS GUARDAS QUE PROTEGEM A SAÍDA PELOS FUNDOS DA COZINHA <-----\n`,
            `\n---> VOCÊ CONSEGUIU MAIS RESPEITO APÓS MATAR ADAM, O PRISIONERIO MAIS ANTIGO DE ALCATRAZ.. <-----\n`,
            `\n---> VOCÊ CHAMOU ADAM PARA APROVEITAR A OPORTUNIDADE DE ESCAPAR DA PRISÃO ENQUANTO NINGUÉM REPARAVA DEVIDO AO TUMULTO... <-----\n`,
            `\n---> VOCÊ ENCONTROU SEU COLEGA DE CELA E O FEZ REFÉM COM A FACA QUE ENCONTROU, MAS DISSE QUE NÃO O MACHUCARIA E FARIA ISSO SOMENTE PARA FUGIREM <-----\n`,
        ];


        if (decisaoManha == 1 && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[1]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            delete VoceStatus.Força;
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[32mPARABÉNS!!! VOCÊS CONSEGUIRAM FUGIR DE ALCATRAZ PULANDO EM ALTO MAR E NADANDO POR UNS MINUTOS ATÉ ENCONTRAR UM BARCO DEPOIS DE CONVENCER ALGUNS GUARDAS DE QUE LHES DEIXARIAM RICOS CASO AJUDASSEM VOCÊS A FUGIREM SEM DEIXAR RASTROS...\033[0m <---\n');
            encerrar = true;
            

        } else if (decisaoManha == 2 && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[2]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAMER OVER!! MESMO ADAM TE AJUDANDO VOCÊ NÃO RESISTIU A QUEDA, POIS NÃO OBTEVE TODOS OS REQUISITOS PARA SUPORTAR TODA A DECIDA PELA JANELA DA ALA MÉDICA E CHEGAR AO BARCO DE UM DOS MÉDICOS DA PRISÃO.. \033[0m <---\n');
            encerrar = true;
            

        } else if (decisaoManha == 3 && VoceStatus.Força == true && decisaoTarde1 == 1 && decisaoTarde2 == 1 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[3]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n\033[32mPARABÉNS!!! VOCÊ JA NÃO ESTAVA MAIS TÃO CANSADO DO JOGO POIS DESCANSOU O SUFICIENTE PARA GASTAR TODA A SUA ENERGIA EMPURRANDO ADAM NO CHÃO E CORRER ATÉ A GRADE QUE TE DEIXARIA FORA DA PRISÃO ... E AO FINAL DA TRILHA ENCONTRARIA OUTROS FUGITIVOS QUE SEGUIAM DE BARCO PARA LONGE DALI...\033[0m \n');
            encerrar = true;
            

        } else if (decisaoManha == 1 && decisaoTarde1 == 2 && decisaoTarde2 == 1 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[4]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n\033[32mPARABÉNS!!! VOCÊ ESTAVA COM A SAÚDE E ADRENALINA O SUFICIENTE PARA SUBIR E PUXAR ADAM CORRENDO AOS DUTOS DE AR E SEGUIREM ATÉ UM BARCO DE UM DOS COZINHEIROS E NAVEGAREM PARA BEM LONGE DE ALCATRAZ..\033[0m\n');
            encerrar = true;
            

        } else if (decisaoManha == 2 && decisaoTarde1 == 2 && decisaoTarde2 == 1 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[5]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAME OVER!!! VOCÊ NÃO TINHA TANTA FORÇA DE VONTADE E NÃO CONSEGUIU CONVENCER OS DETENTOS DE QUE OS CULPADOS FORAM OS GUARDAS DA COZINHA... ATÉ QUE UM DELES DESCOBRIU A SUA TRAMA E ACABOU TE ATACANDO DURANTE A NOITE COMO FORMA DE EXEMPLO AOS OUTROS DETENTOS...\033[0m <---\n');
            encerrar = true;


        } else if (decisaoManha == 3 && decisaoTarde1 == 1 && decisaoTarde2 == 2 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[6]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n\033[32mPARABÉNS!!! AGORA QUE VOCÊ ADQUIRIU RESPEITO E OS DETENTOS POSSUEM MEDO DE VOCÊ, NÃO PRECISA MAIS SE PREOCUPAR EM FUGIR, POIS AGORA FAZ PARTE DA GANGUE "LATIN KINGS".\033[0m\n');
            encerrar = true;
            

        } else if (decisaoManha == 1 && decisaoTarde1 == 2 && decisaoTarde2 == 2 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[7]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m\n');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n\033[32mPARABÉNS!!! VOCÊ POSSUI LEALDADE POR ADAM E JUNTOS CONSEGUIRAM SAIR DA PRISÃO ENQUANTO OS GUARDAS NÃO VIGIAVAM BEM AS SAÍDAS...\033[0m \n');
            encerrar = true;
            

        } else if (decisaoManha == 2 && decisaoTarde1 == 2 && decisaoTarde2 == 2 && decisaoNoite == 2) {

            console.clear();
            console.log(conseqFinal2[8]);
            VoceStatus.Lealdade = true;
            VoceStatus.Confiança = true;
            VoceStatus.Persuasão = true;
            delete VoceStatus.Força;
            console.log('\nVOCÊ ADQUIRIU \033[34mLEALDADE\033[0m, \033[34mCONFIANÇA\033[0m, \033[34mPERSUASÃO\033[0m E PERDEU \033[34mFORÇA\033[0m');
            // prop1 = Object.entries(VoceStatus);
            // console.log(prop1.length);
            temporizador();
            console.table(VoceStatus);
            console.log('\n---> \033[31mGAME OVER!!! ADAM NÃO SENTIU CONFIANÇA EM SUA PALAVRA E ACABOU TOMANDO A FACA DE VOCÊ E TE ATACANDO... VOCÊ NÃO SOBREVIVEU AO PRIMEIRO DIA DE ALCATRAZ! \033[0m <---\n');
            encerrar = true;
            
        }

    }

}

//========================================================================================================================
// FUNÇÃO PARA ECONOMIZAR AS LINHAS COM AS PERGUNTAS QUE DEFINIRÃO A TRAJETÓRIA DO JOGO.
function decisoes(horas) {

    

        if (tempo.Hora >= 9 && tempo.Hora <= 11) {
            
            do {
                console.clear();
                console.log(`\n Esses são seus Status iniciais: \n`);
                console.log(` ${tempo.Dia}º DIA, ${tempo.Hora} HORAS DA MANHÃ \n`);
                console.table(VoceStatus);                
                console.log('\nVOCÊ ACABOU DE CHEGAR EM ALCATRAZ E VAI DIVIDIR A CELA COM UM JOVEM QUIETO E EXTREMAMENTE MISTERIOSO.. \n\033[32m1\033[0m- CONVERSAR COM DETENTO | \033[32m2\033[0m- IGNORAR O DETENTO E COMEÇAR A TREINAR | \033[32m3\033[0m- PROVOCAR O DETENTO \n');                           
                decisaoManha = prompt('');
                if (decisaoManha == 1 || decisaoManha == 2 || decisaoManha == 3) {
                    ConseqPeriodo(tempo.Hora, decisaoManha);
                }     
                
            } while (decisaoManha != 3 && decisaoManha != 2 && decisaoManha != 1 );


        } else if (tempo.Hora >= 12 && tempo.Hora < 15) {

            do {               
                console.clear();
                console.log('\nA SIRENE COMEÇA A TOCAR E TODAS AS CELAS FORAM ABERTAS PARA QUE OS DETENTOS PEGUEM SUAS REFEIÇÕES.. \n\033[32m1\033[0m- JOGAR BASQUETE NA QUADRA | \033[32m2\033[0m- BUSCAR A SUA REFEIÇÃO\n');
                decisaoTarde1 = prompt('');
                if (decisaoTarde1 == 1 || decisaoTarde1 == 2) {
                ConseqPeriodo(tempo.Hora, decisaoTarde1);
                }

            } while (decisaoTarde1 !== 2 && decisaoTarde1 !== 1 && decisaoTarde1 == '');
        

        } else if (tempo.Hora >= 15 && tempo.Hora < 18) {

            do{
                console.clear();
                console.log('\nAPÓS DIVERSOS ACONTECIMENTOS AO SOAR DA SIRENE... COMECE A FICAR ATENTO! POIS ESSE PODE SER SEU ULTIMO DIA NA PRISÃO.. APROVEITE QUALQUER OPORTUNIDADE!! O QUE PRETENDE FAZER? \n\033[32m1\033[0m- PLANEJAR UMA FUGA | \033[32m2\033[0m- EXECUTAR UMA FUGA\n');             
                decisaoTarde2 = prompt('');
                if (decisaoTarde2 == 1 || decisaoTarde2 == 2) {
                ConseqPeriodo(tempo.Hora, decisaoTarde2);
                }

            } while (decisaoTarde2 !== 2 && decisaoTarde2 !== 1 && decisaoTarde2 == '');

        } else if (tempo.Hora >= 18 && tempo.Hora <= 24) {
            
           do{
                console.clear();
                console.log('\n JA ERA NOITE..  A CONTAGEM DOS PRESOS ESTAVA PRÓXIMA E CASO VOCÊ ESTEJA NA CELA PODERÁ NÃO SOBREVIVER ATÉ O PRÓXIMO DIA.. SE CHEGOU ATÉ AQUI SUA MELHOR OPÇÃO PARECE FUGIR, MAS COMO? \n\033[32m1\033[0m- SEGUIR SEUS INSTINTOS E FUGIR SOZINHO | \033[32m2\033[0m- FUGIR ACOMPANHADO\n');
                decisaoNoite = prompt('');
                if (decisaoNoite == 1 || decisaoNoite == 2) {
                ConseqPeriodo(tempo.Hora, decisaoNoite);
                }

            } while (decisaoNoite !== 2 && decisaoNoite !== 1 && decisaoNoite == '');
            
        }

    return [tempo.Hora, decisaoManha, decisaoTarde1, decisaoTarde2, decisaoNoite];
}
//========================================================================================================================
random();
console.log();
validar(VoceStatus.nome);

// inicio do jogo:
// HISTÓRIA (BACKGROUD):

    
    var playAgain = false;
    console.clear();
    console.log(`\n BEM VINDO AO "SURVIVE OR ESCAPE FROM PRISON"... `);
    console.log(`\n A HISTÓRIA SE PASSA NO MEIO DA BAÍA DE SÃO FRANCISCO (CALIFÓRNIA - EUA). ONDE INICIALMENTE FOI UTILIZADA COMO BASE MILITAR E SOMENTE MAIS TARDE FOI CONVERTIDA EM UMA PRISÃO DE SEGURANÇA MÁXIMA. A PRISÃO FEDERAL DE ALCATRAZ! \n`)
    continuar();
    console.log(`\n VOCÊ FOI ACUSADO(A) DE UM ATAQUE TERRORISTA ENVOLVENDO CENTENAS DE JOVENS E ADULTOS DOS ESTADOS UNIDOS, PORÉM VOCÊ É INOCENTE! E POR NÃO CONSEGUIR PROVAR A SUA INOCÊNCIA.. AGORA PRECISA FAZER O QUE FOR CAPAZ PARA SOBREVIVER ATÉ O FINAL DO DIA, DE QUALQUER JEITO POSSÍVEL OU FUGIR! \n`);
    continuar();

    // APRESENTAÇÃO INICIAL DO JOGO:
    console.log(`\n Esses são seus Status iniciais: \n`);
    console.log(` ${tempo.Dia}º DIA, ${tempo.Hora} HORAS DA MANHÃ \n`);
    console.table(VoceStatus);
    console.log();


    label1: while (true) {
        
           
        decisoes(tempo.Hora);

        if (encerrar == true) {

            break label1;
        }

        continuar();

    
    }

    console.log('\n-------------> \033[0mOBRIGADO POR JOGAR "SURVIVE OR ESCAPE FROM PRISON", APERTE \033[32mENTER\033[0m PARA JOGAR NOVAMENTEOU ENCERRE O JOGO INSERINDO \033[31mQUALQUER MENSAGEM + ENTER...\033[0m <------------- \n');
    playAgain = prompt('');
    if (playAgain == '') {
        playAgain = true;

    } else {
        playAgain = false;        
    }

} while (playAgain);
