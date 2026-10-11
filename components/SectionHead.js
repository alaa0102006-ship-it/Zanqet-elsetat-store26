import Reveal from './Reveal';
export default function SectionHead({ kicker, title, sub }) {
  return (
    <Reveal className="sec-head">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
