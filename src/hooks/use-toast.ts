import * as React from "react"

type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  function toast(props: Omit<Toast, "id">) {
    const id = genId()
    setToasts((prev) => [...prev, { id, ...props }])
  }

  return {
    toast,
    toasts,
  }
}
