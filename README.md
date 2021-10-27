## 概要
TypeScriptのバッチ実行環境

## インフラ

AWS CopilotでAWS ECS Fargateを利用


## 事前準備

direnv, assume-roleを利用

```
brew install direnv
brew install remind101/formulae/assume-role
```


.envを用意

```
cp .env.template .env
```

## 実行

```
yarn build
yarn summary
```

## デプロイ

```
# 初期化
copilot init

# リソース構築
copilot env init --name production --region ap-northeast-1 --app awesome-app

# アプリデプロイ
copilot deploy --env production
```
