# Jorge Diest (IFCD02010 | UF1846)

# Imágen base de NODEJs (versión 19)
FROM node:19

# Directorio de trabajo de la aplicación
WORKDIR /app

# Copia de los archivos package de la aplicación
COPY package*.json ./

# Acción del node package manager (npm)
RUN npm install

# Copia de los archivos del directorio src a hacia el directorio app (equivalente a COPY /src /app/ )
COPY . .

# CMD para activar la app
CMD ["npm" , "start"]