pipeline{
      agent any
      environment{
            NAME = 'sahilsingh'
            ROLL_NO = '2237400'
      }
      stages{
            stage('system-info'){
                   steps{
                        pipeline{
      agent any
      parameters{
            choice(
                  name: 'ENVIRONMENT',
                  choices:['development','production']
            )
            booleanParam(
                  name:'RUN_TESTS',
                  defaultValue: true
            )
      }
      stages{
            stage('build'){
                  steps{
                       echo 'building ...'
                  }
            }

             stage('test'){
                  when{
                        expression{
                              params.RUN_TESTS
                        }
                  }
                  steps{
                        echo 'testing files'
                        
                  }
            }

             stage('deployment'){
                  steps{
                        echo "deployment for ${params.ENVIRONMENT}"
                        
                  }
            }

      }
}
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
