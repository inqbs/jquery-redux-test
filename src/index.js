const component = () => {
  const element = document.createElement('div')

  element.id = 'app'
  element.textContent = ['Hello', 'webpack'].join(' ')

  return element
}

document.body.appendChild(component())
