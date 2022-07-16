import React from "react";
import { InfoBlock } from "./InfoBlock";
import "./styles.css";
import info1 from "../../assets/images/info1.jpg";
import info2 from "../../assets/images/info2.jpg";
import info3 from "../../assets/images/info3.jpg";
import info4 from "../../assets/images/info4.jpg";

export function AboutSection() {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-section-wrapper container">
          <div className="info-panel">
            <InfoBlock
              type={true}
              text={`Идея сделать реп-группу появилась в 2016 году. По счастливому стечению обстоятельств, Влад и Рома оказались в Речице наедине с микрофоном. Расстроенные тем, что Дима не смог присоединится к ним, парни решили в шутку записать на него “Дисс”. Попутно придумывая для себя псевдонимы и название для группы. `}
              img={info1}
            />
            <InfoBlock
              type={false}
              text={`Многие современные реперы добавляют к своему имени приставку LIL символизируя этим новое поколение. Так сделали и мы, просто в шутку или  чтобы не заморачиваться. Все наши псевдонимы, в последствии, были придуманы по похожему принципу. И поэтому, в каждом из имён можно увидеть сходство с никнеймами “популярных” артистов. `}
              img={info2}
            />
            <InfoBlock
              type={true}
              text={`Дисс обрёл популярность в наших кругах, переслушивая и включая его друзьям мы подумали: “А почему бы не повторить?” Так и началась история…`}
              img={info3}
            />
            <InfoBlock
              type={false}
              text={`Lil_Guys не позиционирует себя как первооткрывателей или новаторов. То, что мы делаем уже делали до нас и будут делать после. Наша музыка — это не коммерческий продукт. Мы делаем её для себя и конечно же нам приятно, что она нравится и тебе.`}
              img={info4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
