import { Wrapper } from "./styled.Flex";

const index = ({ children, className, ...props }) => (
    <Wrapper className={"flex " + (className || "")} {...props}>
        {children}
    </Wrapper>
);

export default index;
