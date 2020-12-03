/*const client_id = "8p4z7il1ybcl3749yt1g0irrr6fez4";
const client_secret= "hbqykl3pd2huw559f55totmo6ererf";
*/

async function tokenApi() {
  const token_url = "https://id.twitch.tv/oauth2/token";
  const options = {};
  const client_id = "client_id=8p4z7il1ybcl3749yt1g0irrr6fez4";
  const client_secret = "client_secret=hbqykl3pd2huw559f55totmo6ererf";
  const grant_type = "grant_type=client_credentials";
  options.method = "POST";

  const response = await fetch(
    `${token_url}?${client_id}&${client_secret}&${grant_type}`,
    options
  );
  const data = await response.json();

  return data;
}

/*
//PROXY MIDDLEWAR
const access = (token) => {
  fetch("/games", {
    method: "POST",
    headers: new Headers({
      //"Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
      credentials: "include",
      Accept: "application/json",
      "Client-ID": "8p4z7il1ybcl3749yt1g0irrr6fez4",
      Authorization: "Bearer qsmuxuxj2lq5gl4xs0j0iw056cpm2z", //`Bearer ${token}`,
    }),
    body: "fields name; limit 10;",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
access();
*/

export default tokenApi;
/*
fetch("/games/covers", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "text/plain",
        credentials: "include",
        Accept: "application/json",
        "Client-ID": "8p4z7il1ybcl3749yt1g0irrr6fez4",
        Authorization: "Bearer qsmuxuxj2lq5gl4xs0j0iw056cpm2z",
      }),
      body: "fields  image_id; width; limit 10;",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      
      .catch((err) => {});
*/
