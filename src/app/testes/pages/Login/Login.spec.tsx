import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Login from "@/app/login/page";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import nextRouterMock from "next-router-mock";



jest.mock("next/navigation", () => ({
useRouter: () => nextRouterMock
}));

const server = setupServer(
  http.post(`https://demo7444709.mockable.io/ecoVouhcer/login`, () => {
    return Response.json({
        response: {
          message: "Login efetuado com sucesso",
          error: false
        }
      })
    ;
  })
);

describe("Login Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("ecoVouhcer/login");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it("should render Login page with success message", async () => {
    render(<Login />);

    // Verifica se a mensagem de sucesso está sendo renderizada
    await screen.findByText("Login efetuado com sucesso");

    screen.logTestingPlaygroundURL();
  });
});
