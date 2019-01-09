console.log('Starting')

setTimeout(() => {
  console.log('TimeOut')
}, 0)


setTimeout(() => {
  console.log('TimeOut 2')
}, 0)

for (let i = 0; i < 10000003; i++) {
  console.log('Finish', i)
}
