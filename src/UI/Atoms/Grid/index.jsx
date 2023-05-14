import { Wrapper } from "./styled.Grid";

const index = ({ children, className, ...props }) => (
    <Wrapper className={"grid " + (className || "")} {...props}>
        {children}
    </Wrapper>
);

export default index;
