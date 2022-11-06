import { useRef } from "react";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

export const Contato = () => {
  const refForm = useRef();

  function submitForm(e) {
    e.preventDefault();

    if (refForm.current.checkValidity()) {
      let obj = new Object();
      for (let index = 0; index < refForm.current.length; index++) {
        const id = refForm.current[index]?.id;
        const value = refForm.current[index]?.value;

        if (id === "botao") break;
        obj[id] = value;
      }

      console.log(obj);
    } else {
      refForm.current.classList.add("was-validated");
    }
  }

  return (
    <>
      <Menu paginaAtual={"Contato"} />
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <h2>Contato</h2>

          <p>Envie uma mensagem ou fale pelo whatsApp (55) 2222-2222</p>
        </div>

        <hr />

        <form
          className="row g-3 needs-validation"
          noValidate
          style={{
            paddingBottom: 20,
          }}
          onSubmit={(e) => submitForm(e)}
          ref={refForm}
        >
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu nome"
              id="nome"
              required
            />
            <div className="invalid-feedback">Por favor digite seu nome.</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu email"
              id="email"
              required
            />
            <div className="invalid-feedback">Por favor digite seu email.</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Decriçao
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu email"
              id="descricao"
              required
            />
            <div className="invalid-feedback">
              Por favor digite sua descriçao.
            </div>
          </div>

          <div className="col0-md-12">
            <button className="btn btn-primary" type="submit" id="botao">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
