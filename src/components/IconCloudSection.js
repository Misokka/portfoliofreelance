import React from "react";
import IconCloud from "./InteractiveIconCloud";

const iconSlugs = [
"javascript",
  "typescript",
  "react",
  "nextdotjs",
  "gatsby",
  "graphql",
  "nodedotjs",
  "express",
  "docker",
  "git",
  "github",
  "gitlab",
  "figma",
  "tailwindcss",
  "sass",
  "postgresql",
  "mysql",
  "vuejs",
  "reactjs",
  "html",
  "css",
];

const IconCloudSection = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "50px" }}>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </section>
  );
};

export default IconCloudSection;
