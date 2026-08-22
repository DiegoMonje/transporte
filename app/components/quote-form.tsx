"use client";

import { FormEvent, useState } from "react";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); event.currentTarget.reset(); }
  if (sent) return <div className="form-success" role="status"><span aria-hidden="true">✓</span><div><h2>Solicitud recibida</h2><p>Contactaremos para confirmar disponibilidad y precio.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Enviar otra solicitud →</button></div></div>;
  return (
    <form className={`quote-form ${compact ? "quote-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Empresa<input name="empresa" autoComplete="organization" required /></label><label>Nombre<input name="nombre" autoComplete="name" required /></label>
        <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Lugar de recogida<input name="recogida" required placeholder="Localidad o dirección" /></label><label>Lugar de entrega<input name="entrega" required placeholder="Localidad o dirección" /></label>
        <label>Fecha<input name="fecha" type="date" required /></label><label>Hora aproximada<input name="hora" type="time" /></label>
        <label className="span-2">Tipo de mercancía<input name="mercancia" required placeholder="Palés, piezas, materiales, maquinaria…" /></label>
        <label>Número de palés / bultos<input name="bultos" inputMode="numeric" /></label><label>Peso aproximado<input name="peso" placeholder="Ej. 450 kg" /></label>
        <label className="span-2">Medidas aproximadas<input name="medidas" placeholder="Largo × ancho × alto, si se conoce" /></label>
        <fieldset className="span-2 radio-field"><legend>¿Es urgente?</legend><label><input type="radio" name="urgente" value="si" required /> Sí</label><label><input type="radio" name="urgente" value="no" /> No</label></fieldset>
        <label className="span-2">Observaciones<textarea name="observaciones" rows={compact ? 3 : 5} placeholder="Accesos, horario, necesidades especiales…" /></label>
      </div>
      <button className="button button-primary button-wide" type="submit">Solicitar precio <span aria-hidden="true">↗</span></button>
      <p className="form-disclaimer">Al enviar aceptas que usemos tus datos para responder a esta solicitud. Para servicios urgentes, utiliza el contacto directo.</p>
    </form>
  );
}
