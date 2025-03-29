FROM node:20-alpine AS builder

WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yüklüyoruz
RUN npm install

# Projenin geri kalan dosyalarını kopyalıyoruz
COPY . .

# Projeyi build ediyoruz
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Public klasörünün izinlerini düzelt
RUN chmod -R 755 /app/public

# Uygulamayı çalıştır
EXPOSE 3000
CMD ["npm", "run", "dev"] 