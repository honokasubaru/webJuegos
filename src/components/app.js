import React from "react";
import Home from "../pages/home.js";
import tokenApi from "../services/api_service.js";
import CookieService from "../services/cookie_service.js";

class App extends React.Component {
  state = {
    data: undefined,
    error: null,
    loading: true,
  };

  componentDidMount() {
    if (CookieService.get_cookie("token_data")) {
      this.setState({ data: CookieService.get_cookie("token_data") });
    } else {
      this.fetchToken();
    }
  }

  fetchToken = async () => {
    try {
      const data = await tokenApi();
      this.setState({ loading: false, data: data });
      this.saveTokenData();
    } catch (err) {
      this.setState({ loading: false, error: err });
    }
  };

  saveTokenData = () => {
    const options = {
      path: "/",
      secure: true,
    };
    CookieService.set_cookie(
      "token_data",
      JSON.stringify(this.state.data),
      options
    );
  };

  render() {
    if (this.state.loading) return <div>LOADING</div>;
    if (this.state.error) return `Error: ${this.state.error}`;
    return <Home />;
  }
}

export default App;
