# 🚀 Guia de Publicação: EcoTyres no Homehost

Como o projeto é um aplicativo React construído sobre o Vite, ele gera um pacote de arquivos estáticos (HTML, CSS e JS) de alta performance após o build. Esses arquivos podem ser hospedados facilmente em qualquer servidor compartilhado, como a **Homehost**.

Siga o passo a passo abaixo para publicar o site:

---

## 📦 Passo 1: Gerar os Arquivos de Produção (Build)

1. No terminal do seu projeto, execute o comando de build (que já testamos e está funcionando sem erros):
   ```powershell
   npm run build
   ```
2. Este comando criará uma pasta chamada **`dist`** na raiz do projeto.
3. Dentro da pasta `dist`, você encontrará:
   *   `index.html` (o arquivo principal)
   *   `assets/` (pasta contendo o JavaScript e CSS otimizados)

---

## 🌐 Passo 2: Acessar o Painel da Homehost (cPanel)

1. Acesse o painel de controle da sua conta Homehost (geralmente via `seu-dominio.com.br/cpanel` ou pelo link fornecido no e-mail de ativação).
2. Faça login com suas credenciais de usuário e senha.
3. Localize e clique na ferramenta **Gerenciador de Arquivos** (File Manager).

---

## 📤 Passo 3: Enviar os Arquivos do Site

1. No Gerenciador de Arquivos, navegue até a pasta **`public_html`** (este é o diretório raiz do seu site).
   *   *Nota:* Se houver arquivos padrão da Homehost lá dentro (como um `index.php` ou `default.html` padrão), você pode excluí-los.
2. Compacte o **conteúdo** da pasta local `dist` em um arquivo `.zip` (atenção: compacte os arquivos *dentro* da pasta `dist`, e não a pasta `dist` em si).
3. No painel do Gerenciador de Arquivos cPanel, clique em **Carregar** (Upload) e selecione o arquivo `.zip` criado.
4. Após o término do envio, clique com o botão direito no arquivo `.zip` no cPanel e selecione **Extrair** (Extract).
5. Certifique-se de que os arquivos `index.html` e a pasta `assets` estejam diretamente na raiz de `public_html`.

---

## 🛠️ Passo 4: Configurar Rotas Amigáveis (SPA .htaccess)

Como o React gerencia as rotas no lado do cliente (Single Page Application), caso o site evolua para ter múltiplas rotas (ex: `/commercial`, `/materials`) e o usuário atualize a página diretamente no navegador, o servidor da Homehost tentará buscar uma pasta real e retornará um erro **404 Not Found**.

Para evitar isso:
1. No **Gerenciador de Arquivos** do cPanel, clique em **Configurações** (no canto superior direito) e marque a opção **Mostrar arquivos ocultos (dotfiles)**. Clique em Salvar.
2. Se já existir um arquivo chamado **`.htaccess`** na pasta `public_html`, clique em editar. Se não existir, clique em **Novo Arquivo** (+ File) e crie um com o nome exato `.htaccess`.
3. Insira o seguinte código dentro do arquivo `.htaccess` e salve:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Isso garante que qualquer rota digitada no navegador seja direcionada ao `index.html`, permitindo que o React gerencie a exibição interna corretamente.

---

## ✅ Passo 5: Testar a Publicação

Acesse seu domínio (ex: `www.seu-dominio.com.br`) no navegador para verificar se a página carrega corretamente em ambiente de produção da Homehost!
