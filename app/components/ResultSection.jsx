export default function ResultSection() {
  return (
    <section className="section result-section">
      <div className="content">
        <p className="eyebrow">Ваш результат</p>
        <h2>
          Не просто ВНЖ.
          <br />
          Возможность жить в Испании
          <br />
          на своих условиях
        </h2>
        <div className="accent-line"></div>
        <p className="lead">
          Переехать вместе с семьёй, сохранить привычный доход и спокойно
          строить жизнь в Испании на законных основаниях.
        </p>

        <div className="cards two-columns">
          <article className="card">
            <span className="line-icon">✓</span>
            <h3>
              Жить в Испании
              <br />
              легально
            </h3>
            <p>Без визовой неопределённости и ограничений по срокам.</p>
          </article>
          <article className="card">
            <span className="line-icon">👥</span>
            <h3>
              Переехать вместе
              <br />с семьёй
            </h3>
            <p>Оформить статус для супруга и детей.</p>
          </article>
          <article className="card">
            <span className="line-icon">⌨</span>
            <h3>Сохранить доход</h3>
            <p>Продолжать удалённую работу или развивать свой проект.</p>
          </article>
          <article className="card">
            <span className="line-icon">□</span>
            <h3>Планировать будущее</h3>
            <p>Создать основу для долгосрочной жизни в Испании.</p>
          </article>
        </div>

        <div className="result-strip">
          <p>
            ВНЖ — это основа для спокойной жизни, работы и переезда в Испанию
            без хаоса и неопределённости.
          </p>
          <div className="permit-placeholder">Карточка ВНЖ</div>
        </div>
      </div>
    </section>
  );
}
