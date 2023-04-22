
# Why So Series | V2

![logo](https://user-images.githubusercontent.com/1637621/233794695-7a5c4105-6bfd-4b54-9e27-975847241e48.png)

## Run in browser

```
npm i
npm run serve
```

## Docker
```
docker build -t esvi/wss .
docker run --rm -p 8080:8080 esvi/wss
```

### OR Docker compose
```
docker compose build
docker compose up
```

#### Specs
- Vue3 + TypeScript
- Pinia
- Docker
- API + Axios ([MazeTv](https://www.tvmaze.com/api))

#### TODO
- Testing (Jest)
- Styling
