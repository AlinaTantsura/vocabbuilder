import Cookies from 'js-cookie';

export const loginUser = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch("api/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })
        

      if (response.ok) {
        const data = await response.json();
        // localStorage.setItem('token', data.user.token)
        Cookies.set('token', data.user.token);
        return { ok: response.ok, data };
      }
      else {
        const message = await response.text()
        return { ok: response.ok, status: response.status, message }
      }
    } catch (error) {
        return error;
    }
}