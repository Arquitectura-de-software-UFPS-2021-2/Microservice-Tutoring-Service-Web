import axios from "axios";
import Swal from "sweetalert2";

export const listarTemas = () => {
  let temas = axios
    .get(`http://34.199.225.252:8080/tutoriaServicio/tema/list`)
    .then((res) => {
      return res.data;
    });
  const finaltema = async () => {
    const a = await temas;
    return a;
  };
};
export const guardarTema = (tema) => {
  axios
    .post(`http://34.199.225.252:8080/tutoriaServicio/tema/save`, tema)
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "Tema guardado con exito!",
        text: "Click para confirmar!",
        icon: "success",
        confirmButtonColor: "#931B2A",
      }).then(() => {
        window.location.reload();
      });
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        title: "Ocurrió un error :(",
        text: "Click para salir.",
        icon: "error",
        confirmButtonColor: "#931B2A",
      });
    });
};
export const guardarCategoria = (categoria) => {
  axios
    .post(
      `http://34.199.225.252:8080/tutoriaServicio/categoria/save`,
      categoria
    )
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "Categoria guardado con exito!",
        text: "Click para confirmar!",
        icon: "success",
        confirmButtonColor: "#931B2A",
      }).then(() => {
        window.location.reload();
      });
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        title: "Ocurrió un error :(",
        text: "Click para salir.",
        icon: "error",
        confirmButtonColor: "#931B2A",
      });
    });
};

export const guardarTutoria = (tutoria) => {
  axios
    .post(`http://34.199.225.252:8080/tutoriaServicio/tutoria/save`, tutoria, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "Tutoria guardada con exito!",
        text: "Click para confirmar!",
        icon: "success",
        confirmButtonColor: "#931B2A",
      })
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        title: "Ocurrió un error :(",
        text: "Click para salir.",
        icon: "error",
        confirmButtonColor: "#931B2A",
      });
    });
};

export const iniciarSesion = ()=>{
  axios.post(`http://18.235.152.56/login`, {student_code : "1151698",
  password : "qqqq"} ).then((res)=>{
    console.log(res.data.api_token)
    localStorage.setItem('token',res.data.api_token )
    localStorage.setItem('CODESTUDENT',1151698)
  }).catch((e)=>{
    console.log(e);
      Swal.fire({
        title: "Ocurrió un error :(",
        text: "Click para salir.",
        icon: "error",
        confirmButtonColor: "#931B2A",
      });
  })
}
