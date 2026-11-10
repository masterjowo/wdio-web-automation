FROM node:20-bookworm

# Set working directory awal untuk instalasi sistem
WORKDIR /app

# 1. Install semua dependensi sistem, Chrome, Java, dan Tesseract dalam satu RUN layer untuk efisiensi
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget \
    curl \
    gnupg \
    unzip \
    fontconfig \
    ca-certificates \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    libxrandr2 \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libdbus-1-3 \
    libgbm1 \
    libgtk-3-0 \
    xdg-utils \
    xvfb \
    default-jre \
    tesseract-ocr \
    libtesseract-dev \
&& rm -rf /var/lib/apt/lists/*

# 2. Add Google Chrome repository & GPG key (Bookworm compatible)
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /etc/apt/trusted.gpg.d/google-chrome.gpg && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y --no-install-recommends google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# 3. Download dan Install ChromeDriver secara otomatis berdasarkan versi Chrome
RUN CHROME_MAJOR_VERSION=$(google-chrome --version | grep -oP '\d+' | head -1) && \
    CHROME_DRIVER_VERSION=$(curl -s "https://googlechromelabs.github.io/chrome-for-testing/LATEST_RELEASE_${CHROME_MAJOR_VERSION}") && \
    echo "Detected Chrome version: ${CHROME_MAJOR_VERSION}, using ChromeDriver version: ${CHROME_DRIVER_VERSION}" && \
    wget -O /tmp/chromedriver.zip "https://storage.googleapis.com/chrome-for-testing-public/${CHROME_DRIVER_VERSION}/linux64/chromedriver-linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /tmp/ && \
    mv /tmp/chromedriver-linux64/chromedriver /usr/local/bin/chromedriver && \
    chmod +x /usr/local/bin/chromedriver && \
    rm -rf /tmp/chromedriver*

# 4. Download Tesseract Language Data (Bahasa Indonesia)
RUN mkdir -p /usr/share/tesseract-ocr/4.00/tessdata && \
    wget -O /usr/share/tesseract-ocr/4.00/tessdata/ind.traineddata https://github.com/tesseract-ocr/tessdata/raw/main/ind.traineddata

# Set environment variables for headless Chrome & Java
ENV CHROME_BIN=/usr/bin/google-chrome
ENV DISPLAY=:99
# ENV JAVA_HOME=/usr/lib/jvm/default-java

# Copy source code dan install dependencies Node.js
COPY . /app
RUN npm install

# Expose port dan jalankan aplikasi
EXPOSE 3000
CMD ["node", "server.js"]