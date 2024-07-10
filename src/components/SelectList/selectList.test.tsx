import { render, screen, fireEvent } from "@testing-library/react-native"

import { SelectList } from '@components/SelectList'

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 789, longitude: 487 }
    ]

    //Mock/simulação da função onPress
    const onPress = jest.fn();

    render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={onPress}
      />
    )

    //Outra possibilidade para usar
    //const selectedCity = screen.getByText('Campo', { exact: false })

    //getByText procura por um texto que seja igual dentro do componente
    const selectedCity = screen.getByText(/campo/i)
    fireEvent.press(selectedCity)

    //Verificar se está forma de verificar a função onPress sendo chamada está passando
    //expect(onPress).toHaveBeenCalledWith(data[1]);

    //Esta forma de testar a função onPress está deprecada(curso)
    expect(onPress).toBeCalledWith(data[1]);
  })

  it('not should be show options when data props is empty', () => {
    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={()=>{}}
      />
    )

    const options = screen.getByTestId('options')

    //Verificar se o componente tem filhos
    expect(options.children).toHaveLength(0)
  })
})