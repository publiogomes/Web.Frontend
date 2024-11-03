import { render, screen } from "@testing-library/react";
import Cadastro from "@/app/cadastro/page";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import { env } from "@/config/env";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.get(`https://demo7444709.mockable.io/cadastro`, () => {
    return Response.json({
    Cadastro: [{
      id: 1,
      data: "2024-09-15",
      cpf: "45678901234",
      forma_pagamento: "prazo",
      quantidade_itens: 4,
      valor_total: 120.00
    }
    ]
    });
  })
);

describe("Cadastro List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/Cadastro");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it("should render cadastro list with all fields", async () => {
    render(<Cadastro />);

    // Verifica se a lista de pedidos está sendo renderizada
    screen.getAllByTestId("cadastroList");

    // Verifica os campos do pedido para cada item
    await screen.findByRole("cell", {
      name: /2024-09-15/i,
    });
    await screen.findByRole("cell", {
      name: /456\.789\.012-34/i,   
    });
    await screen.findByRole("cell", {
      name: /Prazo/i,
    });
    await screen.findByRole("cell", {
      name: /4/i,
    });
    await screen.findByRole("cell", {
      name: /120.00/i,
    });
    screen.logTestingPlaygroundURL();
  });
});