pipeline{
      agent any
      stages{
            stage('system-info'){
                  steps{
                        echo 'checking system-info'
                        sh '''
                           pwd
                           whoami
                           '''
                  }
            }

             stage('files'){
                  steps{
                        echo 'checking files'
                        sh '''
                           ls -la
                           '''
                  }
            }

             stage('date'){
                  steps{
                        echo 'checking date'
                        sh '''
                           date
                           '''
                  }
            }

      }
}
