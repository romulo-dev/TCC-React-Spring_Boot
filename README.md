# Projeto de TCC - Teste da Janela de Johari

Este é o repositório onde armazeno meu projeto de TCC para o curso de Sistemas de Informação. O projeto foi baseado no trabalho do ex-aluno Otávio ([LinkedIn do Otávio](https://www.linkedin.com/in/otavio-leite-58781092/)), no qual ele aplicou o Teste da Janela de Johari em uma equipe de futebol. Ele utilizou um questionário para coletar os dados e representou os resultados graficamente no Power BI para cada atleta.

## 💡 O que é a Janela de Johari?
A Janela de Johari é um modelo psicológico desenvolvido por Joseph Luft e Harrington Ingham na década de 1950. Ele é usado para promover o autoconhecimento e melhorar a comunicação interpessoal dentro de grupos e organizações. O modelo divide a percepção de um indivíduo em quatro quadrantes:

Área Aberta (Conhecido por si mesmo e pelos outros)

Área Cega (Desconhecido por si mesmo, mas conhecido pelos outros)

Área Oculta (Conhecido por si mesmo, mas desconhecido pelos outros)

Área Desconhecida (Desconhecido tanto por si mesmo quanto pelos outros)

Esse modelo pode ser aplicado na gestão de equipes em qualquer organização, desde que haja um time de pessoas colaborando umas com as outras. A ideia principal é promover feedbacks para que os membros da equipe compreendam melhor como são percebidos pelos colegas e desenvolvam um maior autoconhecimento.

Abaixo está uma representação visual da Janela de Johari:

![](https://lh5.googleusercontent.com/jbYE6U_fT8w37i2Bf2N1sd9YqHgEjUsiU9-lMnitqGbWm39bVglZxAobwt-O8Oxj8fh5uD88RYA6SeozX3Og4yiuz8-ZWluwBVwZjx1sCTs0rEiLC7_4-CgyLmjcBCcE0sF5a-jC)

## 📌 Funcionalidades do Sistema
Desenvolvi um sistema web para gerenciar o teste da Janela de Johari. Ele permite que um líder de equipe:

✅ Faça login no sistema

✅ Cadastre e exclua turmas

✅ Visualize os resultados dos testes aplicados

Além disso, os membros da equipe podem:

✅ Fazer login no sistema

✅ Responder um questionário de 20 perguntas

O questionário é estruturado com alternativas A e B, e cada uma das alternativas possui 5 círculos de resposta, representando valores de 1 a 5.

### 🔹 Como funciona a pontuação?
Se o usuário selecionar o primeiro círculo da alternativa A (valor 1), automaticamente o sistema marca o quarto círculo da alternativa B (valor 4), garantindo que a soma entre A e B seja sempre 5.
Se o usuário escolher o quinto círculo da alternativa B (valor 5), nenhum círculo da alternativa A será marcado, mantendo a soma total igual a 5.

Esse método garante que cada resposta siga um padrão equilibrado, permitindo uma análise consistente dos perfis dos participantes.

## 🛠️ Tecnologias Utilizadas
Frontend: React, HTML/CSS, Javascript, Chart.js

Backend: Java, Spring Boot, JPA

Banco de Dados: MySQL, Workbeanch

Ferramentas: Visual Studio Code, Postman

## 📌 Conclusão
Este sistema foi desenvolvido para facilitar a avaliação do autoconhecimento dentro das equipes, ajudando líderes a identificar pontos fortes e oportunidades de melhoria para cada membro. Com o feedback estruturado, espera-se uma melhoria no desempenho e na comunicação do time.

Se você deseja saber mais sobre a Janela de Johari e como o sistema foi desenvolvido, fique à vontade para explorar este repositório! 🚀
