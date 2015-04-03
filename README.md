# Hello Express!

Just a stupid express.js hello world sample I'm using for testing server installations

# Running with Docker

```sh
docker build -t joerx/express-hello-src .
docker run -it -p 3000:3000 --rm joerx/express-hello-src
```

# Running Tests via Docker

```sh
docker build -t joerx/express-hello-test spec/
docker run -it --rm joerx/express-hello-spec
```
