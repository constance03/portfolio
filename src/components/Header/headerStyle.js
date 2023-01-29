import styled from "styled-components";

export const DivImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
 svg {
    position: relative;
    display: block;
    width: calc(128% + 1.3px);
    height: 152px;
    }

.shape-fill {
    fill: #144272;
}
`;