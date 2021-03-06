export async function ajax(props) {
  let { url, success } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => success(json))
    .catch((err) => {
      let message =
        err.statusText || "Ocurrio un error en la peticion a la API";
      document.getElementById("main").innerHTML = /*html*/ `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;
    });
}
