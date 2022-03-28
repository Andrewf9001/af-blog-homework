import ImageContainer from "../body/ImageContainer";
import HachiRoku from "../../static/hachiroku.jpeg";

function ContentHeader() {
  return (
    <div className="content-header-wrapper">
      <ImageContainer image={HachiRoku} />

      <h1>Toyota Trueno</h1>

      <h2>AE86</h2>
    </div>
  );
}

export default ContentHeader;
