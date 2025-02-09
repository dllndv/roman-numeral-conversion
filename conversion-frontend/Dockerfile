FROM denoland/deno:2.1.9

# The port that your application listens to.
EXPOSE 3000

WORKDIR /app

COPY package*.json ./
RUN deno install

COPY . .

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "dev"]
