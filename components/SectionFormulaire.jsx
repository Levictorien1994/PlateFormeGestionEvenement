export default function SectionFormulaire({ title, children }) {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>
            <div>{children}</div>
        </div>
    );
}
