import { Input } from "@/components/react/ui/input";
import type { message, user } from "@/lib/server/schema";
import type { InferSelectModel } from "drizzle-orm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios"
import type { User } from "better-auth";

type Message = InferSelectModel<typeof message>
type ModelUser = InferSelectModel<typeof user>
type InnerJoin = { message: Message, user: ModelUser }

export function Form() {
  const [text, setText] = useState("")
  const [pesanList, setPesan] = useState<InnerJoin[]>([]);
  const [user, setUser] = useState<User | undefined>()

  const fetchPesan = useCallback(() => {
    axios.get("/api/message/get")
      .then(res => {
        setPesan(res.data.messages)
        console.log(res.data)
      })
  }, [])

  const fetchUser = useCallback(() => {
    axios.get("/api/getsession")
      .then(res => setUser(res.data.user))
  }, [])

  const sendPesan = useCallback(() => {
    axios.post("/api/message/send", { text })
      .then(res => {
        alert(res.data.message)
        fetchPesan()
        setText("")
      })
  }, [text])

  const deletePesan = useCallback((id: string) => {
    axios.delete(`/api/message/delete/${id}`)
      .then(res => {
        alert(res.data.message)
        fetchPesan()
      })
  }, [])

  useEffect(() => {
    fetchPesan()
    fetchUser()
  }, [])

  return (
    <>
      {user ? (
        <div className="bg-[#2a263d] rounded-lg max-w-2xl shadow-lg w-full p-6 space-y-4 mb-8">
          <form className="flex gap-2 " onSubmit={(e) => {
            e.preventDefault()
            sendPesan()
          }}>
            <Input
              id="pesan"
              required
              placeholder="isi di sini..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-[#1e1b2e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></Input>

            <button
              type="submit"
              className=" bg-purple-600 hover:bg-purple-700 w-[300px] transition-colors px-4 py-2 rounded-md font-semibold"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#2a263d] rounded-lg max-w-2xl flex shadow-lg w-full p-6 space-y-4 mb-8">
          <a
            href="/auth"
            className=" bg-purple-600 hover:bg-purple-700 w-full transition-colors px-4 py-2 rounded-md font-semibold"
          >
            login untuk kirim pesan
          </a>
        </div>
      )}

      <div className="bg-[#2a263d] rounded-lg shadow-lg w-full max-w-2xl min-h-[400px] p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">Pesan Terbaru</h2>
        <ul className="space-y-3">
          {pesanList.length > 0 && pesanList.map((item, index) => (
            <li className="bg-[#1e1b2e] p-4 rounded-md border border-gray-700" key={index}>
              <p className="font-bold text-purple-400">{item.user.name || item.user.email.replaceAll("@gmail.com", "")}</p>
              <p className="text-sm text-gray-200 mt-1">{item.message.content}</p>
              {item.user.id && user?.id && (
                <button onClick={() => deletePesan(item.message.id)} className="text-sm text-red-400">delete</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
