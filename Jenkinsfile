pipeline {
    //agent any  // Menjalankan pipeline pada agen manapun yang tersedia atau node atau vm 
    agent { label 'tencent_cloud_vps2_agent1' }
    environment {
        // Definisikan variabel lingkungan jika diperlukan
        // Misalnya untuk kredensial, server, dll.
        BRANCH_NAME = 'main'
    }
    stages {
        stage('Continuous_Checkout') {
            steps {
                // Checkout kode dari repositori
                git branch: "${env.BRANCH_NAME}", url: 'https://github.com/masterjowo/wdio-web-automation.git'
                sh 'pwd'
                sh'docker compose down --volumes --remove-orphans'
                sh'docker rmi allure_report_wdio_web_coun'
            }
        }
        stage('Continuous_Build') {
                    steps {
                        script {
                            sh'docker compose up --build -d'
                        }
                    }
                } 
                
        stage('Continuous_Test_Browser_Chrome ') {
            steps {
                        
                    sh'''
                    docker exec -t allure_report_wdio_web_coun sh -c "npx wdio run wdio.conf.js"
                    
                    '''
                    // docker exec -t allure_report_wdio_web_coun sh -c "npx wdio run wdio.conf.js"
                }
        }
    }
    post {
        success {
            // Kirim notifikasi ke Discord setelah build
            discordSend description: "Jenkins Pipeline Build", 
                        footer: "Pipeline berhasil! Proyek telah dibangun, diuji, dan dideploy.", 
                        // link: env.BUILD_URL, 
                        result: currentBuild.currentResult, // or   result: "#3498db",
                        thumbnail: "https://example.com/thumbnail.png",
                        webhookURL: "https://discord.com/api/webhooks/1306897325678923816/uIkmBEq4CNJWxNIZ3mzrVjswV4Hn8E90QA_-7iQvQ1GxuWXZmtquU6FeHzFsQdJ5fJ1R"
        }
        failure {
            echo 'Pipeline gagal. Periksa log untuk detail kesalahan.'
        }
        always {
            echo 'Pipeline selesai menjalankan semua tahap.'
        }
    }

//https://www.jenkins.io/doc/pipeline/steps/workflow-basic-steps/#pwd-determine-current-directory
    }
