const greeting = (message) => {
  return (name) => {
    console.log(message + ' ' + name)
  }
}

// let hello = greeting('Hello')

// hello('Life')

const counter = (step = 1) => {
  let count = 0
  return () => {
    count = count + step
    return count
  }
}


// let newCount = counter(1)
// console.log(newCount())
// console.log(newCount())
// console.log(newCount())

const { performance } = require('perf_hooks')

const funcInvoke = () => {

  let count = 0
  return () => {
    if(count === 0){
      console.log('hello world')
      count++
    }else if(count > 0){
      setTimeout(() => {
        console.log('hello from timeout')
      }, 500)
    }

  }
}
// const endTime = performance.now()
const magicFunction = funcInvoke()

const startTime = performance.now()

magicFunction()
magicFunction()
magicFunction()
magicFunction()
magicFunction()

// console.log(endTime - startTime, 'milliseconds')