import Home from "@/ui/page/Home"
import { GetServerSideProps } from "next"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://127.0.0.1:8000/hello")
  const data = res.data

  return {
    props: { data: data },
  }
}

export default Home
