import React from "react";
import "./styles.css";
import AmA_Logo from "../../assets/images/AmA_Logo.png";
import { FingersSection } from "./FingersSection";

export function AmaSection() {
  return (
    <div className="ama">
      <section className="ama-section">
        <div className="ama-section-wrapper container">
          <h3 className="ama-title">
            <em>
              Что такое АmA и почему эта надпись есть почти на каждой обложке?
            </em>
          </h3>
          <div className="ama-section-content">
            <div className="ama-text-block ama-main-text">
              <p className="ama-text">
                <img className="ama-logo circle" src={AmA_Logo}></img>
                История создания AmA берёт своё начало в далёком 2013 году.
                Холодной зимой, молодые Влад, Кирилл и Паша решили спрятаться от
                мороза в подъезде многоэтажного дома. На одной из трёх стен
                балкона, неизвестный поэт написал стих занимающий половину
                площади стены. И естественно ребята начали читать его. В конце
                выступления кто-то из них выкрикнул слово “амахасла”, как бы
                подытожив окончание своей части. Это было просто забавное слово,
                которое в будущем трансформировалось в всем известное AmA.
                <br />
                <br />
                <p className="fingers-second-text">
                  В те годы мы часто снимали разные видео с наших гуляний и все
                  они выходили под общим именем, уже догадываешься под каким?
                  <br />
                  После съёмок перовой короткометражки “Вопреки запретам” мы уже
                  точно знали, как “клеймить” видео-контент. Так у AmA появилось
                  подкатегория AmA_Film. Спустя время таких подкатегорий стало
                  больше, одна из них и самая популярная на сегодняшний день это
                  Lil_Guys.
                </p>
              </p>
            </div>
            <div className="ama-text-block ama-ul-text">
              <ul>
                Тут представлены все подразделения AmA:
                <li>
                  AmA_Picture. В него входят картины, написанные Кириллом,
                  Павлом и другими.
                </li>
                <li>
                  Панк панк только панк. Одноименный музыкальный проект
                  Владислава и Кирилла.
                </li>
                <li>Самостоятельный проект Дмитрия Сосновского</li>
                <li>AmA_Film</li>
                <li>Lil Guys</li>
              </ul>
            </div>
          </div>
          <FingersSection />
        </div>
      </section>
    </div>
  );
}
