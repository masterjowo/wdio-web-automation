FROM node:20-bullseye


# Install dependencies
RUN apt-get update && apt-get install -y \
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
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Add Google Chrome repo
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" \
    > /etc/apt/sources.list.d/google-chrome.list

# Install Google Chrome
RUN apt-get update && apt-get install -y google-chrome-stable

# Set environment variables for headless Chrome
ENV CHROME_BIN=/usr/bin/google-chrome
ENV DISPLAY=:99

# Download and install Chromedriver
RUN CHROME_VERSION=$(google-chrome --version | grep -oP '\d+\.\d+\.\d+\.\d+') && \
    echo "Detected Chrome version: $CHROME_VERSION" && \
    wget -O /tmp/chromedriver.zip "https://storage.googleapis.com/chrome-for-testing-public/${CHROME_VERSION}/linux64/chromedriver-linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /tmp/ && \
    mv /tmp/chromedriver-linux64/chromedriver /usr/local/bin/chromedriver && \
    chmod +x /usr/local/bin/chromedriver && \
    rm -rf /tmp/chromedriver*

RUN apt-get update && apt-get install -y default-jre
#Atau set JAVA_HOME jika kamu install manual:
#ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64 

WORKDIR /app
COPY . /app
# install libtesseract-ocr and tesseract-ocr-ind
RUN apt-get update && apt-get install -y tesseract-ocr
RUN apt-get install -y libtesseract-dev
RUN wget https://github.com/tesseract-ocr/tessdata/raw/main/ind.traineddata -P /usr/share/tesseract-ocr/4.00/tessdata/
RUN npm install
COPY . /app
CMD ["node","server.js"]
EXPOSE 3000