import Cookie from "universal-cookie";

const cookie = new Cookie();

class CookieService {
  get_cookie = (key) => {
    cookie.get(key);
  };

  set_cookie = (key, value, options) => {
    cookie.set(key, value, options);
  };

  remove_cookie = (key) => {
    cookie.remove(key);
  };
}

export default new CookieService();
