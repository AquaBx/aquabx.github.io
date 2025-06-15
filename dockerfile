FROM oven/bun:alpine AS bun

WORKDIR /app

COPY ./package*.json ./
RUN bun install
COPY . .
RUN bun run build

FROM golang:latest AS go
WORKDIR /app
COPY main.go ./
RUN go build -ldflags "-linkmode external -extldflags -static" main.go

FROM scratch
EXPOSE 3000
WORKDIR /app

COPY --from=go /app/main "./main"
COPY --from=bun /app/build "./public"

CMD ["./main"]