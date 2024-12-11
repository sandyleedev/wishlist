import styled from "styled-components"
import Item from "@/ui/component/Item"

const ItemWrapper = styled.div`
    border-radius: 5%;
    background-color: rgba(255, 255, 255, 0.5);
    width: 90%;
    height: fit-content;
    padding: 3%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    overflow: hidden; /* 블러 효과가 Wrapper 바깥으로 넘치지 않도록 설정 */

    /* hover 상태에서 블러 효과를 감싸는 블러 레이어 */
    &:hover .blur-layer {
        opacity: 1; /* hover 시 블러 레이어를 표시 */
    }
`

export const makeImgSrc = (key: string): string => {
    return `image/${key}.PNG`
}

export const ItemBox = () => {
    return (
        <ItemWrapper>
            <Item imgSrc={makeImgSrc("pillow")}></Item>
            <Item imgSrc={makeImgSrc("candle_green")}></Item>
            <Item imgSrc={makeImgSrc("camera")}></Item>
            <Item imgSrc={makeImgSrc("candle_white")}></Item>
            <Item imgSrc={makeImgSrc("sliders")}></Item>
            <Item imgSrc={makeImgSrc("perfume")}></Item>
            <Item imgSrc={makeImgSrc("ring")}></Item>
            <Item imgSrc={makeImgSrc("bag")}></Item>
            <Item imgSrc={makeImgSrc("cat")}></Item>
        </ItemWrapper>
    )
}

export default ItemBox
