FROM node:20
RUN mkdir -p /app/project
COPY . /app/project
CMD ["node","/app/project/server.js"]
