import { act, renderHook, waitFor } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext'

describe('Context: cityContext', () => {
  it('should be change selected city', async () => {
    // Usamos renderHook para renderizar o hook useCity()
    // O wrapper permite usar o Provider
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    // waitFor para aguardar o retorno de uma função assíncrona - handleChanceCity
    // act realiza uma ação (neste caso da atualização do estado de getStorageCity() - assíncrona)
    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    })))

    // city? porque pode ser nulo
    expect(result.current.city?.name).toBe('São Paulo')
  })
})