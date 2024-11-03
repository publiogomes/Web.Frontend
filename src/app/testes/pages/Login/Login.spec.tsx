import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Login from "@/app/login/page";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import { env } from "@/config/env";


jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.post(`https://demo7444709.mockable.io/login`, () => {
    return Response.json({
        response: {
            message: "Login efetuado com sucesso",
            error: false
        }
    });
  })
);

describe("Login List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/Login");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it("should render Login list with all fields", async () => {
    render(<Login/>);

    // Verifica se a lista de pedidos está sendo renderizada
    screen.getAllByTestId("LonginList");

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