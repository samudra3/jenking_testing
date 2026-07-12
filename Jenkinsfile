pipeline{
  agent any
  parameters{
   choice(
     name: 'mode',
     choices: ['production','testing','deployment'],
     description:'choose the correct mode'
     )
    booleanParam(
      name: 'isTest',
      defaultValue: true
      )
  
  }
  environment{
    password = credentials('secret_id')
  }
  stages{
    stage('system-info'){
      when{
        expression{
          params.isTest
        }
      }
      steps{
        sh "exit 1"
      }
    }
  }
  post {
    success {
      echo 'pipeline finished successfully'
    }
    failure{
      echo 'pipeline failed'
    }
    always {
      echo 'cleaning the workspace'
    }
  }
}
