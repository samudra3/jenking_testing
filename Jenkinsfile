pipeline{
  agent any
  parameters{
    string(
      name: 'mode',
      defaultValue: 'testing',
      description: 'choose the mode of the build'
      )
  }
  stages{
    stage('system-info'){
      steps{
        echo "the mode is ${params.mode}"
      }
    }
  }
}
