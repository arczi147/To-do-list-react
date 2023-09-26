import { Unit, HeaderArea, Header, Field } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Unit>
        <HeaderArea>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderArea>
        <Field>
            {body}
        </Field>
    </Unit>
);

export default Section;