## Principais Tipos de Commit

| Tipo           | Quando Usar                                                                          | Exemplo Prático                                                   |
| :------------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **`feat`**     | Para uma **nova funcionalidade** (feature).                                          | `feat: adiciona botão de login com Google`                        |
| **`fix`**      | Para a **correção de um bug**.                                                       | `fix: corrige o cálculo do total no carrinho de compras`          |
| **`docs`**     | Apenas para mudanças na **documentação** (README, comentários, etc.).                | `docs: atualiza o README com instruções de instalação`            |
| **`style`**    | Ajustes de **formatação** que não alteram a lógica (espaços, ponto e vírgula, etc.). | `style: aplica regras do Prettier em todo o projeto`              |
| **`refactor`** | **Reescrita de código** que não corrige bug nem adiciona funcionalidade.             | `refactor: extrai lógica de validação para uma função separada`   |
| **`perf`**     | Mudança que melhora a **performance**.                                               | `perf: otimiza query do banco para carregar usuários mais rápido` |
| **`test`**     | Adição ou correção de **testes**.                                                    | `test: cria testes de unidade para a função de login`             |
| **`build`**    | Mudanças que afetam o **sistema de build** ou dependências externas.                 | `build: atualiza a versão do Next.js para 13.4`                   |
| **`ci`**       | Mudanças nos arquivos de **Integração Contínua** (GitHub Actions, etc.).             | `ci: corrige erro no script de deploy para produção`              |
| **`chore`**    | Outras tarefas de **manutenção** que não se encaixam nas outras categorias.          | `chore: adiciona a pasta `.vscode`ao`.gitignore``                 |
| **`revert`**   | Para **reverter** um commit anterior.                                                | `revert: reverte commit que quebrou a autenticação`               |

---

## Estrutura da Mensagem de Commit

O formato básico é:

```
<tipo>(<escopo>): <descrição>
```

- **`<tipo>`**: Obrigatório. O tipo da alteração (`feat`, `fix`, etc.).
- **`<escopo>`**: Opcional. Onde a mudança ocorreu (ex: `api`, `auth`, `ui`). Ajuda a dar contexto.
  - _Exemplo:_ `fix(auth): impede o crash ao tentar logar com usuário inválido`
- **`<descrição>`**: Obrigatório. Uma descrição curta, em letras minúsculas e no modo imperativo.

### Exemplo Completo com Corpo

Quando a descrição curta não é suficiente, adicione um corpo para explicar o "porquê" da mudança.

```
feat(profile): permite que o usuário adicione um avatar

Adiciona a funcionalidade de upload de imagem na página de perfil.
O usuário agora pode clicar em sua foto e selecionar um novo arquivo
JPG ou PNG de até 2MB.

Closes #42
```

---

## Dicas Rápidas e Boas Práticas

1.  **Use o Imperativo:** Escreva a descrição como um comando.
    - **Certo:** `feat: adiciona cache para imagens`
    - **Errado:** `feat: adicionado cache para imagens`
2.  **Letras Minúsculas:** Inicie a descrição com letra minúscula.
3.  **Sem Ponto Final:** Não adicione ponto final na linha de descrição.
4.  **Explique o Porquê:** Use o corpo do commit para explicar **por que** a mudança foi necessária, não apenas **o que** mudou.
