let accessToken;
const clientID = "b8927677613040689da5eb7c6eb6ea9c";
const redirectUrl = "http://localhost:3000";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      return accessToken;
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
      window.location = redirect;
    }
  },

  search(term) {
    accessToken = Spotify.getAccessToken();
    if (!accessToken) {
      // Handle case where access token is not available
      return Promise.reject("Access token not available");
    }
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Spotify API Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks || !jsonResponse.tracks.items) {
          console.log("No tracks found in the response:", jsonResponse);
          return [];
        }
        return jsonResponse.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      })
      .catch((error) => {
        console.error("Error during Spotify search", error);
      });
  },
};

export { Spotify };
