## Iniciar o prisma

```
npx prisma init --datesource-provider SQLite
```

## Criar o banco de dados

```
npx prisma migrate dev
```

## Vizualizar o banco de dados

```
npx prisma studio
```

## NPM extensoes para gerar diagramas Entidade Relacionamento

```
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```

## Gerar diagrama Entidade Relacionamento

```
npx prisma-erd-generator
```
