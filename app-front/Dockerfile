FROM node:18

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . /app

## wait-for-it.sh 복사
#COPY wait-for-it.sh /usr/local/bin/wait-for-it

## wait-for-it에 실행 권한 부여
#RUN chmod +x /usr/local/bin/wait-for-it

#CMD ["wait-for-it", "backend:8000", "--", "npm", "run", "dev"]
CMD ["npm", "run", "dev"]
