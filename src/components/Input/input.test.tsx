import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input"

describe("Component: Input", () => {
  it("should  be render without activity indicator if isLoading prop is undefined", () => {
    //verificar o conteúdo que está sendo renderizado no seu componente
    //const { debug } =  render(<Input />);
    //debug();

    render(<Input />)

    //Usar o testID para recuperar/buscar elementos dentro do teste
    //Com query não retorna uma excessão e caso não encontre retorna nulo
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();
  })

  it("should  be render with activity indicator if isLoading prop is true", () => {
    render(<Input isLoading />)

    //Com get retorna uma execessão caso não encontre e, se assim for o teste irá falhar
    const activityIndicator = screen.getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  })
})