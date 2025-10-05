import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-style: italic;
`

export const GridWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
  width: 100%;
  justify-content: center;

  /* 🔹 화면 크기에 따라 자동으로 칸 수 조정 */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  /* 🔹 큰 화면에서는 좀 더 여유 있게 */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  /* 🔹 아주 작은 모바일에서는 하나씩 */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 10px;
  width: 400px;

  @media (max-width: 640px) {
    width: 90vw;
  }
`

export const Title = styled.div`
  color: black;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

export const AddButton = styled.div`
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-weight: 700;
  padding: 8px;
  text-align: center;
  flex: 1;
`
