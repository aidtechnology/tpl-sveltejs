import { render } from '@testing-library/svelte'
import { describe, expect } from '@jest/globals'
import App from 'App.svelte'

describe('App', () => {
  test('Should render correctly', () => {
    const { container } = render(App, { name: 'testing' })
    expect(container).toBeDefined()
  })
})
