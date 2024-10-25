import styled from "styled-components";
import Item from "@/ui/component/Item";

const Wrapper = styled.div`
    border-radius: 5%;
    background-color: white;
    width: 90%;
    height: fit-content;
    padding: 3%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const makeImgSrc = (key: string): string => {
    return `image/${key}.PNG`
}

export const ItemBox = () => {
    return (
        <Wrapper>
            <Item imgSrc={makeImgSrc("pillow")}></Item>
            <Item imgSrc={makeImgSrc("candle_green")}></Item>
            <Item imgSrc={makeImgSrc("camera")}></Item>
            <Item imgSrc={makeImgSrc("candle_white")}></Item>
            <Item imgSrc={makeImgSrc("sliders")}></Item>
            <Item imgSrc={makeImgSrc("perfume")}></Item>
            <Item imgSrc={makeImgSrc("ring")}></Item>
            <Item imgSrc={makeImgSrc("bag")}></Item>
            <Item imgSrc={makeImgSrc("cat")}></Item>
        </Wrapper>
    )
}

export default ItemBox