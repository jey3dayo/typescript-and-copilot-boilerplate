FROM node:16 as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

# ------------------
FROM node:16-alpine as release

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production
COPY --from=builder /app/build ./build
COPY . .

EXPOSE 3000
CMD ["yarn", "summary"]
