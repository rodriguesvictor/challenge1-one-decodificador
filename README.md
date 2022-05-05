# 1 - Challenge Oracle ONE: Decodificador de Texto
Olá, este é o primeiro desafio feito por mim no **Oracle ONE**.  O projeto se trata de um decodificador de texto.

## Mas o quê o decodificador faz?

Criptografa, descriptografa e copia textos, o usuário deve utilizar chaves de criptografia e descriptografia.

**As "chaves" de criptografia são:**
`A letra "e" é convertida para "enter"`  
`A letra "i" é convertida para "imes"`  
`A letra "a" é convertida para "ai"`  
`A letra "o" é convertida para "ober"`  
`A letra "u" é convertida para "ufat"`

**As "chaves" de descriptografia são:**  
`A palavra "enter" é convertida para "e"`  
`A palavra "imes" é convertida para "i"`  
`A palavra "ai" é convertida para "a"`  
`A palavra "ober" é convertida para "o"`  
`A palavra "ufat" é convertida para "u"`

Por exemplo:  
`"gato" => "gaitober"`  
`gaitober" => "gato"`

**Requisitos:**  
- Deve funcionar apenas com letras minúsculas  
- Não devem ser utilizados letras com acentos nem caracteres especiais  
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
