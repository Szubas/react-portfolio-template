import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PLSQL</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PHP</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
