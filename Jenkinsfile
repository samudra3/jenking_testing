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
