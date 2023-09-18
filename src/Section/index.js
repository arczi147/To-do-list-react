import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__headerArea">
            <h2 className="section__header section__header--media">{title}</h2>
            {extraHeaderContent}
        </div>
        <div className="section__field">
            {body}
        </div>
    </section>
);

export default Section;