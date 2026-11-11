const CONTEUDO_GERAL = {
    "hardware": [
        { titulo: "A Fortaleza de Aço e Plástico", imagem: "imagens/gabinete.jpg", texto_aula: "O gabinete é a estrutura externa que abriga e organiza os componentes internos da máquina. Mais do que estética, ele serve para proteger peças sensíveis contra poeira, impactos físicos e ajudar na ventilação correta.", pergunta: "Qual peça protege e organiza os componentes internos do computador?", alternativas: ["Monitor", "Gabinete", "Teclado", "Impressora"], resposta: "Gabinete", link: "https://pt.wikipedia.org/wiki/Gabinete_de_computador" },
        { titulo: "O Navegador de Cursor Óptico", imagem: "imagens/mouse.jpg", texto_aula: "O mouse é um periférico de entrada fundamental que traduz movimentos físicos bidimensionais em coordenadas digitais na tela através de sensores ópticos ou laser. Ele permite a navegação interativa e o direcionamento preciso do cursor gráfico sobre os elementos da interface do sistema operacional.", pergunta: "Qual objeto você usa para mover o cursor na tela e escolher ícones?", alternativas: ["Mouse", "Caixa de som", "Webcam", "HD"], resposta: "Mouse", link: "https://pt.wikipedia.org/wiki/Rato_(informática)" },
        { titulo: "A Janela Gráfica de Alta Definição", imagem: "imagens/monitor.jpg", texto_aula: "O monitor atua como o principal dispositivo de saída visual, convertendo sinais elétricos digitais processados pela placa gráfica em uma matriz luminosa de pixels coloridos. É através dele que toda a interface gráfica do usuário, janelas e mídias se tornam perceptíveis ao olho humano.", pergunta: "Onde aparecem as imagens e palavras para você olhar no computador?", alternativas: ["Gabinete", "Mouse", "Monitor", "Teclado"], resposta: "Monitor", link: "https://pt.wikipedia.org/wiki/Monitor_de_vídeo" },
        { titulo: "A Mesa de Trabalho Volátil do Computador", imagem: "imagens/memoria_ram.jpg", texto_aula: "A Memória RAM (Random Access Memory) é o espaço de armazenamento temporário de altíssima velocidade onde o processador mantém os dados dos aplicativos e sistemas operacionais em execução ativa. Por ser estritamente volátil, todo o seu conteúdo é apagado instantaneamente quando a máquina é desligada.", pergunta: "Qual peça ajuda o computador a trabalhar com muitos programas ao mesmo tempo sem ficar lento?", alternativas: ["Placa de Vídeo", "Memória RAM", "Ventilador", "Botão de ligar"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Memória_de_acesso_aleatório" },
        { titulo: "O Baú de Guardar Dados", imagem: "imagens/hd.jpg", texto_aula: "O HD ou SSD é o componente responsável pelo armazenamento permanente de arquivos. É nele que ficam salvos o sistema operacional, seus documentos, fotos e jogos, mantendo tudo guardado mesmo quando o computador é desligado.", pergunta: "Onde o computador guarda suas fotos e jogos para sempre?", alternativas: ["Processador", "Mouse", "HD ou SSD", "Tomada"], resposta: "HD ou SSD", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "Velocidade: SSD vs HD", imagem: "imagens/ssd.jpg", texto_aula: "Enquanto o HD tradicional utiliza discos magnéticos mecânicos que giram para ler os dados, o SSD funciona inteiramente com circuitos eletrônicos. Essa tecnologia elimina partes móveis e acelera drasticamente a inicialização do sistema e o carregamento de programas.", pergunta: "Se você quer que o computador ligue super rápido, qual dessas peças é a melhor escolha?", alternativas: ["HD", "SSD", "Teclado", "Gabinete"], resposta: "SSD", link: "https://pt.wikipedia.org/wiki/Unidade_de_estado_sólido" },
        { titulo: "Cuidado com o HD", imagem: "imagens/shattered_hd.jpg", texto_aula: "Os discos rígidos tradicionais (HDs) possuem cabeças de leitura que flutuam a frações de micrômetros de um disco magnético em alta rotação. Impactos físicos ou quedas com o computador ligado podem fazer essas peças se chocarem, corrompendo permanentemente os dados.", pergunta: "Por que devemos ser cuidadosos ao mexer no computador com HD, evitando batidas?", alternativas: ["Ele esquenta a mão", "O disco interno pode riscar", "Ele gasta pilha", "Ele é de vidro"], resposta: "O disco interno pode riscar", link: "https://pt.wikipedia.org/wiki/Disco_rígido" },
        { titulo: "O Cérebro Trabalhando em Equipe", imagem: "imagens/processador.jpg", texto_aula: "O processador é o núcleo de cálculo e execução de instruções da máquina. No entanto, para manter alto desempenho ao lidar com várias aplicações simultâneas, ele depende diretamente de uma memória RAM dimensionada corretamente para evitar gargalos de processamento.", pergunta: "Se o chefe é rápido, mas o computador trava com muitas janelas abertas, o que pode estar faltando?", alternativas: ["Espaço no HD", "Memória RAM", "Monitor novo", "Mouse rápido"], resposta: "Memória RAM", link: "https://pt.wikipedia.org/wiki/Unidade_central_de_processamento" },
        { titulo: "Entrada de Dados", imagem: "imagens/scanner.jpg", texto_aula: "Dispositivos de entrada mandam informações para dentro do computador, como enviar uma foto de um papel para a tela.", pergunta: "Qual aparelho você usa para mandar uma foto de um papel para dentro do computador?", alternativas: ["Monitor", "Scanner", "Caixa de Som", "Mouse"], resposta: "Scanner", link: "https://pt.wikipedia.org/wiki/Digitalizador" },
        { titulo: "Saída de Dados", imagem: "imagens/perifericos_saida.jpg", texto_aula: "Os periféricos de saída traduzem os dados processados pelo computador em estímulos perceptíveis para nós. As caixas de som convertem sinais elétricos digitais em ondas sonoras, permitindo a reprodução de músicas, alertas e áudios do sistema.", pergunta: "Qual peça faz o computador tocar música para você ouvir?", alternativas: ["Webcam", "Teclado", "Caixa de Som", "Microfone"], resposta: "Caixa de Som", link: "https://pt.wikipedia.org/wiki/Periférico_de_saída" },
        { titulo: "A Metrópole dos Circuitos de Conexão", imagem: "imagens/placa_mae.jpg", texto_aula: "A placa-mãe funciona como a espinha dorsal e a central de comunicação do computador. Nela estão gravadas milhares de trilhas condutoras que interligam eletricamente o processador, a memória, o armazenamento e os periféricos, permitindo a troca constante de dados entre eles.", pergunta: "Por onde as informações viajam dentro do computador, como ruas em uma cidade?", alternativas: ["Ventilador", "Estradas da Placa-Mãe", "Cabo de energia", "Tela"], resposta: "Estradas da Placa-Mãe", link: "https://pt.wikipedia.org/wiki/Placa-mãe" },
        { titulo: "O Renderizador Gráfico de Alta Performance", imagem: "imagens/placa_de_video.jpg", texto_aula: "A placa de vídeo é um componente de processamento dedicado a calcular e renderizar gráficos complexos. Ela alivia o processador principal ao gerar imagens detalhadas, texturas em alta resolução e efeitos visuais fluidos exigidos por jogos e softwares gráficos.", pergunta: "Quem no computador é responsável por criar imagens bonitas e realistas nos jogos?", alternativas: ["Fonte", "Placa de Vídeo", "Teclado", "Scanner"], resposta: "Placa de Vídeo", link: "https://pt.wikipedia.org/wiki/Placa_de_vídeo" },
        { titulo: "O Regulador de Tensão e Energia", imagem: "imagens/fonte.jpg", texto_aula: "A fonte de alimentação é responsável por converter a corrente elétrica alternada que vem da tomada em correntes contínuas estáveis e de baixa voltagem, distribuindo a energia de forma segura para alimentar cada componente interno do computador.", pergunta: "O que protege as peças do computador da energia forte da tomada?", alternativas: ["As peças podem queimar", "Fonte", "Monitor muda de cor", "Nada"], resposta: "Fonte", link: "https://pt.wikipedia.org/wiki/Fonte_de_alimentação" },
        { titulo: "O sistema de dissipação térmica", imagem: "imagens/cooler.jpg", texto_aula: "Durante o funcionamento intenso, componentes como o processador geram muito calor. O cooler atua como um sistema de ventilação forçada, soprando ar frio sobre o dissipador para evitar o superaquecimento e quedas de rendimento da máquina.", pergunta: "Por que ouvimos um barulho de vento dentro do computador quando jogamos muito?", alternativas: ["Som do jogo", "Cooler esfriando as peças", "HD rodando", "Limpeza de poeira"], resposta: "Cooler esfriando as peças", link: "https://pt.wikipedia.org/wiki/Cooler" },
        { titulo: "Tamanho dos Arquivos", imagem: "imagens/bytes.jpg", texto_aula: "A capacidade de armazenamento e o tamanho dos arquivos digitais são medidos em unidades como Megabytes e Gigabytes. Arquivos densos e complexos, como filmes em alta definição, exigem muito mais espaço do que arquivos compostos apenas por texto simples.", pergunta: "Qual desses arquivos precisa de mais espaço para guardar no computador?", alternativas: ["Uma letra", "Uma foto", "Um filme longo", "Ícone do mouse"], resposta: "Um filme longo", link: "https://pt.wikipedia.org/wiki/Gigabyte" },
        { titulo: "Cabos de Vídeo", imagem: "imagens/hdmi.jpg", texto_aula: "O cabo HDMI (High-Definition Multimedia Interface) é um padrão digital moderno capaz de transmitir sinais de vídeo de alta resolução e áudio multicanal simultaneamente através de um único cabo, sendo muito utilizado para conectar o computador a monitores e televisores.", pergunta: "Qual cabo você usa para conectar o computador à TV e ver filme com som e imagem?", alternativas: ["Cabo de Força", "Cabo VGA", "Cabo HDMI", "Cabo de Impressora"], resposta: "Cabo HDMI", link: "https://pt.wikipedia.org/wiki/HDMI" },
        { titulo: "O Módulo Portátil de Transporte de Dados", imagem: "imagens/pendrive.jpg", texto_aula: "O pendrive é uma unidade de armazenamento removível baseada em memória flash. Compacto e resistente, ele permite que você grave arquivos em um computador e os transporte fisicamente no bolso para acessar em qualquer outro lugar.", pergunta: "Por que o pendrive é útil para levar arquivos de um computador para outro?", alternativas: ["PC liga mais rápido", "Carrega arquivos para outros lugares", "Substitui monitor", "Limpa vírus"], resposta: "Carrega arquivos para outros lugares", link: "https://pt.wikipedia.org/wiki/Unidade_flash_USB" },
        { titulo: "Poeira e Calor", imagem: "imagens/poeira.jpg", texto_aula: "A poeira acumulada no interior do gabinete cria uma camada isolante sobre as peças e bloqueia as saídas de ar dos coolers, fazendo com que o computador retenha calor excessivo e perca estabilidade.", pergunta: "O que acontece se muita poeira acumular dentro do gabinete do computador?", alternativas: ["Ganha memória", "Fica silencioso", "Esquenta e trava", "Monitor fica bonito"], resposta: "Esquenta e trava", link: "https://pt.wikipedia.org/wiki/Manutenção_preventiva" },
        { titulo: "Hardware vs Software", imagem: "imagens/hardware_software.jpg", texto_aula: "O hardware engloba todas as partes físicas que podemos tocar, como o teclado e o monitor. Já o software representa a parte lógica, formada pelos programas, sistemas e códigos invisíveis que dão utilidade à máquina.", pergunta: "Se o mouse funciona, mas o jogo não abre, onde pode estar o problema?", alternativas: ["No Hardware", "No Software", "Na tomada", "No gabinete"], resposta: "No Software", link: "https://pt.wikipedia.org/wiki/Software" },
        { titulo: "A Chave de Acesso Única do Corpo", imagem: "imagens/biometria.jpg", texto_aula: "Os leitores biométricos utilizam características físicas exclusivas de cada pessoa, como impressões digitais ou reconhecimento facial, para autenticar a identidade e garantir a segurança do acesso ao sistema.", pergunta: "Para que serve um sensor biométrico no computador?", alternativas: ["Tirar fotos", "Identificar o dono pelo corpo", "Aumentar volume", "Imprimir papel"], resposta: "Identificar o dono pelo corpo", link: "https://pt.wikipedia.org/wiki/Biometria" }
    ],
    "atalhos": [
        { titulo: "O Atalho para Copiar", imagem: "imagens/ctrl_c.jpg", texto_aula: "O comando Ctrl + C tira uma cópia perfeita do texto ou arquivo que você marcou. Ele guarda essa cópia na memória do computador sem apagar o que já está escrito.", pergunta: "Qual atalho você usa para fazer uma cópia do texto que selecionou?", alternativas: ["Colar", "Copiar", "Apagar", "Imprimir"], resposta: "Copiar", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "O Atalho para Colar", imagem: "imagens/ctrl_v.jpg", texto_aula: "O comando Ctrl + V pega a cópia que você fez e coloca ela no lugar onde o cursor estiver piscando. É o complemento do comando de copiar.", pergunta: "Depois de copiar, qual atalho faz o texto aparecer no lugar novo?", alternativas: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Alt + Tab"], resposta: "Ctrl + V", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Voltar no Tempo (Desfazer)", imagem: "imagens/ctrl_z.jpg", texto_aula: "O Ctrl + Z funciona como um botão de desfazer. Se você apagou um trecho sem querer ou errou alguma coisa, ele desfaz a última ação e traz tudo de volta.", pergunta: "Se você apagou algo por engano, qual atalho pode trazer de volta?", alternativas: ["O PC desliga", "O erro é desfeito", "O arquivo some", "Abre o Google"], resposta: "O erro é desfeito", link: "https://pt.wikipedia.org/wiki/Control-Z" },
        { titulo: "Mudar de Lugar (Recortar)", imagem: "imagens/ctrl_x.jpg", texto_aula: "O Ctrl + X recorta o texto ou arquivo, tirando ele do lugar original para que você possa colar em outro ponto. É como cortar uma imagem com a tesoura para colar em outra folha.", pergunta: "Qual atalho corta o texto do lugar antigo para mover para outro?", alternativas: ["Ctrl + X", "Ctrl + C", "Ctrl + P", "Ctrl + A"], resposta: "Ctrl + X", link: "https://pt.wikipedia.org/wiki/Corta,_copia_e_cola" },
        { titulo: "Selecionar Tudo de uma Vez", imagem: "imagens/ctrl_a.jpg", texto_aula: "O comando Ctrl + A seleciona todo o texto ou todos os arquivos que estão na tela de uma só vez, poupando o trabalho de arrastar o mouse por tudo.", pergunta: "Qual atalho seleciona todo o conteúdo de um documento de texto?", alternativas: ["Apagar tudo", "Selecionar todo o conteúdo", "Abrir arquivo", "Aumentar letra"], resposta: "Selecionar todo o conteúdo", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Alternar Entre Janelas", imagem: "imagens/alt_tab.jpg", texto_aula: "Segurando a tecla Alt e apertando o Tab, você consegue alternar rapidamente entre os programas e janelas que estão abertos no computador, sem precisar usar o mouse.", pergunta: "Qual atalho ajuda a pular entre programas que estão abertos no computador?", alternativas: ["F5", "Alt + Tab", "Windows + D", "Ctrl + P"], resposta: "Alt + Tab", link: "https://pt.wikipedia.org/wiki/Alt-Tab" },
        { titulo: "Mostrar a Área de Trabalho", imagem: "imagens/windows_d.jpg", texto_aula: "Apertando a tecla Windows junto com a letra D, todas as janelas abertas vão para o fundo da tela e mostram o seu plano de fundo (a Área de Trabalho) instantaneamente.", pergunta: "O que acontece quando você aperta a tecla Windows junto com a letra D?", alternativas: ["Abre o Disco", "Mostra a Área de Trabalho", "Desliga o PC", "Deleta tudo"], resposta: "Mostra a Área de Trabalho", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "Salvar o Trabalho", imagem: "imagens/ctrl_s.jpg", texto_aula: "O comando Ctrl + S serve para salvar o arquivo em que você está trabalhando. É um hábito excelente apertar esse atalho de vez em quando para não perder nada se a energia cair.", pergunta: "Por que é bom apertar Ctrl + S várias vezes enquanto trabalha?", alternativas: ["Para acelerar o PC", "Para garantir que fique guardado", "Para mudar a cor", "Para imprimir"], resposta: "Para garantir que fique guardado", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Fechar o Programa Atual", imagem: "imagens/alt_f4.jpg", texto_aula: "O atalho Alt + F4 fecha imediatamente a janela ou o programa que está aberto na sua frente. Se você usar ele na Área de Trabalho, ele abre a opção para desligar o computador.", pergunta: "O que o computador faz quando você aperta Alt + F4?", alternativas: ["Abre ajuda", "Fecha o programa aberto", "Aumenta o brilho", "Reinicia"], resposta: "Fecha o programa aberto", link: "https://pt.wikipedia.org/wiki/Alt-F4" },
        { titulo: "Atualizar a Página", imagem: "imagens/f5.jpg", texto_aula: "A tecla F5 serve para recarregar ou atualizar o conteúdo que está na tela, sendo muito usada em navegadores de internet para carregar informações novas.", pergunta: "Qual tecla você aperta para recarregar uma página na internet?", alternativas: ["F1", "F5", "F12", "Esc"], resposta: "F5", link: "https://pt.wikipedia.org/wiki/F5" },
        { titulo: "Localizar Palavras no Texto", imagem: "imagens/ctrl_f.jpg", texto_aula: "O comando Ctrl + F abre uma barra de busca na tela. Com ele, você digita uma palavra e o computador destaca onde essa palavra aparece no meio de um texto longo.", pergunta: "Para que serve o atalho Ctrl + F?", alternativas: ["Fechar tudo", "Encontrar uma palavra", "Formatar texto", "Fazer café"], resposta: "Encontrar uma palavra", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Imprimir o Documento", imagem: "imagens/ctrl_p.jpg", texto_aula: "O atalho Ctrl + P abre a janela de configuração de impressão do computador, permitindo enviar o arquivo ou página atual direto para a impressora.", pergunta: "Qual atalho você usa para abrir a janela de impressão?", alternativas: ["Ctrl + I", "Ctrl + P", "Ctrl + Alt", "Alt + P"], resposta: "Ctrl + P", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Abrir uma Nova Aba", imagem: "imagens/nova_aba.jpg", texto_aula: "O atalho Ctrl + T abre uma nova aba no seu navegador de internet, permitindo que você acesse um site diferente sem precisar fechar o que já estava aberto.", pergunta: "O que acontece quando você aperta Ctrl + T no navegador?", alternativas: ["Fecha o site", "Abre uma nova aba", "Troca de usuário", "Tira print"], resposta: "Abre uma nova aba", link: "https://pt.wikipedia.org/wiki/Navegação_por_abas" },
        { titulo: "Reabrir a Última Aba Fechada", imagem: "imagens/ctrl_shift_t.jpg", texto_aula: "Se você fechou uma página da internet por engano, apertar Ctrl + Shift + T faz ela reaparecer instantaneamente como mágica.", pergunta: "Se fechou uma aba por erro, qual atalho a traz de volta?", alternativas: ["Ctrl + Shift + T", "Alt + F4", "Ctrl + Z", "F5"], resposta: "Ctrl + Shift + T", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "Zoom na Tela", imagem: "imagens/ctrl_+.jpg", texto_aula: "Segurando a tecla Ctrl e apertando o botão de mais (+) ou menos (-), você consegue aumentar ou diminuir o tamanho de tudo o que está aparecendo na tela.", pergunta: "Como você faz as letras de um site ficarem maiores se estiverem pequenas?", alternativas: ["Gritando com o PC", "Ctrl e tecla de mais (+)", "F5", "Windows + D"], resposta: "Ctrl e tecla de mais (+)", link: "https://pt.wikipedia.org/wiki/Zoom_(informática)" },
        { titulo: "Bloquear o Computador", imagem: "imagens/windows_l.jpg", texto_aula: "O atalho Windows + L bloqueia o computador imediatamente, colocando a tela de senha. É o comando ideal para usar quando você precisar se levantar e sair da mesa.", pergunta: "Qual é a maneira mais rápida de bloquear o computador quando você sai?", alternativas: ["Desligar o monitor", "Windows + L", "Alt + F4", "Ctrl + Alt + Del"], resposta: "Windows + L", link: "https://pt.wikipedia.org/wiki/Tecla_Windows" },
        { titulo: "O Explorador de Pastas", imagem: "imagens/windows_e.jpg", texto_aula: "O atalho Windows + E abre diretamente a janela do Explorador de Arquivos, onde você consegue ver as pastas do computador, documentos, fotos e o meu computador rapidamente.", pergunta: "O que o atalho Windows + E faz?", alternativas: ["Abre E-mail", "Abre o explorador de pastas", "Exclui arquivos", "Edita fotos"], resposta: "Abre o explorador de pastas", link: "https://pt.wikipedia.org/wiki/Explorador_de_Arquivos" },
        { titulo: "O Gerenciador de Emergências", imagem: "imagens/ctrl_alt_del.jpg", texto_aula: "A combinação Ctrl + Alt + Del é o comando de emergência para quando o computador trava ou algum programa para de responder completamente, permitindo abrir o gerenciador para fechar a aplicação travada.", pergunta: "Qual combinação ajuda quando um programa congela e não responde?", alternativas: ["Esc + F1", "Ctrl + Alt + Del", "Ctrl + C + V", "Alt + Tab"], resposta: "Ctrl + Alt + Del", link: "https://pt.wikipedia.org/wiki/Control-Alt-Delete" },
        { titulo: "Apagar de Vez (Sem Lixeira)", imagem: "imagens/shift_del.jpg", texto_aula: "Apertando Shift + Delete, você apaga um arquivo permanentemente do computador sem mandar ele para a Lixeira. É um caminho sem volta, então é preciso usar com cuidado!", pergunta: "O que é diferente ao apagar com Shift + Delete?", alternativas: ["Muda a cor", "Apaga sem ir para a lixeira", "Faz cópia", "Protege arquivo"], resposta: "Apaga sem ir para a lixeira", link: "https://pt.wikipedia.org/wiki/Atalho_de_teclado" },
        { titulo: "A Foto da Tela", imagem: "imagens/print.jpg", texto_aula: "A tecla Print Screen (PrtSc) tira uma 'fotografia' instantânea de tudo o que está aparecendo no seu monitor, salvando a imagem para você poder colar e salvar depois.", pergunta: "Como você captura uma imagem de tudo que está na tela agora?", alternativas: ["Usando celular", "Apertando PrtSc", "Ctrl + P", "F5"], resposta: "Apertando PrtSc", link: "https://pt.wikipedia.org/wiki/Print_screen" }
    ],
    "bits": [
        { titulo: "A Menor Peça de Informação (Bit)", imagem: "imagens/bits.jpg", texto_aula: "O Bit é a menor unidade de informação que um computador consegue entender e guardar. Pense nele como um pequeno tijolinho: sozinho ele guarda apenas duas escolhas (ligado ou desligado, sim ou não), mas juntos eles constroem tudo no computador.", pergunta: "Qual é a menor unidade de informação que o computador usa?", alternativas: ["Byte", "Bit", "Hertz", "Pixel"], resposta: "Bit", link: "https://pt.wikipedia.org/wiki/Bit" },
        { titulo: "A União dos Bits (Byte)", imagem: "imagens/bit.jpg", texto_aula: "Um Byte é formado pela união de 8 bits agrupados. É como se fosse um pacotinho de tijolinhos usado para medir o tamanho dos arquivos e a memória do computador.", pergunta: "Quantos bits formam um Byte?", alternativas: ["4 bits", "10 bits", "8 bits", "16 bits"], resposta: "8 bits", link: "https://pt.wikipedia.org/wiki/Byte" },
        { titulo: "A Linguagem Binária", imagem: "imagens/sistema_binario.jpg", texto_aula: "Por dentro dos circuitos do computador, tudo funciona usando apenas dois números: 0 e 1. Essa linguagem baseada em dois estados é chamada de sistema binário, que é a base que a máquina entende.", pergunta: "Qual linguagem o processador entende diretamente?", alternativas: ["Alto Nível", "Linguagem de Máquina", "ASCII", "Humana"], resposta: "Linguagem de Máquina", link: "https://pt.wikipedia.org/wiki/Sistema_binário" },
        { titulo: "Verdadeiro ou Falso (Lógica Booleana)", imagem: "imagens/bool.jpg", texto_aula: "Na lógica usada pelos computadores, o número 1 representa 'Verdadeiro' (ou ligado) e o número 0 representa 'Falso' (ou desligado), ajudando a tomar decisões lógicas.", pergunta: "No sistema binário, o número 0 geralmente significa qual coisa?", alternativas: ["Verdadeiro", "Nulo", "Falso", "Ativo"], resposta: "Falso", link: "https://pt.wikipedia.org/wiki/Lógica_booleana" },
        { titulo: "A Conexão Sem Fio (Wi-Fi)", imagem: "imagens/wifi.jpg", texto_aula: "O Wi-Fi permite que os computadores troquem dados e pedacinhos de informações através do ar, usando ondas de rádio invisíveis em vez de cabos conectados fisicamente.", pergunta: "Como os bits viajam na rede Wi-Fi?", alternativas: ["Luz", "Ondas de rádio", "Cabos", "Vácuo"], resposta: "Ondas de rádio", link: "https://pt.wikipedia.org/wiki/Wi-Fi" },
        { titulo: "O Comandante da Máquina (Sistema Operacional)", imagem: "imagens/OS.jpg", texto_aula: "O Sistema Operacional (como o Windows ou o Linux) é o programa principal que cuida de todo o hardware e organiza o computador, permitindo que você abra aplicativos e use a máquina facilmente.", pergunta: "Qual a função principal do Sistema Operacional?", alternativas: ["Criar bits", "Gerir recursos e processos", "Aumentar bateria", "Limpar o disco"], resposta: "Gerir recursos e processos", link: "https://pt.wikipedia.org/wiki/Sistema_operativo" },
        { titulo: "Os Dados na Nuvem", imagem: "imagens/nuvem.jpg", texto_aula: "Salvar arquivos 'na nuvem' significa guardá-los em servidores gigantescos localizados em outros lugares, que ficam conectados à internet para você acessar de qualquer computador.", pergunta: "Onde ficam os dados salvos na 'Nuvem'?", alternativas: ["No monitor", "Em servidores remotos", "No teclado", "No HD local"], resposta: "Em servidores remotos", link: "https://pt.wikipedia.org/wiki/Computação_em_nuvem" },
        { titulo: "A Receita de Passos (Algoritmo)", imagem: "imagens/algoritmo.jpg", texto_aula: "Um algoritmo nada mais é do que uma sequência lógica de passos e regras bem explicadas para resolver um problema ou realizar uma tarefa, funcionando como uma receita de bolo para o computador.", pergunta: "O que define um algoritmo na programação?", alternativas: ["Uma imagem", "Uma sequência de passos lógicos", "Um hardware", "Um vírus"], resposta: "Uma sequência de passos lógicos", link: "https://pt.wikipedia.org/wiki/Algoritmo" },
        { titulo: "Os Pontinhos da Tela (Pixels)", imagem: "imagens/pixel.jpg", texto_aula: "Os pixels são os milhares de pontinhos coloridos que formam tudo o que aparece no monitor. Juntos, eles funcionam como um mosaico ou um quadro de ladrilhos que cria as imagens.", pergunta: "Qual é a menor parte que compõe uma imagem no monitor?", alternativas: ["Bit", "Pixel", "Voxel", "Byte"], resposta: "Pixel", link: "https://pt.wikipedia.org/wiki/Pixel" },
        { titulo: "A Memória Volátil da RAM", imagem: "imagens/ram2.jpg", texto_aula: "A memória RAM é temporária e guarda os dados apenas enquanto o computador está ligado. Quando você o desliga, tudo o que estava nela desaparece por completo.", pergunta: "O que acontece com a RAM ao desligar o PC?", alternativas: ["Salva no HD", "Dados são eliminados", "Fica rápida", "Nada"], resposta: "Dados são eliminados", link: "https://pt.wikipedia.org/wiki/Memória_volátil" },
        { titulo: "O Erro no Código (Bug)", imagem: "imagens/bug.jpg", texto_aula: "Um 'bug' é uma falha ou um errinho escondido no código de um programa que faz o sistema se comportar de maneira estranha ou fechar sozinho.", pergunta: "O que é um 'Bug' no computador?", alternativas: ["Um inseto", "Uma falha no código", "Um hardware", "Uma senha"], resposta: "Uma falha no código", link: "https://pt.wikipedia.org/wiki/Erro_de_software" },
        { titulo: "Inteligência Artificial", imagem: "imagens/ia.jpg", texto_aula: "A Inteligência Artificial é uma tecnologia que permite aos computadores aprenderem através de uma enorme quantidade de dados, simulando o raciocínio humano para resolver problemas.", pergunta: "Característica principal de um sistema de IA?", alternativas: ["Sem eletricidade", "Aprender com dados", "Sem CPU", "Mecânico"], resposta: "Aprender com dados", link: "https://pt.wikipedia.org/wiki/Inteligência_artificial" },
        { titulo: "A Rede Global de Conexão", imagem: "imagens/internet.jpg", texto_aula: "A Internet é a grande rede mundial que conecta computadores do planeta inteiro, permitindo que eles troquem dados e informações em questão de segundos.", pergunta: "O que é a Internet tecnicamente?", alternativas: ["Um software", "Rede global de computadores", "Um monitor", "Um satélite"], resposta: "Rede global de computadores", link: "https://pt.wikipedia.org/wiki/Internet" },
        { titulo: "As Pastas de Organização (Diretórios)", imagem: "imagens/diretorio.jpg", texto_aula: "Os diretórios funcionam como as pastas do computador, organizando arquivos e documentos de forma parecida com gavetas em um armário para facilitar a busca.", pergunta: "Para que servem os diretórios?", alternativas: ["Limpar RAM", "Organizar arquivos", "Aumentar clock", "Trocar IP"], resposta: "Organizar arquivos", link: "https://pt.wikipedia.org/wiki/Diretório" },
        { titulo: "A Escrita do Programador (Código Fonte)", imagem: "imagens/codigo_fonte.jpg", texto_aula: "O código fonte é o texto com instruções escrito pelos programadores usando uma linguagem de programação, antes de ser transformado em um programa pronto para uso.", pergunta: "O que é o código fonte?", alternativas: ["O hardware", "Texto escrito pelo programador", "A caixa do PC", "O cabo"], resposta: "Texto escrito pelo programador", link: "https://pt.wikipedia.org/wiki/Código_fonte" },
        { titulo: "O Segredo dos Dados (Criptografia)", imagem: "imagens/seguranca.jpg", texto_aula: "A criptografia utiliza códigos secretos e complexos para proteger as informações, garantindo que apenas pessoas autorizadas consigam ler os dados.", pergunta: "Função da criptografia?", alternativas: ["Aumentar o volume", "Dificultar acesso a dados pessoais", "Mudar cor do monitor", "Desligar o computador"], resposta: "Dificultar acesso a dados pessoais", link: "https://pt.wikipedia.org/wiki/Senha" },
        { titulo: "A Seta na Tela (Cursor)", imagem: "imagens/cursor.jpg", texto_aula: "O cursor é aquele indicador em formato de seta que se move na tela conforme você mexe o mouse, servindo para apontar e interagir com os elementos.", pergunta: "Como se chama o indicador do mouse?", alternativas: ["Link", "Cursor", "Janela", "Botão"], resposta: "Cursor", link: "https://pt.wikipedia.org/wiki/Cursor_(informática)" },
        { titulo: "Enviando e Recebendo Dados", imagem: "imagens/upload.jpg", texto_aula: "Quando você faz um upload, você envia dados ou arquivos do seu computador para um servidor na rede. Quando faz um download, você recebe esses dados de lá para cá.", pergunta: "Enviar arquivo para o servidor chama-se:", alternativas: ["Download", "Upload", "Delete", "Print"], resposta: "Upload", link: "https://pt.wikipedia.org/wiki/Download" },
        { titulo: "O Programa Malicioso (Vírus)", imagem: "imagens/virus.jpg", texto_aula: "Um vírus de computador é um programa mal-intencionado criado para se espalhar, danificar arquivos ou roubar informações de forma escondida.", pergunta: "O que é um vírus no computador?", alternativas: ["Um jogo divertido", "Um programa ruim", "Uma imagem bonita", "Um som legal"], resposta: "Um programa ruim", link: "https://pt.wikipedia.org/wiki/Vírus_de_computador" }
    ]
};

let estado = {
    aluno: { nome: "", escola: "", idade: "" },
    categoriaAtual: null,
    indiceAtual: 0,
    pontuacao: 0,
    mostrandoAula: true,
    historico: []
};

function embaralhar(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function irParaModulos() {
    const n = document.getElementById('nome-usuario').value.trim();
    const e = document.getElementById('escola-usuario').value.trim();
    const i = document.getElementById('idade-usuario').value;

    if (!n || !e || !i || Number(i) <= 0) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    estado.aluno = {
        nome: n,
        escola: e,
        idade: i
    };

    document.getElementById('tela-cadastro').classList.add('hidden');
    document.getElementById('selecao-categoria').classList.remove('hidden');
}

function iniciarModulo(categoria) {
    estado.categoriaAtual = categoria;
    estado.indiceAtual = 0;
    estado.pontuacao = 0;
    estado.historico = [];
    estado.mostrandoAula = true;

    document.getElementById('selecao-categoria').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');

    renderizarEtapa();
}

function renderizarEtapa() {
    const container = document.getElementById('quiz-container');
    const dados = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];

    if (!dados) {
        finalizarQuiz();
        return;
    }

    if (estado.mostrandoAula) {
        container.innerHTML = `
            <h2>${dados.titulo}</h2>
            <img src="${dados.imagem}" class="img-aula" style="max-width:100%; height:auto; border-radius:10px;" onerror="this.src='https://via.placeholder.com/500x300?text=Imagem+Indisponivel'">
            <div class="texto-explicativo">
                <p>${dados.texto_aula.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
            <br>
            <button class="botao-principal" id="btn-desafio">
                Fazer Desafio
            </button>
        `;

        document.getElementById('btn-desafio').addEventListener('click', function() {
            estado.mostrandoAula = false;
            renderizarEtapa();
        });
    } else {
        const alternativasFinal = embaralhar([...dados.alternativas]);

        container.innerHTML = `
            <h3>${dados.pergunta}</h3>
            <div class="alternativas">
                ${alternativasFinal.map((alt) => `
                    <button class="btn-alt" data-escolha="${alt}">
                        ${alt}
                    </button>
                `).join('')}
            </div>
        `;

        container.querySelectorAll('.btn-alt').forEach(botao => {
            botao.addEventListener('click', function() {
                const escolha = this.dataset.escolha;
                verificarResposta(escolha);
            });
        });
    }
}

function verificarResposta(escolha) {
    const dados = CONTEUDO_GERAL[estado.categoriaAtual][estado.indiceAtual];
    const acertou = escolha === dados.resposta;

    estado.historico.push({
        pergunta: dados.pergunta,
        suaResposta: escolha,
        correta: dados.resposta,
        status: acertou
    });

    if (acertou) {
        estado.pontuacao++;
        estado.indiceAtual++;
        estado.mostrandoAula = true;

        if (estado.indiceAtual < CONTEUDO_GERAL[estado.categoriaAtual].length) {
            renderizarEtapa();
        } else {
            finalizarQuiz();
        }
    } else {
        const container = document.getElementById('quiz-container');

        container.innerHTML = `
            <h3>Ops! Você errou.</h3>
            <p><strong>Sua resposta:</strong> ${escolha}</p>
            <p><strong>Resposta correta:</strong> ${dados.resposta}</p>
            <div class="texto-explicativo">
                <p>${dados.texto_aula.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
            <br>
            <button class="botao-principal" id="btn-proxima">
                Próxima Pergunta
            </button>
        `;

        document.getElementById('btn-proxima').addEventListener('click', function() {
            estado.indiceAtual++;
            estado.mostrandoAula = true;
            renderizarEtapa();
        });
    }
}

async function enviarRelatorioAutomatico() {
    const total = CONTEUDO_GERAL[estado.categoriaAtual].length;
    const nota = (estado.pontuacao / total) * 10;

    const respostas = estado.historico.map((h, index) => {
        return `
QUESTÃO ${index + 1}
Pergunta: ${h.pergunta}
Resposta do aluno: ${h.suaResposta}
Resposta correta: ${h.correta}
Resultado: ${h.status ? "ACERTOU" : "ERROU"}
------------------------------
`;
    }).join("\n");

    const dadosFormulario = new FormData();

    dadosFormulario.append("_subject", "Novo resultado - Mestre da Informática");
    dadosFormulario.append("_template", "table");
    dadosFormulario.append("Nome do aluno", estado.aluno.nome);
    dadosFormulario.append("Escola", estado.aluno.escola);
    dadosFormulario.append("Idade", estado.aluno.idade);
    dadosFormulario.append("Módulo", estado.categoriaAtual.toUpperCase());
    dadosFormulario.append("Acertos", estado.pontuacao);
    dadosFormulario.append("Total de questões", total);
    dadosFormulario.append("Nota final", nota.toFixed(1));
    dadosFormulario.append("Histórico de respostas", respostas);

    try {
        const resposta = await fetch(
            "https://formsubmit.co/ajax/fernandofldo20@gmail.com",
            {
                method: "POST",
                body: dadosFormulario,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        const resultado = await resposta.json();

        if (resultado.success !== true && resultado.success !== "true") {
            throw new Error("O serviço não confirmou o envio.");
        }

        return true;
    } catch (erro) {
        console.error("Erro ao enviar relatório:", erro);
        return false;
    }
}

async function finalizarQuiz() {
    const container = document.getElementById('quiz-container');
    const total = CONTEUDO_GERAL[estado.categoriaAtual].length;
    const nota = (estado.pontuacao / total) * 10;

    container.innerHTML = `
        <h2>Parabéns, ${estado.aluno.nome}!</h2>
        <p>Você concluiu o módulo de ${estado.categoriaAtual.toUpperCase()}.</p>
        <div class="resultado-box">
            <p>Acertos: <strong>${estado.pontuacao}</strong> de ${total}</p>
            <p>Sua Nota: <strong>${nota.toFixed(1)}</strong></p>
        </div>
        <p id="status-email">
            📧 Enviando automaticamente seu resultado...
        </p>
        <div class="beneficios-box">
            <h4>🚀 Por que aprender Informática?</h4>
            <ul>
                <li>✅ Abre portas para muitos empregos.</li>
                <li>✅ O mercado de tecnologia cresce rapidamente.</li>
                <li>✅ Ajuda a resolver problemas de forma lógica.</li>
                <li>✅ Permite trabalhar de casa ou viajar.</li>
            </ul>
            <p>
                Aprender computação é como ganhar um superpoder para o futuro!
            </p>
        </div>
        <button class="botao-modulo" id="btn-revisao">
            Ver Revisão de Erros
        </button>
        <button class="botao-principal" onclick="location.reload()">
            Escolher Outro Módulo
        </button>
        <div id="revisao-detalhada" class="hidden"></div>
    `;

    document.getElementById('btn-revisao').addEventListener('click', mostrarRevisao);

    const enviado = await enviarRelatorioAutomatico();
    const status = document.getElementById('status-email');

    if (enviado) {
        status.innerHTML = "✅ Resultado enviado com sucesso!";
    } else {
        status.innerHTML = "⚠️ Não foi possível confirmar o envio. Verifique sua conexão e a configuração do serviço de e-mail.";
    }
}

function mostrarRevisao() {
    const div = document.getElementById('revisao-detalhada');
    div.classList.remove('hidden');

    div.innerHTML = `
        <h3>Revisão do Desafio</h3>
    ` + estado.historico.map((h, index) => `
        <div class="lista-revisao">
            <p><strong>${index + 1}. ${h.pergunta}</strong></p>
            <p style="color: ${h.status ? '#2ea043' : '#f85149'}">
                Sua resposta: ${h.suaResposta}
            </p>
            ${!h.status ? `
                <p style="color: #58a6ff">
                    Correta: ${h.correta}
                </p>
            ` : ''}
        </div>
    `).join('');
}

function toggleAudio() {
    const musica = document.getElementById("bg-music");
    const botao = document.getElementById("btn-audio");

    if (musica.paused) {
        musica.play().then(() => {
            botao.innerHTML = "🔊 Música: Ligada";
            botao.style.borderColor = "#2ea043";
        }).catch(erro => {
            console.error("Não foi possível reproduzir a música:", erro);
        });
    } else {
        musica.pause();
        botao.innerHTML = "🔇 Música: Desligada";
        botao.style.borderColor = "#30363d";
    }
}
