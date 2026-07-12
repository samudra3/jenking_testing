pipeline{
  agent any
  parameters{
   choice(
     name: 'mode',
     choices: ['production','testing','deployment'],
     description:'choose the correct mode'
     )
    booleanParam(
      name: 'isTest'
      defaultValue: true
      )
  
  }
  stages{
    stage('system-info'){
      when{
        expression{
          params.isTest
        }
      }
      steps{
        echo "the mode is ${params.mode}"
      }
    }
  }
}
