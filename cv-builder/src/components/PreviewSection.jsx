export function PreviewHeader({ info }) {
  return (
    <div className="preview-header" id={info.name}>
      <h1>{info.name || "Jon Doe"}</h1>
      <p>
        {info.email && <span>📧 {info.email}</span>}
        {info.phone && <span>📞{info.phone}</span>}
      </p>
    </div>
  );
}

export function PreviewSection({ title, info }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="preview-item">
        <h3></h3>
      </div>
    </>
  );
}
