import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Footer() {
  var year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        Hecho por Sonia{" "}
        <FavoriteBorderIcon style={{ fontSize: "1.5em", color: "#8f26a1" }} />{" "}
        Copyright &copy; {year}
      </p>
    </div>
  );
}

export default Footer;
