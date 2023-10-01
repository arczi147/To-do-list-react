import { StyledSection, Header, Title, Field } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Header>
        <Field>
            {body}
        </Field>
    </StyledSection>
);

export default Section;