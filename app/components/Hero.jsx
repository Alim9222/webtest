export default function Hero({ whatsappUrl = "#" }) {
  return (
    <section className="hero section">
      <div className="content">
        <h1>
          ВНЖ в Испании
          <br />
          с гарантиями
          <br />
          по договору
          <br />
          <em>и поэтапной оплатой</em>
        </h1>
        <div className="accent-line"></div>
        <p className="lead">
          Берём на себя стратегию, документы и сопровождение. Вы заранее
          понимаете этапы, стоимость и следующий шаг.
        </p>

        <div className="benefit-row">
          <article>
            <span className="icon">✓</span>
            <b>
              Гарантии
              <br />
              по договору
            </b>
          </article>
          <article>
            <span className="icon">↗</span>
            <b>
              Оплата
              <br />
              по этапам
            </b>
          </article>
          <article>
            <span className="icon">○</span>
            <b>
              Персональный
              <br />
              специалист
            </b>
          </article>
        </div>

        <a className="button primary" href="#contact">
          Записаться на консультацию <span>→</span>
        </a>
        <a className="button secondary" href={whatsappUrl}>
          Задать вопрос в WhatsApp
        </a>
        <p className="microcopy">
          Бесплатная предварительная оценка за 2 минуты
        </p>
      </div>
      <div className="hero-visual image-placeholder">
        <span>Вставить утверждённый визуал Валенсии</span>
      </div>
    </section>
  );
}
