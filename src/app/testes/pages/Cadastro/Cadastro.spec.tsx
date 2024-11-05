import { render, screen } from "@testing-library/react";
import Cadastro from "@/app/cadastro/page";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import nextRouterMock from "next-router-mock";


jest.mock("next/navigation", () => ({
  useRouter: () => nextRouterMock}));

const server = setupServer(
  http.get(`https://demo7444709.mockable.io/ecoVouhcer/usuarios/`, () => {
    return Response.json(
      ({
        Cadastro: [
          {
            cep: "180500000",
            cnpj: "",
            complemento: "",
            confirmarSenha: "123",
            cpf: "58910758066",
            dataNascimento: "2020-02-02",
            email: "joao.pedro@teste.com.br",
            enderecoCompleto: "Av",
            nome: "Joao",
            nomeEmpresa: "",
            numero: "1000",
            senha: "123",
            telefone: "(15) 98888-8888",
            tipoCliente: "usuario"
          }
        ]
      })
    );
  })
);

describe("Cadastro List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("ecoVouhcer/usuarios/");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it("should render cadastro list with all fields", async () => {
    render(<Cadastro />);

    // Verifica se a lista está sendo renderizada
    screen.getAllByTestId("cadastroList");

    // Verifica os campos do cadastro para cada item
    await screen.findByText(/180500000/i);
    await screen.findByText(/58910758066/i);
    await screen.findByText(/2020-02-02/i);
    await screen.findByText(/joao.pedro@teste.com.br/i);
    await screen.findByText(/Joao/i);
    await screen.findByText(/(15) 98888-8888/i);
    await screen.findByText(/usuario/i);
    screen.logTestingPlaygroundURL();
  });
});
