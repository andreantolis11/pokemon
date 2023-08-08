module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transformIgnorePatterns: [
        "/node_modules/(?!axios).+\\.js$"
    ]
  };