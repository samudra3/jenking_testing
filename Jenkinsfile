pipeline{
      agent any
      environment{
            NAME = 'sahilsingh'
            ROLL_NO = '2237400'
      stages{
            stage('system-info'){
                  steps{
                        echo "checking system-info for the user ${NAME} and the roll no ${ROLL_NO}"
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
