import "@testing-library/jest-dom/extend-expect"

// mocking the environment variables
jest.mock("./src/config/keys.ts", () => ({
  default: () => ({
    serverAPI: {
      url: "mockURL",
    },
  }),
}))
