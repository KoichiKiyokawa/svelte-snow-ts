import App from './App.svelte'
import { expect } from 'chai'
import { render } from '@testing-library/svelte'

describe('<App>', () => {
  it('renders learn svelte link', () => {
    const { getByText } = render(App)
    const linkElement = getByText(/learn svelte/i)
    expect(document.body.contains(linkElement))
  })
})
