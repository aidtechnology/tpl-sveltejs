// Sample Typescript module
class Sample {
  prefix: string
  useConsole: boolean

  constructor() {
    this.prefix = 'sample typescript module: '
    this.useConsole = true
  }

  message(msg: string): string {
    const response: string = this.prefix + msg
    if (this.useConsole) {
      console.log(response)
    }
    return response
  }
}

export default Sample
