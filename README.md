基礎から学ぶReact/React Hooks実践入門の書籍をもとにTodoアプリ作成

## ディレクトリ構成
- apis/
    - todos.js モックサーバと通信するファイル
- components/
    - App.js
    - TodoAdd.js
    - TodoItem.js
    - TodoList.js
    - TodoTitle.js
- hooks/
    - useTodo.js TODOの状態を管理するカスタムフック
- index.js

## モックサーバ
- [JSON server](https://www.npmjs.com/package/json-server)
- アプリディレクトリと同じ階層にdb.jsonを作成する
```
{
  "todos": [
    {
      "id": 1,
      "content": "Create React app をインストールする",
      "done": true
    },
    {
      "id": 2,
      "content": "JSON Server仮のAPIを作成する",
      "done": true
    },
    {
      "id": 3,
      "content": "Chakra UIをインストールする",
      "done": false
    },
  ]
}
```
- url `http://localhost:3100/todos`
- サーバ起動コマンド
```
npx json-server --watch db.json --port 3100
```

## 便利な外部ライブラリ
- axios : http通信
- ulid : ソート可能なランダムID生成
```
import {ulid} from 'ulid'
ulid() // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```
- Chakra UI : カスタマイズ可能なReact UIコンポーネントライブラリ
    - [公式サイト](https://chakra-ui.com)
    - [Chakra UI icons](https://chakra-ui.com/docs/media-and-icons/icon)

## バージョン
node: v16.13.2
```
npm install -g yarn
yarn start
```
