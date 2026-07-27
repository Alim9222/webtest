"use client";

import { useEffect, useState } from "react";

export default function ContactSection({ formEndpoint = "" }) {
  const [status, setStatus] = useState("");
  const [hidden, setHidden] = useState({
    utm_source: "",
    utm_campaign: "",
    page_url: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHidden({
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      page_url: window.location.href,
    });
  }, []);

  const handleSubmit = (event) => {
    if (!formEndpoint) {
      event.preventDefault();
      setStatus("Форма готова к подключению CRM. Укажите FORM_ENDPOINT.");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <form
        className="contact-card"
        action={formEndpoint}
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2>
          Начните переезд в Испанию
          <br />с личной консультации
        </h2>
        <p className="lead">
          Оставьте контакты — специалист свяжется с вами в ближайшее время.
        </p>

        <div className="benefit-row form-benefits">
          <article>
            <span className="icon">◷</span>
            <b>
              Ответим
              <br />в течение 15 минут
            </b>
          </article>
          <article>
            <span className="icon">✓</span>
            <b>
              Полная
              <br />
              конфиденциальность
            </b>
          </article>
          <article>
            <span className="icon">○</span>
            <b>
              Личный
              <br />
              специалист
            </b>
          </article>
        </div>

        <label>
          <span>Ваше имя</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label>
          <span>Номер телефона</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          <span>Удобное время для звонка</span>
          <input
            name="call_time"
            type="text"
            placeholder="Например: сегодня после 18:00"
          />
        </label>

        <input
          type="hidden"
          name="utm_source"
          value={hidden.utm_source}
          readOnly
        />
        <input
          type="hidden"
          name="utm_campaign"
          value={hidden.utm_campaign}
          readOnly
        />
        <input type="hidden" name="page_url" value={hidden.page_url} readOnly />

        <button className="button primary form-submit" type="submit">
          Получить консультацию
        </button>
        <p className="privacy">
          Ваши данные строго конфиденциальны и не передаются третьим лицам.
        </p>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
