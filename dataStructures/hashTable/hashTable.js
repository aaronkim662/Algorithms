const table = () => {
  const aTable = new Map()
  aTable.set('for', 121)
  console.log(aTable.get('for'))
  console.log(aTable)
  aTable.set('for', aTable.get('for') + 1)

  console.log(aTable)
}

table()