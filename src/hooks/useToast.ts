import { useState } from "react";

export default function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  };

  return {
    message,
    type,
    showToast,
  };
}
