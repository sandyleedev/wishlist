import Wishlist from "@/ui/page/Wishlist"
import { GetServerSideProps } from "next"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!
  try {
    const { data } = await axios.get(`/wishlist/${id}`)
    console.log("@@@ data from server", data.data)
    return {
      props: data.data,
    }
  } catch (e) {
    console.error(e)
    return {
      props: [],
    }
  }
}

export default Wishlist
