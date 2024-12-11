import { useState } from "react"

export const useItemManage = () => {
  const [itemArray, setItemArray] = useState<any[]>([{ id: 0, name: null, url: null, img: null }])

  const [currentId, setCurrentId] = useState(1)

  const addItem = () => {
    const newItem = {
      id: currentId,
      name: "",
      url: "",
      img: "",
    }
    setItemArray((prev) => [...prev, newItem])
    setCurrentId((prev) => prev + 1)
  }

  const saveItem = (id: number, name: string, url: string, img: any) => {
    console.log(`[saveItem] id: ${id}, name: ${name}, url: ${url}, img: ${img}`)

    setItemArray((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name, url, img } : item)),
    )
    console.log(`item ${id} saved! `)
  }

  const removeItem = (id: number) => {
    setItemArray((prev) => itemArray.filter((item) => item.id !== id))
  }

  return { itemArray, setItemArray, currentId, setCurrentId, addItem, saveItem, removeItem }
}

export default useItemManage
