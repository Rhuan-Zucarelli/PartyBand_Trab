import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer
        style={{
          background: "#383838",
          paddingBottom: 15,
          paddingTop: 15,
        }}
      >
        <p
          className="text-center"
          style={{
            color: "#fff",
          }}
        >
          Desenvolvido por Rhuan Carlos Zucarelli - {new Date().getFullYear}
        </p>

        <div className="d-flex justify-content-center">
          <FaTwitter style={{ margin: 10 }} color="#fff" />
          <FaInstagram style={{ margin: 10 }} color="#fff" />
          <FaFacebook style={{ margin: 10 }} color="#fff" />
        </div>
      </footer>
    </>
  );
};
