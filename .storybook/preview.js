
import '../styles/globals.css';

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/
    }
  }
};

export {
  parameters
};