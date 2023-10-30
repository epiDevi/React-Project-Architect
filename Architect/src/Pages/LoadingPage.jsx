import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { LoadingContext } from "../Context/Context";
const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section className="frame">
      <div>
        <img src="../src/assets/img/frame2.png" alt="" />
        <h2 className="bold">Welcome to our site</h2>
      </div>
    </section>
  );
};

export default LoadingPage;
