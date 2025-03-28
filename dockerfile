# Base image olarak Node.js'in resmi imajını kullanıyoruz
FROM node:20-alpine

# Çalışma dizinini belirliyoruz
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yüklüyoruz
RUN npm install

# Projenin geri kalan dosyalarını kopyalıyoruz
COPY . .

# Projeyi build ediyoruz
RUN npm run build

# Uygulamayı çalıştırıyoruz
EXPOSE 3000
CMD ["npm", "start"]