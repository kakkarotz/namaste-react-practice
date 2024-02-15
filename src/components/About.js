import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react course practice</h2>
      {/* <User name={"Kunal Pandey function"} /> */}
      <UserClass name={"Kunal Pandey class"} />
    </div>
  );
};

export default About;
