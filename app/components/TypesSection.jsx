export default function TypesSection() {
  return (
    <section className="section types-section">
      <div className="content">
        <p className="eyebrow">Основные варианты</p>
        <h2>
          Виды ВНЖ
          <br />в Испании
        </h2>
        <div className="accent-line"></div>
        <p className="lead">
          Подберём подходящий вариант под ваш доход, формат работы и цели
          переезда.
        </p>

        <div className="permit-hero permit-placeholder">
          Крупный визуал карточки ВНЖ
        </div>

        <div className="cards two-columns">
          <article className="card">
            <span className="line-icon">◎</span>
            <h3>Цифровой кочевник</h3>
            <p>Для удалённой работы и зарубежного дохода.</p>
          </article>
          <article className="card">
            <span className="line-icon">✓</span>
            <h3>Без права на работу</h3>
            <p>Для финансово независимых заявителей.</p>
          </article>
          <article className="card">
            <span className="line-icon">▣</span>
            <h3>Для предпринимателей</h3>
            <p>Для бизнеса и запуска проекта.</p>
          </article>
          <article className="card">
            <span className="line-icon">👥</span>
            <h3>Семейный ВНЖ</h3>
            <p>Для переезда с супругом и детьми.</p>
          </article>
        </div>

        <div className="info-strip">
          Также возможны: по трудоустройству, студенческий и другие основания.
        </div>
        <a className="button primary" href="#contact">
          Записаться на консультацию <span>→</span>
        </a>
      </div>
    </section>
  );
}
