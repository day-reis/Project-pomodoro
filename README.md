# Pomodoro Focus Timer

Aplicação de produtividade desenvolvida para ajudar na organização de sessões de foco, estudo, trabalho e leitura através de ciclos de tempo personalizados.

O projeto foi pensado com uma interface minimalista, responsiva e dinâmica, onde cada modo possui sua própria identidade visual e tempo de sessão.

## Objetivo do projeto

O objetivo do Pomodoro Focus Timer é oferecer uma experiência simples e agradável para quem deseja manter constância em atividades que exigem concentração.

Além do cronômetro regressivo, a aplicação registra o número de sessões concluídas e o tempo total focado durante o dia, permitindo acompanhar o progresso de forma prática.

## Modos disponíveis

- Foco — 25 minutos
- Estudo — 50 minutos
- Trabalho — 45 minutos
- Leitura — 30 minutos

Cada modo possui uma identidade visual própria, alterando cores e elementos da interface de acordo com a sessão selecionada.

## Funcionalidades

- Cronômetro regressivo
- Iniciar sessão
- Pausar sessão
- Reiniciar cronômetro
- Alteração entre diferentes modos de produtividade
- Mudança automática de tema conforme o modo selecionado
- Contador de sessões concluídas
- Registro do tempo focado no dia
- Armazenamento das estatísticas no navegador
- Reset automático das estatísticas diárias
- Interface responsiva
- Animações visuais durante a sessão

## Diferenciais

Um dos principais diferenciais do projeto é a combinação entre produtividade e experiência visual.

Ao invés de utilizar apenas um cronômetro tradicional, cada tipo de sessão possui um ambiente visual próprio, ajudando a criar uma percepção diferente para cada atividade.

A aplicação também mantém as estatísticas utilizando o `localStorage`, permitindo que os dados permaneçam salvos mesmo após atualizar ou fechar a página.

Outro destaque é o sistema de acompanhamento diário, que registra:

- quantidade de sessões concluídas;
- tempo total focado;
- dados referentes ao dia atual.
## Preview

<img width="554" height="952" alt="pomodoro-trabalho" src="https://github.com/user-attachments/assets/250f4a37-10e3-4524-8da8-302db09bf929" />
<img width="551" height="946" alt="pomodoro-leitura" src="https://github.com/user-attachments/assets/2f674b67-af6c-47e5-870f-d836de6beea8" />
<img width="519" height="948" alt="pomodoro-estudo" src="https://github.com/user-attachments/assets/569f799a-ce8c-476b-8066-07d0f5fc847c" />
<img width="551" height="937" alt="Pmodoro-foco" src="https://github.com/user-attachments/assets/02d87a49-d49f-4bfe-b63b-4c5374c7d946" />


## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage

## Estrutura do projeto

```text
project-pomodoro/
│
├── index.html
├── style.css
├── script.js
└── README.md
